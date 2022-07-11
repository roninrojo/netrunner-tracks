self.addEventListener('install', e => {
    console.log("Instalado ⬇️", e);
    
});

// fetch install files
self.addEventListener('fetch', e => {
    console.log("Fetching... 👀", e);
})