/*
1. Crea una función que compruebe si un número está entre 
*/


function number (num) {
if (num > 10) {
console.log ('Es mayor que 10')
} else if (num < 10) {
console.log ('Es menor que 10')
} else {
console.log ('El número es 10')
}}

number(5)
number(10)
number(11)



/*
Arregla los errores
*/

const firstName = 'Jose Miguel';
const lastName = 'González García';
const fullName = firstName + ' ' + lastName;

console.log (fullName)



const firstName = 'Jose Miguel';
const lastName = 'González García';
const fullName = `${firstName} ${lastName}`;

console.log (fullName)

/*
Arregla el error
*/

const x = 2;
const y = 4;
const z = y + x;

console.log(z)

/*
Cambia la declaración de variables usando let o const
*/

const myVar1 = 1;
const myVar2 = 25;
let sum = myVar1 + myVar2;
sum = sum +1;

console.log(sum)


/*
Declara una variable que contenga un número, otra que contenga el texto 'Hola' y otra que contenga el texto "Hola [NUMERO]" donde el [NUMERO] será el valor de la primera variable.
*/ 

const num = 3;
const text1 = 'Hola'
const textNum = `${text1} ${num}`


/*
Declara una variable con una cadena de texto y escribe en la consola el texto "Mi cadena de texto tiene [NUMERO] caracteres", donde [NUMERO] será el tamaño de esa cadena de texto. 
Por ejemplo, si la cadena de texto es "hola", el resultado debe ser "Mi cadena de texto tiene 4 caracteres".
*/

const string = 'Hola, me llamo Sandra';

console.log (`Mi cadena de texto tiene ${string.length} caracteres.`);


/*
Declara una variable numérica, y 3 más de tipo booleano, una que indique si es mayor que 3, otra que indique si es menor que 5 y otra que indique si es igual a 8.
*/

const oneNum = 8;

const booleanOne = oneNum > 3;
const booleanTwo = oneNum < 5;
const booleanThree = oneNum === 8;

console.log(booleanOne)
console.log(booleanTwo)
console.log(booleanThree)

