function sumarUno(numero) {
    var prom = new Promise(function (resolve, reject) {
        if (numero >= 7) {
            reject("Numero muy grande");
        }
        setTimeout(function () {
            resolve(numero + 1);
        },800);
    })
    return prom
}

// sumarUno(5).then((nuevoValor) => {
//     console.log(nuevoValor);
//     return sumarUno(nuevoValor)
// }).then((nuevoValor) => {
//     console.log(nuevoValor);
//     return sumarUno(nuevoValor)
// }).catch((err) => {
//     console.log(err);
// });

sumarUno(5).then(sumarUno).then(sumarUno).then((nuevoValor) => {
    console.log(nuevoValor);
}).catch((err) => {
    console.log(err);
});
