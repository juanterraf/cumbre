// ============================================================
// CUMBRE MONTEVIDEO 2026 — Agenda (localStorage, share, .ics)
// ============================================================

import { events } from './data.js';

const STORAGE_KEY = 'cumbre2026_agenda';

// ── State ────────────────────────────────────────────────────

let savedIds = new Set();
let onChangeCallback = null;

// ── Init ─────────────────────────────────────────────────────

export function initAgenda(onChange) {
  onChangeCallback = onChange;

  // Load from localStorage
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const ids = JSON.parse(stored);
      if (Array.isArray(ids)) savedIds = new Set(ids);
    }
  } catch { /* ignore corrupt data */ }

  // Check URL hash for shared agenda
  const hashData = readHashAgenda();
  if (hashData && hashData.length > 0) {
    return { importIds: hashData, localEmpty: savedIds.size === 0 };
  }

  return null;
}

// ── Public getters ───────────────────────────────────────────

export function getSavedIds() {
  return savedIds;
}

export function getSavedEvents() {
  return events.filter(e => savedIds.has(e.id));
}

export function getSavedCount() {
  return savedIds.size;
}

// ── Toggle ───────────────────────────────────────────────────

export function toggleEvent(id) {
  if (savedIds.has(id)) {
    savedIds.delete(id);
  } else {
    savedIds.add(id);
  }
  persist();
  if (onChangeCallback) onChangeCallback();
  return savedIds.has(id);
}

export function removeEvent(id) {
  savedIds.delete(id);
  persist();
  if (onChangeCallback) onChangeCallback();
}

export function clearAll() {
  savedIds.clear();
  persist();
  if (onChangeCallback) onChangeCallback();
}

export function importAgenda(ids) {
  savedIds = new Set(ids.filter(id => events.some(e => e.id === id)));
  persist();
  if (onChangeCallback) onChangeCallback();
}

// ── Persistence ──────────────────────────────────────────────

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...savedIds]));
  } catch { /* storage full, ignore */ }
}

// ── URL hash sharing ─────────────────────────────────────────

function readHashAgenda() {
  const hash = window.location.hash.slice(1);
  if (!hash) return null;
  try {
    const json = atob(hash);
    const data = JSON.parse(json);
    if (data && Array.isArray(data.ids)) return data.ids;
  } catch { /* invalid hash */ }
  return null;
}

export function generateShareUrl() {
  const ids = [...savedIds];
  const payload = JSON.stringify({ ids });
  const encoded = btoa(payload);
  return `${window.location.origin}${window.location.pathname}#${encoded}`;
}

export async function copyShareUrl() {
  const url = generateShareUrl();
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = url;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  }
}

// ── .ICS Export (RFC 5545) ───────────────────────────────────

export function exportICS() {
  const saved = getSavedEvents();
  if (saved.length === 0) return;

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Cumbre Montevideo 2026//Agenda//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Cumbre Montevideo 2026',
    'X-WR-TIMEZONE:America/Montevideo',
    '',
    'BEGIN:VTIMEZONE',
    'TZID:America/Montevideo',
    'BEGIN:STANDARD',
    'DTSTART:19700101T000000',
    'TZOFFSETFROM:-0300',
    'TZOFFSETTO:-0300',
    'TZNAME:-03',
    'END:STANDARD',
    'END:VTIMEZONE',
  ];

  for (const ev of saved) {
    const dtStart = formatICSDate(ev.day, ev.start);
    const dtEnd = formatICSDate(ev.day, ev.end);
    const uid = `${ev.id}@cumbre2026.uy`;
    const summary = ev.speaker
      ? `${ev.speaker} – ${ev.title}`
      : ev.title;
    const room = getRoomLabel(ev.room);

    lines.push('');
    lines.push('BEGIN:VEVENT');
    lines.push(`DTSTART;TZID=America/Montevideo:${dtStart}`);
    lines.push(`DTEND;TZID=America/Montevideo:${dtEnd}`);
    lines.push(`UID:${uid}`);
    lines.push(`SUMMARY:${icsEscape(summary)}`);
    lines.push(`LOCATION:${icsEscape(`${room} – Centro de Conferencias, Intendencia de Montevideo`)}`);
    if (ev.description) {
      lines.push(`DESCRIPTION:${icsEscape(ev.description)}`);
    }
    lines.push(`DTSTAMP:${formatICSNow()}`);
    lines.push('END:VEVENT');
  }

  lines.push('');
  lines.push('END:VCALENDAR');

  const content = lines.join('\r\n');
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'cumbre-montevideo-2026.ics';
  a.click();
  URL.revokeObjectURL(url);
}

// ── ICS helpers ──────────────────────────────────────────────

function formatICSDate(day, time) {
  // "2026-04-21" + "09:00" → "20260421T090000"
  return day.replace(/-/g, '') + 'T' + time.replace(':', '') + '00';
}

function formatICSNow() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function icsEscape(str) {
  return str.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

function getRoomLabel(room) {
  const labels = {
    azul: 'Salón Azul',
    ceremonias: 'Salón de Ceremonias',
    rojo: 'Salón Rojo',
    dorado: 'Salón Dorado',
    all: 'Centro de Conferencias',
  };
  return labels[room] || room;
}
