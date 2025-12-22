/** Crear una función que, dados dos parámetros, name y age:
 * Si name y age tienen un valor devolveremos Hola me llamo [NAME] y tengo [AGE] años
 * Si age no tiene valor pero name si devolveremos Hola me llamo [NAME]
 * Si ninguno tiene valor devolvermos No quiero decirte mi nombre, pringao
 * age tiene que ser un número positivo mayor que 0
 */

const name1 = "Juan"
const age = 13

function NameAgefunction(name1, age) {
    if (age <= 0) {
    return "age tiene que ser un número positivo mayor que 0"
    }

    return name1 && age
    ? `Hola me llamo ${name1} y tengo ${age}`
    : name1
    ? `Hola me llamo ${name1}`
    : "No quiero decirte mi nombre, pringao"
}
console.log(NameAgefunction(name1, age))


/**
 * A los alumnos y alumnas de programación de ID3 les cuesta poner los nombres de las variables. Por eso,
 * el profesor en su eterna sabiduría ha decidido que programen una función que les de nombres útiles
 * que puedan usar para sus variables.
 *
 * Programa una función, que devuelva un nombre aleatorio para una variable. La función tendrá un
 * parámetro con el número de variables que tiene que devolver. El número de variables máximo es 2
 * y el mínimo es 1.
 *
 * Si el número es 2, la función debe devolver un array con dos cadenas de texto y si es uno, debe
 * devolver una cadena de texto (no un array, solo la cadena de texto).
 *
 * El nombre de las variables siempre será ruperto[sufijo], sufijo será un número aleatorio
 */

const randomNumber = Math.random();
function nameVariable (number) {
    if (number === 1 || number === 2) {
        return number === 2 ? [`ruperto${Math.random()}`, `ruperto${Math.random()}`]
        : `ruperto${Math.random()}`;
    }
    else {
        return "El número de variables máximo es 2 y el mínimo es 1"
    }
}

console.log(nameVariable(1))
console.log(nameVariable(2))
console.log(nameVariable(3))

