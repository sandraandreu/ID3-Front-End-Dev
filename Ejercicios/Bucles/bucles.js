/**
 * Escribe una función que dado un número, escriba su tabla de multiplicar en consola
 * Por ejemplo si le digo 1 debe escribir:
 *  1 x 1 = 1
 *  1 x 2 = 2
 *  .........
 */


function multiplicationTable (number) {
for(let multiplication = 1; multiplication <= 10; multiplication++) {
    console.log(`${number} x ${multiplication} = ${number * multiplication}`)      
}
return table
}

console.log(multiplicationTable(3))
console.log(multiplicationTable(7))



/**
 * Haz una función que dado un número, escriba todos los números pares desde el 0 al número introducido.
 * Por ejemplo si introduzco 6, mostrará:
 *  0
 *  2
 *  4
 *  6
 */

function evenNumbers (number) {
const filteredEvenNumbers = []
for(let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        even.push(i)
    }
}
return filteredEvenNumbers
}

console.log(evenNumbers(3))
console.log(evenNumbers(7))


/**
 * Cambia la función anterior para no usar condicionales
 */

function evenNumbers (number) {
const numbers = []
for(let i = 1; i <= number; i++) {
    numbers.push(i)
}
const filteredEvenNumbers2 = numbers.filter(function(num) {
    return num % 2 === 0
})
return filteredEvenNumbers2
}

console.log(evenNumbers(3))
console.log(evenNumbers(7))

/** Haz una función que, dado un número, escriba una cuenta atrás de ese número en pantalla.
 * Por ejemplo, si introduzco 3, escribirá:
 * 3
 * 2
 * 1
 * 0
 */

function countDown (number) {
    for(let counter = number; counter >= 0; counter--)
    console.log(counter)
}

(countDown(8))


/**
 * Escribe una función que acepte una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya introducido.
 */

function letterAndNumber (letter,number) {
    let result=''
    for(let i = 1; i <= number; i++) {
        result+=letter
    }
    console.log(result)
}

(letterAndNumber('a',4))

/**
 * Escribe una función que dado un número, te devuelva una lista de nombres de película que te encantaría ver.
 * Los nombres de película se formarán aleatoriamente con dos arrays:
 * ['La venganza', 'El retorno', 'La comunidad', 'El reino', 'La abuela', 'Godofredo', 'Robustia', 'Pitifasio']
 * ['de los ornitorrincos salvajes', 'de los cangrejos de rio', 'de los murcianos', 'de los paparajotes', 'con cucharón']
 */

const listMovies1=['La venganza', 'El retorno', 'La comunidad', 'El reino', 'La abuela', 'Godofredo', 'Robustia', 'Pitifasio']
const listMovies2=['de los ornitorrincos salvajes', 'de los cangrejos de rio', 'de los murcianos', 'de los paparajotes', 'con cucharón']


function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function listMovies (number) {
    for(let i = 1; i <= number; i++) {
        const myList = `${randomItem(listMovies1)} ${randomItem(listMovies2)}`
        console.log(myList)
    }
}

console.log(listMovies(2))
console.log(listMovies(4))