function buscar() {
    const opcionSeleccionada = document.getElementById("dropdown").value;
    const url = 'http://jsonplaceholder.typicode.com/todos';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let listaFiltrada = [];
            switch (opcionSeleccionada) {
                case 'todos_ids':
                    listaFiltrada = data.map(todo => ({ id: todo.id }));
                    break;
                case 'todos_ids_titles':
                    listaFiltrada = data.map(todo => ({ id: todo.id, title: todo.title }));
                    break;
                case 'sin_resolver':
                    listaFiltrada = data.filter(todo => !todo.completed).map(todo => ({ id: todo.id, title: todo.title }));
                    break;
                case 'resueltos':
                    listaFiltrada = data.filter(todo => todo.completed).map(todo => ({ id: todo.id, title: todo.title }));
                    break;
                case 'ids_userid':
                    listaFiltrada = data.map(todo => ({ id: todo.id, userId: todo.userId }));
                    break;
                case 'resueltos_userid':
                    listaFiltrada = data.filter(todo => todo.completed).map(todo => ({ id: todo.id, userId: todo.userId }));
                    break;
                case 'sin_resolver_userid':
                    listaFiltrada = data.filter(todo => !todo.completed).map(todo => ({ id: todo.id, userId: todo.userId }));
                    break;
                case 'todos_con_imagen':
                    listaFiltrada = data.map(todo => ({id: todo.id, title: todo.title, completed: todo.completed, imageUrl: todo.completed ? todo.imageUrl : ''
                    }));
                    break;
                default:
                    listaFiltrada = [];
                    break;
            }

            const columnasTabla = obtenerColumnasTabla(listaFiltrada);

            const tablaPendientes = document.getElementById('tablaPendientes').getElementsByTagName('tbody')[0];
            tablaPendientes.innerHTML = '';

            if (listaFiltrada.length > 0) {
                const encabezado = tablaPendientes.insertRow();
                columnasTabla.forEach(columna => {
                    const th = document.createElement('th');
                    th.textContent = columna.toUpperCase();
                    encabezado.appendChild(th);
                });
            }

            listaFiltrada.forEach(item => {
                const fila = tablaPendientes.insertRow();
                columnasTabla.forEach(columna => {
                    if (columna === 'imageUrl') {
                        const img = document.createElement('img');
                        img.src = item[columna];
                        const cell = fila.insertCell();
                        cell.appendChild(img);
                    } else {
                        const valor = item[columna];
                        fila.insertCell().textContent = valor || '';
                    }
                });
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

function obtenerColumnasTabla(listaPendientes) {
    const columnas = {};
    listaPendientes.forEach(item => {
        Object.keys(item).forEach(key => columnas[key] = true);
    });
    return Object.keys(columnas);
}
