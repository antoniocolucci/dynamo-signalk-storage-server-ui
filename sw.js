let cacheName = 'Dynamo_cache';
let filesToCache = [
    '/',
    '/public/home.html',
    '/static/bootstrap/css/bootstrap.css',
    '/static/css/homeCSS/contentHome.css',
    'static/css/home.css',
    '/static/css/style.css',
    '/static/images/icon.png',
    '/static/images/body_home/cestino.png',
    '/static/images/header/icon.png',
    '/static/js/home.js',
    '/static/js/timeline.js',
    '/static/bootstrap/js/bootstrap.esm.js',
    'main.js',
    'manifest.json',
];


/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});