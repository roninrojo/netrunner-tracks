const cacheName = "app-v1";
const files = [
    "./",
    "./index.html",
    "./css/styles.css",
    "./js/app.js",
    "./js/register-sw.js"
]

self.addEventListener('install', e => {
    console.log("Instalado ⬇️", e);

    // Espera a que se descarguen los archivos de cache
    e.waitUntil(
        caches.open(cacheName)
        .then( cache => {
            console.log("caching...");
            cache.addAll(files);
        })
    )
    
});

// fetch install files
self.addEventListener('fetch', e => {
    console.log("Fetching... 👀", e);

    e.respondWith(
        caches.match(e.request)
            .then(response => response)
    )
})