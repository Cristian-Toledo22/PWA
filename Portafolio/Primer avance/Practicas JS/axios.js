// Importar la biblioteca 'axios' para realizar solicitudes HTTP
const axios = require('axios');

// Definir la URL de la API de donde se obtendrán los datos
const url = "https://jsonplaceholder.typicode.com/users";

// Realizar una solicitud GET a la URL para obtener datos de usuarios y mostrarlos por consola
axios.get(url).then(res =>
     res.data.forEach(element => {
        console.log(element);      
     })
     )

// Realizar una solicitud POST a la URL para agregar un nuevo usuario con nombre de usuario "foo bar" y correo electrónico "foo.bar.com"
axios.post(url,
    {
        username:"foo bar",
        email: "foo.bar.com"
    }
    ).then(res => console.log(res.data)); // Mostrar los datos de la respuesta por consola