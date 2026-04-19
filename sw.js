// ============================================================
// CUMBRE MONTEVIDEO 2026 — Service Worker (offline support)
// ============================================================

const CACHE_NAME = 'cumbre2026-v4';

const ASSETS = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/styles/components.css',
  '/styles/animations.css',
  '/styles/responsive.css',
  '/js/app.js',
  '/js/data.js',
  '/js/ui.js',
  '/js/agenda.js',
  '/js/filters.js',
];

// Install — cache all assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — network-first strategy (always fresh, cache as offline fallback)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      }
      return response;
    }).catch(() => {
      return caches.match(event.request).then(cached => {
        if (cached) return cached;
        if (event.request.mode === 'navigate') return caches.match('/index.html');
      });
    })
  );
});
