// ============================================================
// CUMBRE MONTEVIDEO 2026 — UI Rendering
// ============================================================

import { ROOMS } from './data.js';

const ROOM_KEYS = ['azul', 'ceremonias', 'rojo', 'dorado'];

const ROOM_LABELS = {
  azul: 'Salón Azul',
  ceremonias: 'Salón de Ceremonias',
  rojo: 'Salón Rojo',
  dorado: 'Salón Dorado',
  all: 'Todos los salones',
};

const ROOM_COLORS = {
  azul: 'var(--room-azul)',
  ceremonias: 'var(--room-ceremonias)',
  rojo: 'var(--room-rojo)',
  dorado: 'var(--room-dorado)',
  all: 'var(--room-all)',
};

// ── Helpers ──────────────────────────────────────────────────

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function isNowLive(event) {
  const now = new Date();
  const eventDate = event.day;
  const todayStr = now.toISOString().slice(0, 10);
  if (eventDate !== todayStr) return false;

  const [sh, sm] = event.start.split(':').map(Number);
  const [eh, em] = event.end.split(':').map(Number);
  const startMin = sh * 60 + sm;
  const endMin = eh * 60 + em;
  const nowMin = now.getHours() * 60 + now.getMinutes();

  return nowMin >= startMin && nowMin < endMin;
}

// ── Card HTML ────────────────────────────────────────────────

export function renderCard(event, savedIds, index = 0) {
  const isSaved = savedIds.has(event.id);
  const isBreak = ['break', 'lunch'].includes(event.type);
  const isOpening = event.type === 'opening';
  const live = isNowLive(event);

  if (isBreak || isOpening) {
    const cls = isOpening ? 'card card--opening' : 'card card--break';
    return `
      <article class="${cls}${live ? ' now-indicator' : ''}"
               data-animate style="animation-delay: ${index * 30}ms">
        <div class="card__title" style="-webkit-line-clamp:unset">${escapeHtml(event.title)}</div>
        ${event.description ? `<div class="card__description" style="display:block">${escapeHtml(event.description)}</div>` : ''}
      </article>`;
  }

  const typeClass = event.type === 'book' ? ' card--book' : event.type === 'panel' ? ' card--panel' : '';
  const savedClass = isSaved ? ' card--saved' : '';

  let typeTag = '';
  if (event.type === 'book') {
    typeTag = '<span class="card__type-tag card__type-tag--book">📖 Libro</span>';
  } else if (event.type === 'panel') {
    typeTag = '<span class="card__type-tag card__type-tag--panel">👥 Panel</span>';
  }

  return `
    <article class="card${typeClass}${savedClass}${live ? ' now-indicator' : ''}"
             style="--card-room-color: ${ROOM_COLORS[event.room] || ROOM_COLORS.all}; animation-delay: ${index * 30}ms"
             data-id="${event.id}" data-animate>
      <div class="card__header">
        <span class="card__room-tag">
          <span class="card__room-dot" style="background:${ROOM_COLORS[event.room] || ROOM_COLORS.all}"></span>
          ${ROOM_LABELS[event.room] || event.room}
        </span>
        <button class="card__bookmark${isSaved ? ' is-saved' : ''}"
                data-bookmark="${event.id}"
                type="button"
                aria-label="${isSaved ? 'Quitar de mi agenda' : 'Guardar en mi agenda'}"
                title="${isSaved ? 'Quitar de mi agenda' : 'Guardar en mi agenda'}">
          ${isSaved ? '🔖' : '🏷️'}
        </button>
      </div>
      <h3 class="card__title">${escapeHtml(event.title)}</h3>
      ${event.speaker ? `
        <div class="card__speaker">
          <span class="card__speaker-flag">${event.countryEmoji}</span>
          <span>${escapeHtml(event.speaker)}</span>
          ${event.country ? `<span style="color:var(--text-tertiary)">· ${escapeHtml(event.country)}</span>` : ''}
        </div>` : ''}
      <div class="card__meta">
        ${typeTag}
      </div>
      ${event.description ? `<div class="card__description">${escapeHtml(event.description)}</div>` : ''}
    </article>`;
}

// ── Group events into time slots ─────────────────────────────

function groupByTimeSlot(dayEvents) {
  const timeSlots = new Map();
  for (const ev of dayEvents) {
    const key = ev.start;
    if (!timeSlots.has(key)) timeSlots.set(key, { start: ev.start, end: ev.end, events: [] });
    const slot = timeSlots.get(key);
    // Use the latest end time for the slot header
    if (ev.end > slot.end) slot.end = ev.end;
    slot.events.push(ev);
  }
  return [...timeSlots.values()].sort((a, b) => a.start.localeCompare(b.start));
}

// ── Desktop: Time-Block Schedule ─────────────────────────────

export function renderSchedule(dayEvents, savedIds, container) {
  const slots = groupByTimeSlot(dayEvents);

  if (slots.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="no-results__icon">📭</div>
        <div class="no-results__text">No hay eventos para este día</div>
      </div>`;
    return;
  }

  let html = '';
  let cardIndex = 0;

  for (const slot of slots) {
    const isFullWidth = slot.events.some(e => e.room === 'all');

    html += `<section class="time-block">`;
    html += `
      <div class="time-block__header">
        <span class="time-block__time">${slot.start} – ${slot.end}</span>
        <span class="time-block__line"></span>
      </div>`;

    if (isFullWidth) {
      const fullEvent = slot.events.find(e => e.room === 'all');
      html += renderCard(fullEvent, savedIds, cardIndex++);
    } else {
      html += '<div class="time-block__grid">';
      // Render in consistent room order so columns align visually
      for (const roomKey of ROOM_KEYS) {
        const ev = slot.events.find(e => e.room === roomKey);
        if (ev) {
          html += renderCard(ev, savedIds, cardIndex++);
        } else {
          html += '<div></div>';
        }
      }
      html += '</div>';
    }

    html += '</section>';
  }

  container.innerHTML = html;
}

// ── Mobile Timeline ──────────────────────────────────────────

export function renderTimeline(dayEvents, savedIds, container, roomFilter = 'all') {
  let filtered;
  if (roomFilter === 'all') {
    filtered = dayEvents;
  } else {
    filtered = dayEvents.filter(e => e.room === roomFilter || e.room === 'all');
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="no-results__icon">📭</div>
        <div class="no-results__text">No hay eventos en este salón</div>
      </div>`;
    return;
  }

  // Group into time slots for the same grouped header experience
  const slots = groupByTimeSlot(filtered);

  let html = '';
  let cardIndex = 0;

  for (const slot of slots) {
    html += `<section class="time-block">`;
    html += `
      <div class="time-block__header">
        <span class="time-block__time">${slot.start} – ${slot.end}</span>
        <span class="time-block__line"></span>
      </div>`;

    for (const ev of slot.events) {
      html += renderCard(ev, savedIds, cardIndex++);
    }

    html += '</section>';
  }

  container.innerHTML = html;
}

// ── Room Chips ───────────────────────────────────────────────

export function renderRoomChips(container, activeRoom = 'all') {
  const rooms = [
    { id: 'all', label: 'Todos', color: 'var(--room-all)' },
    { id: 'azul', label: 'Azul', color: 'var(--room-azul)' },
    { id: 'ceremonias', label: 'Ceremonias', color: 'var(--room-ceremonias)' },
    { id: 'rojo', label: 'Rojo', color: 'var(--room-rojo)' },
    { id: 'dorado', label: 'Dorado', color: 'var(--room-dorado)' },
  ];

  container.innerHTML = rooms.map(r => `
    <button class="room-chip${r.id === activeRoom ? ' is-active' : ''}"
            style="--chip-color: ${r.color}"
            data-room="${r.id}" role="tab"
            aria-selected="${r.id === activeRoom}">
      <span class="room-chip__dot" style="background:${r.color}"></span>
      ${r.label}
    </button>
  `).join('');
}

// ── Agenda Panel Rendering ───────────────────────────────────

export function renderAgendaPanel(savedEvents, body) {
  if (savedEvents.length === 0) {
    body.innerHTML = `
      <div class="agenda-empty">
        <div class="agenda-empty__icon">📋</div>
        <p>Tu agenda está vacía</p>
        <p style="font-size:var(--font-size-xs)">Tocá 🏷️ en cualquier charla para guardarla</p>
      </div>`;
    return;
  }

  // Group by day
  const byDay = new Map();
  for (const ev of savedEvents) {
    if (!byDay.has(ev.day)) byDay.set(ev.day, []);
    byDay.get(ev.day).push(ev);
  }

  const dayLabels = {
    '2026-04-21': 'Martes 21 de Abril',
    '2026-04-22': 'Miércoles 22 de Abril',
    '2026-04-23': 'Jueves 23 de Abril',
  };

  let html = '';

  // Detect conflicts
  const conflicts = detectConflicts(savedEvents);
  if (conflicts.length > 0) {
    for (const c of conflicts) {
      html += `
        <div class="conflict-alert">
          <span class="conflict-alert__icon">⚠️</span>
          <span><strong>Conflicto:</strong> "${escapeHtml(c[0].title)}" y "${escapeHtml(c[1].title)}" se superponen (${c[0].start}–${c[0].end})</span>
        </div>`;
    }
  }

  const sortedDays = [...byDay.keys()].sort();
  for (const day of sortedDays) {
    const events = byDay.get(day).sort((a, b) => a.start.localeCompare(b.start));
    html += `
      <div class="agenda-day-group">
        <div class="agenda-day-group__title">${dayLabels[day] || day}</div>
        ${events.map(ev => `
          <div class="agenda-item" data-id="${ev.id}">
            <div class="agenda-item__info">
              <div class="agenda-item__time">${ev.start} – ${ev.end}</div>
              <div class="agenda-item__title">${escapeHtml(ev.title)}</div>
              ${ev.speaker ? `<div class="agenda-item__speaker">${ev.countryEmoji} ${escapeHtml(ev.speaker)}</div>` : ''}
              <div class="agenda-item__room">
                <span class="card__room-dot" style="background:${ROOM_COLORS[ev.room] || ROOM_COLORS.all}"></span>
                ${ROOM_LABELS[ev.room] || ev.room}
              </div>
            </div>
            <button class="agenda-item__remove" data-remove="${ev.id}"
                    type="button" aria-label="Quitar ${escapeHtml(ev.title)}">✕</button>
          </div>
        `).join('')}
      </div>`;
  }

  body.innerHTML = html;
}

// ── Conflict detection ───────────────────────────────────────

function detectConflicts(events) {
  const conflicts = [];
  const sorted = [...events].sort((a, b) => {
    if (a.day !== b.day) return a.day.localeCompare(b.day);
    return a.start.localeCompare(b.start);
  });

  for (let i = 0; i < sorted.length; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i].day !== sorted[j].day) break;
      // Overlapping if start_j < end_i
      if (sorted[j].start < sorted[i].end) {
        conflicts.push([sorted[i], sorted[j]]);
      }
    }
  }
  return conflicts;
}

// ── Toast ────────────────────────────────────────────────────

let toastTimeout = null;
export function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('is-visible'), 2500);
}
