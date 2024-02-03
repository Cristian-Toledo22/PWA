// Realizar una solicitud FETCH a la URL 'https://jsonplaceholder.typicode.com/posts' para obtener datos de publicaciones
var url = 'https://jsonplaceholder.typicode.com/posts';

// Procesar la respuesta JSON y mostrar la ID y el título de cada publicación
fetch(url).then(Response => Response.json()).then(Response => {
    Response.forEach(element => {
        console.log("ID: " + element.id + " --- title: " + element.title)
    });
});

// Realizar una solicitud FETCH a la URL 'https://jsonplaceholder.typicode.com/albums' para obtener datos de álbumes
var urlAlbum = 'https://jsonplaceholder.typicode.com/albums';

// Procesar la respuesta JSON y mostrar el userID, la ID y el título de cada álbum
fetch(urlAlbum).then(Response => Response.json()).then(Response => {
    Response.forEach(element => {
        console.log("User ID: "+ element.userId + " --- ID: " + element.id + " --- title: " + element.title)
    });
});

// Realizar una solicitud FETCH a la URL 'https://jsonplaceholder.typicode.com/albums' para obtener datos de álbumes y agruparlos por userId
fetch(urlAlbum)
  .then(response => response.json())
  .then(data => {
    // Inicializar el objeto de grupos para almacenar álbumes agrupados por userId
    const grupos = {};

    // Iterar sobre los datos y agruparlos por userId
    data.forEach(element => {
      const userId = element.userId;

      // Verificar si ya existe la clave para el userId en el objeto grupos
      if (!grupos[userId]) {
        grupos[userId] = [];
      }

      // Agregar el elemento actual al grupo correspondiente
      grupos[userId].push(element);
    });

    // Ahora 'grupos' contiene los datos agrupados por userId
    console.log(grupos);
  })
  .catch(error => console.error('Error al obtener datos:', error));



