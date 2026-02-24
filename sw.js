const CACHE_NAME = 'alpha-x-v19';
const ASSETS = [
    'index.html',
    'styles.css',
    'app.js',
    'manifest.json'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then((keys) => {
                return Promise.all(
                    keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
                );
            })
        ])
    );
});

self.addEventListener('fetch', (event) => {
    // Aggressive Network-First strategy for EVERY asset during development/syncing
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // If network works, update the cache and return response
                const clonedResponse = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, clonedResponse);
                });
                return response;
            })
            .catch(() => {
                // If network fails (offline), try the cache
                return caches.match(event.request);
            })
    );
});
