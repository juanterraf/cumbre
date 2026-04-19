// ============================================================
// CUMBRE MONTEVIDEO 2026 — Filters (search, country, "Now")
// ============================================================

import { events, getCountries } from './data.js';

// ── State ────────────────────────────────────────────────────

let searchQuery = '';
let selectedCountry = '';
let asacopOnly = false;
let onFilterChange = null;

// ── Init ─────────────────────────────────────────────────────

export function initFilters(onChange) {
  onFilterChange = onChange;
  setupSearch();
  setupCountryFilter();
  setupAsacopFilter();
}

// ── Getters ──────────────────────────────────────────────────

export function getSearchQuery() { return searchQuery; }
export function getSelectedCountry() { return selectedCountry; }
export function getAsacopOnly() { return asacopOnly; }

// ── Filter events ────────────────────────────────────────────

export function filterEvents(dayEvents) {
  let filtered = dayEvents;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.speaker.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q)
    );
  }

  if (selectedCountry) {
    filtered = filtered.filter(e => {
      // Keep breaks/lunch/opening visible
      if (e.room === 'all') return true;
      return e.country.split(' / ').some(c => c === selectedCountry);
    });
  }

  if (asacopOnly) {
    filtered = filtered.filter(e => e.room === 'all' || e.asacop === true);
  }

  return filtered;
}

// ── Search ───────────────────────────────────────────────────

function setupSearch() {
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = input.value.trim();
      if (onFilterChange) onFilterChange();
    }, 200);
  });

  clear.addEventListener('click', () => {
    input.value = '';
    searchQuery = '';
    if (onFilterChange) onFilterChange();
    input.focus();
  });
}

// ── Country Filter ───────────────────────────────────────────

function setupCountryFilter() {
  const btn = document.getElementById('countryBtn');
  const dropdown = document.getElementById('countryDropdown');
  const label = document.getElementById('countryLabel');
  const countries = getCountries();

  // Build dropdown options
  let html = `
    <button class="country-filter__option is-selected" data-country=""
            role="option" aria-selected="true">
      Todos los países
    </button>`;

  for (const country of countries) {
    html += `
      <button class="country-filter__option" data-country="${country}"
              role="option" aria-selected="false">
        ${country}
      </button>`;
  }
  dropdown.innerHTML = html;

  // Toggle dropdown
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Select country
  dropdown.addEventListener('click', (e) => {
    const option = e.target.closest('[data-country]');
    if (!option) return;

    selectedCountry = option.dataset.country;

    // Update visual state
    dropdown.querySelectorAll('.country-filter__option').forEach(o => {
      o.classList.toggle('is-selected', o.dataset.country === selectedCountry);
      o.setAttribute('aria-selected', o.dataset.country === selectedCountry);
    });

    label.textContent = selectedCountry || 'País';
    btn.classList.toggle('is-active', !!selectedCountry);
    dropdown.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');

    if (onFilterChange) onFilterChange();
  });

  // Close on outside click
  document.addEventListener('click', () => {
    dropdown.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  });
}

// ── ASACOP Filter ────────────────────────────────────────────

function setupAsacopFilter() {
  const btn = document.getElementById('asacopBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    asacopOnly = !asacopOnly;
    btn.classList.toggle('is-active', asacopOnly);
    btn.setAttribute('aria-pressed', asacopOnly);
    if (onFilterChange) onFilterChange();
  });
}

// ── "Now" mode — auto-scroll to current slot ─────────────────

export function scrollToNow() {
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);
  const nowMin = now.getHours() * 60 + now.getMinutes();

  // Find the current event
  const currentEvent = events.find(e => {
    if (e.day !== todayStr) return false;
    const [sh, sm] = e.start.split(':').map(Number);
    const [eh, em] = e.end.split(':').map(Number);
    return nowMin >= sh * 60 + sm && nowMin < eh * 60 + em;
  });

  if (currentEvent) {
    const card = document.querySelector(`[data-id="${currentEvent.id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
