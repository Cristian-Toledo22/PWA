self.addEventListener('install',event => {
    console.log("Instalando SW");

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("SW: Instalacion Finalizada");
            self.skipWaiting();
            resolve();
        }, 1000);
    });
    event.waitUntil(instalacion);


});

self.addEventListener('activate',event =>{
    console.log("SW activado");
});
