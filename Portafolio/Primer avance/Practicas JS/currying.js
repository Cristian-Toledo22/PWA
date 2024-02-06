// Definición de una función regular que calcula el volumen de un prisma.
var prism = function (l,w,h) {
    return l * w * h 
}
console.log("Funcion normal: ",prism(2,3,4));


// Definición de una función descompuesta (currying) para calcular el volumen de un prisma.
var prisma = function (l) {
    return function(w){
        return function(h){
            return l * w * h
        }
    }
}

console.log("Funcion descompuesta: ",prisma(4)(2)(5));

// Función inmediatamente invocada (IIFE) que registra un mensaje en la consola.
var foo = (function(){
    console.log("I am the IIFE");  
  })();

// Función inmediatamente invocada (IIFE) que devuelve un valor y se asigna a la constante bar.
const bar = (function () {
    return 56
}());

console.log(bar);

// Definición de una función con nombre y una función sin nombre, seguidas de llamadas a ambas.
var namedSum = function sum(a,b) {
  return a + b  
}

var noNamedSum = function (a,b) {
  return a + b
}

console.log(namedSum(11,31));
console.log(noNamedSum(12,21));
// Intento de llamada a la función con nombre 'sum', que falla porque 'sum' está definido localmente dentro de 'namedSum'.
console.log(sum(1,3)); //NO funca porque la funcion se declaro a la variable 

// Definición de una función recursiva que imprime "HI!" un número dado de veces.
var say = function say (times) {
  if (times > 0) {
    say = undefined
    console.log("HI!");
    say(times - 1)
  }
}

var saysay = say
say = "Oops!"
saysay(10)

// VARIADIC FUNCTIONS
// Función que registra los argumentos pasados como parámetros en la consola.
function logSomeThings() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);    
  }
}

logSomeThings('hello','world','!!!',' ','123')

// los 3 puntitos es creacion de un array en js
// Función que registra los mensajes pasados como parámetros junto con el nombre de una persona en la consola.
function personLogSomeThings (person, ...msg) {
  msg.forEach(arg => {
    console.log(person + " say: " + arg);
  });
}

obj = {
  username: "Victor",
  status: true
}

personLogSomeThings("Jesus","hello","world!!", obj.username, ((x) => x * x)(2))

// ANONYMOUS FUNCTION
// UNA FUNCION ANONIMA LA PODEMOS ASIGNAR EN UNA VARIABLE; EJEMPLO: VAR FOO = FUNCTION(){}
// Definición de una función que imprime un mensaje predeterminado si no se proporciona ningún argumento.
function print(msg = 'DEFAULT VALUE FOR MSG') {
  console.log(msg);
}

print();
print(undefined);
print("Hola");
print(null);

