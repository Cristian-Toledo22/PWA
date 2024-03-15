const readline = require('readline');

var url = "https://jsonplaceholder.typicode.com/todos";

function mostrarTodos() {
//Lista de todos los pendientes(solo IDs)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: ",element.id);
        });
        regresarAlMenu();
    });
}

function mostrarPendientesIDsyTitles() {
//Lista de todos los pendientes(IDs y titles)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id + " Titles: " + element.title);
        });
        regresarAlMenu();
    });
}

function mostrarNotIDsyTitles() {
//Lista de todos los pendientes sin resolver(IDs y titles)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (!element.completed) {
            console.log("ID: " + element.id + " Titles: " + element.title);
            }
        });
        regresarAlMenu();
    });
}

function mostrarResolveIDsyTitles() {
////Lista de todos los pendientes resueltos(IDs y titles)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (element.completed) {
            console.log("ID: " + element.id + " Titles: " + element.title);
            }
        });
        regresarAlMenu();
    });
}
function mostrarPendientesIDsyUserIDs() {
//Lista de todos los pendientes (IDs y userId)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id + " UserID: " + element.userId);
        });
        regresarAlMenu();
    });
}
function mostrarResolveIDsyUserID() {
//Lista de todos los pendientes resueltos(IDs y userID)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.foreach(element => {
            if (element.completed) {
                console.log("id: " + element.id + " userid: " + element.userid);
            }
        });
        regresarAlMenu();
    });
}

function mostrarNotIDsyUserID() {
//Lista de todos los pendientes sin resolver(IDs y userID)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (!element.completed) {
                console.log("ID: " + element.id + " UserID: " + element.userId);
            }
        });
        regresarAlMenu();
    });
}




function mostrarMenu() {
    console.log("Seleccione una opcion:");
    console.log("1. Mostrar todos los pendientes (solo IDs)");
    console.log("2. Mostrar todos los pendientes (IDs y userID)");
    console.log("3. Mostrar todos los pendientes sin resolver (IDs y titles)");
    console.log("4. Mostrar todos los pendientes resueltos (IDs y titles)");
    console.log("5. Mostrar todos los pendientes (IDs y userID)");
    console.log("6. Mostrar todos los pendientes sin resolver (IDs y userID)");
    console.log("7. Mostrar todos los pendientes resueltos (IDs y userID)");
    console.log("0. Cerrar programa");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Ingrese el numero de la opción que desea: ', (opcion) => {
        switch (opcion.trim()) {
            case '1':
                mostrarTodos();
                break;
            case '2':
                mostrarPendientesIDsyTitles();
                break;
            case '3':
                mostrarNotIDsyTitles();
                break;
            case '4':
                mostrarResolveIDsyTitles();
                break;
            case '5':
                mostrarPendientesIDsyUserIDs();
                break;
            case '6':
                mostrarNotIDsyUserID();
                break;
            case '7':
                mostrarResolveIDsyUserID();
                break;
            case '0':
                console.log("Cerrando programa...");
                rl.close();
                break;
            default:
                console.log("Opcion invalida");
                rl.question('Presione "Enter" para regresar al menu...', () => { 
                limpiarConsola();
                });
                break;
        }
    });
}

function regresarAlMenu() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Presione "Enter" para regresar al menu...', () => {
        limpiarConsola();
    });
}

function limpiarConsola() {
    console.clear();
    mostrarMenu();
}

mostrarMenu();





////Todas las peticiones en una sola
//var listaID = [];
//var listaPenditensIDTitles = [];
//var listaPenditensSinResolverIDTitles = [];
//var listaPenditensResultosIDTitles = [];
//var listaPenditensIDUserID = [];
//var listaPenditensSinResolverIDUserID = [];
//var listaPenditensResultosIDUserID = [];

//fetch(url)
//    .then(response => response.json())
//    .then(response => {
//        response.forEach(element => {
//            listaID.push(element.id);
//            listaPenditensIDTitles.push("ID: " + element.id + " Titles: " + element.title);
//            listaPenditensIDUserID.push("ID: " + element.id + " UserID: " + element.userId);

//            if (!element.completed) {
//                listaPenditensSinResolverIDTitles.push("ID: " + element.id + " Titles: " + element.title);
//                listaPenditensSinResolverIDUserID.push("ID: " + element.id + " UserID: " + element.userId);
//            } else {
//                listaPenditensResultosIDTitles.push("ID: " + element.id + " Titles: " + element.title);
//                listaPenditensResultosIDUserID.push("ID: " + element.id + " UserID: " + element.userId);
//            }
//        });

//        console.log("\nTITULOS: Lista de todos los pendientes(solo IDs) \n");
//        console.log(listaID);

//        console.log("\nTITULOS: Lista de todos los pendientes(IDs y titles) \n");
//        console.log(listaPenditensIDTitles);

//        console.log("\nTITULOS: Lista de todos los pendientes sin resolver(IDs y titles) \n");
//        console.log(listaPenditensSinResolverIDTitles);

//        console.log("\nTITULOS: Lista de todos los pendientes resueltos(IDs y titles) \n");
//        console.log(listaPenditensResultosIDTitles);

//        console.log("\nTITULOS: Lista de todos los pendientes (IDs y userId) \n");
//        console.log(listaPenditensIDUserID);

//        console.log("\nTITULOS: Lista de todos los pendientes sin resolver(IDs y userID) \n");
//        console.log(listaPenditensSinResolverIDUserID);

//        console.log("\nTITULOS: Lista de todos los pendientes resueltos(IDs y userID) \n");
//        console.log(listaPenditensResultosIDUserID);
//    });