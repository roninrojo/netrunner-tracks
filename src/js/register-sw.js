if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./js/sw.js')
        .then ( registrado => console.log('Registrado 👌', registrado))
        .catch( error =>  console.log('No se registró ❌', error))
} else {
    console.log('Service Worker no soportado');
    
}