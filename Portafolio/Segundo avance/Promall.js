function sumarLento(numero) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(numero + 1);
            // reject("Sumar lento tiene falla!!")
        },800);
    });
}

function sumarRapido(numero) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve(numero + 1);
            // reject("Sumar rapido tiene falla!!")
        },300);
    }); 
}

// sumarLento(5).then(console.log)
// sumarRapido(10).then(console.log)

// Promise.all([sumarLento(5),sumarRapido(10)]).then(Response => {console.log(Response)})
// Promise.all([sumarRapido(10),sumarLento(5)]).then(Response => {console.log(Response)})

Promise.all([sumarLento(5),sumarRapido(10)])
.then(Response => {
    Response.forEach(prom =>{
        console.log(prom);
    })
}).catch(console.log)
