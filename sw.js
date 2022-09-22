const cacheName = "app-v1-3";
const files = [
    "./",
    "./index.html",
    "./manifest.json",
    "./css/styles.css",
    "./css/augmented-ui.min.css",
    "./img/favicon-32x32.png",
    "./img/favicon-16x16.png",
    "./img/NISEI_CLICK.svg",
    "./img/NISEI_CREDIT.svg",
    "./img/NISEI_AGENDA.svg",
    "./js/register-sw.js",
    "./js/app.js",
    "./js/functions.js",
    "./js/selectors.js",
    "./js/clases/app.js",
    "./js/clases/player.js"
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

self.addEventListener('activate', e => console.log('Service worker activate event!'));

// fetch install files
// self.addEventListener('fetch', e => {
//     console.log("Fetching... 👀", e);

//     e.respondWith( 
//         caches.match(e.request)
//             .then(response => response)
//             .catch(error => console.log(error))
//     )
// })

self.addEventListener('fetch', e => {
  console.log('Fetch intercepted for:', e.request.url);
  e.respondWith(
    caches.match(e.request).then( cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request);
    }),
  );
});