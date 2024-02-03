var url = "https://jsonplaceholder.typicode.com/todos";

//Lista de todos los pendientes(solo IDs)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: ",element.id);
        });
    });


//Lista de todos los pendientes(IDs y titles)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id + " Titles: " + element.title);
        });
    });

//Lista de todos los pendientes sin resolver(IDs y titles)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (!element.completed) {
            console.log("ID: " + element.id + " Titles: " + element.title);
            }
        });
    });

////Lista de todos los pendientes resueltos(IDs y titles)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (element.completed) {
            console.log("ID: " + element.id + " Titles: " + element.title);
            }
        });
    });

//Lista de todos los pendientes (IDs y userId)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("ID: " + element.id + " UserID: " + element.userId);
        });
    });

//Lista de todos los pendientes resueltos(IDs y userID)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.foreach(element => {
            if (element.completed) {
                console.log("id: " + element.id + " userid: " + element.userid);
            }
        });
    });

//Lista de todos los pendientes sin resolver(IDs y userID)
fetch(url)
    .then(response => response.json())
    .then(response => {
        response.forEach(element => {
            if (!element.completed) {
                console.log("ID: " + element.id + " UserID: " + element.userId);
            }
        });
    });

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