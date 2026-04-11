// ============================================================
// CUMBRE MONTEVIDEO 2026 — Main App
// ============================================================

import { events, getEventsByDay, DAYS } from './data.js';
import {
  renderSchedule, renderTimeline, renderRoomChips,
  renderAgendaPanel, renderCard, showToast
} from './ui.js';
import {
  initAgenda, getSavedIds, getSavedEvents, getSavedCount,
  toggleEvent, removeEvent, clearAll, importAgenda,
  copyShareUrl, exportICS
} from './agenda.js';
import { initFilters, filterEvents, scrollToNow } from './filters.js';

// ── State ────────────────────────────────────────────────────

let currentDay = DAYS[0].id;
let currentRoom = 'all';

// ── DOM refs ─────────────────────────────────────────────────

const schedule       = document.getElementById('schedule');
const timeline       = document.getElementById('timeline');
const roomChips      = document.getElementById('roomChips');
const agendaBadge    = document.getElementById('agendaBadge');
const agendaOverlay  = document.getElementById('agendaOverlay');
const agendaBody     = document.getElementById('agendaBody');
const importModal    = document.getElementById('importModal');
const confirmDialog  = document.getElementById('confirmDialog');

// ── Init ─────────────────────────────────────────────────────

function init() {
  // Init agenda (may return import data from URL hash)
  const importData = initAgenda(onAgendaChange);

  // Init filters
  initFilters(renderCurrentView);

  // Render room chips (mobile)
  renderRoomChips(roomChips, currentRoom);

  // Bind events
  bindDayTabs();
  bindRoomChips();
  bindAgendaPanel();
  bindBookmarks();
  bindThemeToggle();
  bindKeyboard();

  // Determine initial day — if event date matches today, start on that day
  const today = new Date().toISOString().slice(0, 10);
  const matchingDay = DAYS.find(d => d.id === today);
  if (matchingDay) {
    currentDay = matchingDay.id;
    updateDayTabs();
  }

  // Initial render
  renderCurrentView();
  updateBadge();

  // Handle import from URL
  if (importData) {
    handleImport(importData.importIds, importData.localEmpty);
  }

  // "Now" mode — auto-scroll if today is an event day
  if (matchingDay) {
    setTimeout(scrollToNow, 500);
  }

  // Register service worker for offline
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

// ── Rendering ────────────────────────────────────────────────

function renderCurrentView() {
  const dayEvents = getEventsByDay(currentDay);
  const filtered = filterEvents(dayEvents);
  const savedIds = getSavedIds();

  // Desktop: time-block schedule
  renderSchedule(filtered, savedIds, schedule);

  // Mobile: timeline
  renderTimeline(filtered, savedIds, timeline, currentRoom);
}

function onAgendaChange() {
  updateBadge();
  renderCurrentView();
}

// ── Badge ────────────────────────────────────────────────────

function updateBadge() {
  const count = getSavedCount();
  agendaBadge.textContent = count;
  agendaBadge.classList.toggle('badge--hidden', count === 0);
  agendaBadge.classList.add('is-bumping');
  setTimeout(() => agendaBadge.classList.remove('is-bumping'), 300);
}

// ── Day Tabs ─────────────────────────────────────────────────

function bindDayTabs() {
  const tabs = document.getElementById('dayTabs');
  tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.day-tab');
    if (!tab) return;
    currentDay = tab.dataset.day;
    updateDayTabs();
    renderCurrentView();
  });
}

function updateDayTabs() {
  document.querySelectorAll('.day-tab').forEach(tab => {
    const isActive = tab.dataset.day === currentDay;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', isActive);
  });
}

// ── Room Chips (mobile) ──────────────────────────────────────

function bindRoomChips() {
  roomChips.addEventListener('click', (e) => {
    const chip = e.target.closest('.room-chip');
    if (!chip) return;
    currentRoom = chip.dataset.room;
    renderRoomChips(roomChips, currentRoom);
    renderCurrentView();
  });
}

// ── Bookmarks (event delegation) ─────────────────────────────

function bindBookmarks() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-bookmark]');
    if (!btn) return;

    const id = btn.dataset.bookmark;
    const nowSaved = toggleEvent(id);

    // Animate
    btn.classList.add('is-animating');
    if (nowSaved) btn.classList.add('is-saving');
    setTimeout(() => {
      btn.classList.remove('is-animating', 'is-saving');
    }, 500);

    showToast(nowSaved ? '✓ Guardado en tu agenda' : '✓ Quitado de tu agenda');
  });

  // Agenda item remove
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-remove]');
    if (!btn) return;
    removeEvent(btn.dataset.remove);
    renderAgendaContent();
  });
}

// ── Agenda Panel ─────────────────────────────────────────────

function bindAgendaPanel() {
  const openBtn = document.getElementById('agendaBtn');
  const closeBtn = document.getElementById('agendaClose');
  const backdrop = document.getElementById('agendaBackdrop');

  openBtn.addEventListener('click', openAgenda);
  closeBtn.addEventListener('click', closeAgenda);
  backdrop.addEventListener('click', closeAgenda);

  // Export
  document.getElementById('exportIcs').addEventListener('click', () => {
    if (getSavedCount() === 0) {
      showToast('Tu agenda está vacía');
      return;
    }
    exportICS();
    showToast('📅 Archivo .ics descargado');
  });

  // Share
  document.getElementById('shareAgenda').addEventListener('click', async () => {
    if (getSavedCount() === 0) {
      showToast('Tu agenda está vacía');
      return;
    }
    const ok = await copyShareUrl();
    showToast(ok ? '🔗 ¡Link copiado al portapapeles!' : 'No se pudo copiar el link');
  });

  // Clear
  document.getElementById('clearAgenda').addEventListener('click', () => {
    if (getSavedCount() === 0) return;
    showConfirm('¿Seguro que querés vaciar toda tu agenda?', () => {
      clearAll();
      renderAgendaContent();
      showToast('Agenda vaciada');
    });
  });
}

function openAgenda() {
  renderAgendaContent();
  agendaOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  // Focus trap — focus close button
  document.getElementById('agendaClose').focus();
}

function closeAgenda() {
  agendaOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

function renderAgendaContent() {
  renderAgendaPanel(getSavedEvents(), agendaBody);
}

// ── Theme Toggle ─────────────────────────────────────────────

function bindThemeToggle() {
  const btn = document.getElementById('themeToggle');
  const icon = btn.querySelector('.theme-toggle__icon');

  // Load saved theme
  const saved = localStorage.getItem('cumbre2026_theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    icon.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    icon.textContent = next === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('cumbre2026_theme', next);
  });
}

// ── Keyboard ─────────────────────────────────────────────────

function bindKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Escape closes panels
    if (e.key === 'Escape') {
      if (agendaOverlay.classList.contains('is-open')) {
        closeAgenda();
        return;
      }
      if (confirmDialog.classList.contains('is-open')) {
        closeConfirm();
        return;
      }
      if (importModal.classList.contains('is-open')) {
        closeImportModal();
        return;
      }
    }

    // 1/2/3 to switch days
    if (['1', '2', '3'].includes(e.key) && !e.ctrlKey && !e.metaKey && !isInputFocused()) {
      const dayIndex = parseInt(e.key) - 1;
      if (DAYS[dayIndex]) {
        currentDay = DAYS[dayIndex].id;
        updateDayTabs();
        renderCurrentView();
      }
    }

    // / to focus search
    if (e.key === '/' && !isInputFocused()) {
      e.preventDefault();
      document.getElementById('searchInput').focus();
    }
  });
}

function isInputFocused() {
  const el = document.activeElement;
  return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA');
}

// ── Import from URL ──────────────────────────────────────────

function handleImport(ids, localEmpty) {
  // Validate IDs
  const validIds = ids.filter(id => events.some(e => e.id === id));
  if (validIds.length === 0) return;

  if (localEmpty) {
    // Auto-import if local is empty
    document.getElementById('importCount').textContent = validIds.length;
    importModal.classList.add('is-open');

    document.getElementById('importAccept').onclick = () => {
      importAgenda(validIds);
      closeImportModal();
      showToast(`✓ ${validIds.length} charlas guardadas`);
    };

    document.getElementById('importCancel').onclick = closeImportModal;
    document.getElementById('importBackdrop').onclick = closeImportModal;
  } else {
    // Ask to merge
    document.getElementById('importCount').textContent = validIds.length;
    document.getElementById('importModal').querySelector('.import-modal__title').textContent = '📥 Agenda compartida';
    importModal.classList.add('is-open');

    document.getElementById('importAccept').onclick = () => {
      importAgenda(validIds);
      closeImportModal();
      showToast(`✓ ${validIds.length} charlas importadas`);
    };

    document.getElementById('importCancel').onclick = closeImportModal;
    document.getElementById('importBackdrop').onclick = closeImportModal;
  }

  // Clean hash from URL without reload
  history.replaceState(null, '', window.location.pathname);
}

function closeImportModal() {
  importModal.classList.remove('is-open');
}

// ── Confirm Dialog ───────────────────────────────────────────

let confirmCallback = null;

function showConfirm(text, onOk) {
  document.getElementById('confirmText').textContent = text;
  confirmDialog.classList.add('is-open');
  confirmCallback = onOk;

  document.getElementById('confirmOk').onclick = () => {
    closeConfirm();
    if (confirmCallback) confirmCallback();
  };

  document.getElementById('confirmCancel').onclick = closeConfirm;
  document.getElementById('confirmBackdrop').onclick = closeConfirm;
}

function closeConfirm() {
  confirmDialog.classList.remove('is-open');
  confirmCallback = null;
}

// ── Boot ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', init);
