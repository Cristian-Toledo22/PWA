//La API Fetch es una herramienta fundamental en el mundo de 
//JavaScript para realizar solicitudes de red de manera asíncrona.
//Nos permite interactuar con recursos externos como archivos, APIs web, 
//y otros servicios en la red de una manera más eficiente y sencilla.

//1. Método GET:

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

//2. Método POST:

//fetch('https://jsonplaceholder.typicode.com/posts', {
//    method: 'POST',
//    body: JSON.stringify({
//        title: 'foo',
//        body: 'bar',
//        userId: 11
//    }),
//    headers: {
//        'Content-type': 'application/json; charset=UTF-8'
//    }
//})
//    .then(response => response.json())
//    .then(data => console.log(data))
//    .catch(error => console.error('Error:', error));

//3. Método BLOW:

//fetch('https://jsonplaceholder.typicode.com/posts/invalid-url')
//    .then(response => {
//        if (!response.ok) {
//            throw new Error('Network response was not ok');
//        }
//        return response.json();
//    })
//    .then(data => console.log(data))
//    .catch(error => console.error('Error:', error));

//4. Método response.clone():

//let fetchResponse;
//fetch('https://jsonplaceholder.typicode.com/posts')
//    .then(response => {
//        fetchResponse = response.clone();

//        fetchResponse.json().then(clonedData => {
//            console.log('Datos clonados:', clonedData);
//        });
//    })
//    .catch(error => console.error('Error:', error));
