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


self.addEventListener('fetch', event => {
    const requestUrl = new URL(event.request.url);

    if (requestUrl.origin === 'http://jsonplaceholder.typicode.com') {
        event.respondWith(interceptarAPI(event.request));
    }
});

async function interceptarAPI(request) {
    const response = await fetch(request);

    if (request.url === 'http://jsonplaceholder.typicode.com/todos') {
        const data = await response.json();

        const modifiedData = data.map(todo => {
            const modifiedTodo = {
                id: `${todo.id} *`,
                userId: todo.userId,
                title: todo.title,
                completed: todo.completed
            };

            if (todo.completed) {
                modifiedTodo.imageUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png';
            }

            return modifiedTodo;
        });

        const modifiedResponse = new Response(JSON.stringify(modifiedData), {
            headers: { 'Content-Type': 'application/json' }
        });

        return modifiedResponse;
    }

    return response;
}


