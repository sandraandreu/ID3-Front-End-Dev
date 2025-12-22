
/*
Crear una función que me diga si un número está entre 0 y 10  
=> utilizar un return;
*/

function between0And10 (num){
    if (num > 0 && num < 10) {
    return `Está entre 0 y 10`;
    }

    return `No está entre 0 y 10`;
}

console.log (between0And10 (6))
console.log (between0And10 (11))


/*
Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
*/

function type (numOrText) {
console.log(typeof numOrText)
}

type ('Hola')
type ('76')
type (76)


/*
Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
*/

function pendingInclude (pending) {
    console.log (pending.toLowerCase().includes('pending'))
}

pendingInclude ('Hola Pending sandra')
pendingInclude ('Hola PendINg sandra')
pendingInclude ('Hola PEnding sandra')


/*
  Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
    - El precio del producto
    - El dinero gastado este mes
    - El límite mensual
  Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
  mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
  en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual.
*/


function shopping (product,month,limit) {
  if ((limit-month)>= product) {
    console.log(month + product)
  }
  else {
    console.log('No se puede comprar esté producto por llegar al límite mensual')
  }
}

shopping(13,80,100)
shopping(46,80,100)
shopping(46,60,200)
shopping(3,50,50)


/*
  Crea una función que indique si un número es par o impar.
*/

function numbers (testNumber) {
  if (testNumber % 2 == 0  && typeof testNumber === 'number'){
    console.log ('Par')
  }
  else if (testNumber % 2 == 1  && typeof testNumber === 'number') {
    console.log('Impar')
  }
  else {
    console.log ('No es un número')
  }
}

numbers(2)
numbers(5)
numbers('hola')



/*
  Crea una función que indique el mayor de dos números
*/

function maxNumber (num1, num2) {
  if (num1>num2) {
    console.log(num1)
  }
  else if (num2>num1) {
    console.log(num2)
  }
  else {
    console.log('Son el mismo número')
  }
}

maxNumber (4,5)
maxNumber (8,5)

/*
  Crea una función que indique el mayor de tres números
*/

function maxNumber (num1, num2,num3) {
  if (num1>num2 && num1>num3) {
    console.log(num1)
  }
  else if (num2>num1 && num2>num3){
    console.log (num2)
  }
  else if (num3>num1 && num3>num2){
    console.log (num3)
  }
  else {
    console.log('Todos los números son iguales')
  }
}

maxNumber (4,5,10)
maxNumber (8,5,2)
maxNumber (4,9,7)

/*
  Crea una función que, dados dos edades, te diga cuántos años hay entre ellas
*/

function numberAges (age1,age2) {
  if (age1>age2){
    console.log(age1 - age2)
  }
  else if (age2>age1){
    console.log (age2 - age1)
  }
  else {
    console.log (0)
  }
}

numberAges (32,24)
numberAges (14,16)
numberAges (14,14)

/*
Crea una función que al pasarle la nota de un examen (de 0 a 10) te devuelva la nota: suspenso, aprobado, bien, 
notable o sobresaliente.
*/

function exam (examGrade) {
  if (examGrade>=0 examGrade<5) {
    console.log('suspendido')
  }
  else if (examGrade>=5 && examGrade<6) {
    console.log ('aprobado')
  }
  else if (examGrade>=6 && examGrade<7){
    console.log('bien')
  }
  else if (examGrade>7 && examGrade<9) {
    console.log('notable')
  }
  else if (examGrade>=9 && examGrade<=10) {
    console.log('sobresaliente')
  }
  else {
    console.log('Error')
  }
}

exam(4)
exam(5,7)
exam(8)
exam(6,5)
exam(9,8)

/*
  Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano. 
*/
function seasons (month1,day) {
  const month = month1.toLowerCase()
  if ((month.includes('marzo') && day > 20 && day <= 31) || 
      (month.includes('abril')) || 
      (month.includes('mayo')) || 
      (month.includes('junio') && day > 0 && day <= 21)) {
        console.log('primavera')
      }
  
  else if ((month.includes('junio') && day > 20 && day <= 31) ||
      (month.includes('julio'))|| 
      (month.includes('agosto'))|| 
      (month.includes('septiembre') && day > 0 && day < 21)) {
        console.log('verano')
      }
  else if ((month.includes('septiembre') && day > 20 && day <= 31) ||
      (month.includes('octubre'))|| 
      (month.includes('noviembre'))|| 
      (month.includes('diciembre') && day > 0 && day < 21)) {
        console.log('otoño')
      }
  else {
    console.log('invierno')
  }
}

function seasons (month,day) {
  
  switch (month) {
    case 'Enero': 
    case 'Febrero':
      console.log('invierno')
      break;
    case 'Marzo':
      if (day > 20) {
        console.log('Primavera')
      }
      else {
        console.log ('Invierno')
      }
      break;
    case 'Abril': 
    case 'Mayo':
      console.log('Primavera')
      break;
    case 'Junio': 
      if (day <= 21) {
        console.log('Primavera')
      }
      else {
        console.log('Verano')
      }
      break;
    case 'Julio': 
    case 'Agosto':
      console.log('Verano')
      break;
    case 'Septiembre':
      if (day < 21) {
        console.log('Verano')
      }
      else {
        console.log ('Otoño')
      }
      break;
    case 'Octubre': 
    case 'Noviembre':
      console.log('Otoño')
      break;
    case 'Diciembre':
      if (day < 21) {
        console.log('Otoño')
      }
      else {
        console.log ('Invierno')
      }
      break;
    
    default: 
    console.log('Error')
  }
}


seasons('Abril',23)
seasons('junio',27)
seasons('Octubre',13)
seasons('Febrero',12)
seasons('Diciembre',21)

/*()
  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 rueda, pueden ser de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales pedales.
  - En cualquier otro caso devuelve desconocido.
*/


function vehicle (wheels,motor,pedals) {
  if (wheels === 4 && pedals === 'no' && (motor ==='electrico' || motor === 'gasolina')) {
    console.log('coche')}
  else if (wheels === 2 && pedals === 'no' && motor === 'gasolina') {
    console.log('moto')}
  else if (wheels === 2 && pedals === 'si' && (motor ==='electrica' || motor === 'manual')){
    console.log('patinete')}
  else {
    console.log('desconocido')
  }
}

vehicle(4,'electrico','no')
vehicle(2,'gasolina','no')
vehicle(2,'manual','si')
vehicle(6,'gasolina','si')

/*Declara dos variables numéricas y calcula su media. Prueba con 0.1 y 0.2 y muestra el resultado por consola.*/

const number1 = 0.1
const number2 = 0.2
const median = ((number1 + number2) / 2)

console.log(parseFloat(median.toFixed(2)))



/*Declara una variable booleana. 
Si su valor es true, muestra "Puede entrar". Si es false, muestra "No puede entrar".*/

const isNumber = true
if (isNumber === true) {
  console.log ('Puede entrar')
}
else {
  console.log ('No puede entrar')
}




/*Crea una función que reciba una edad y devuelva true si es mayor o igual a 18, y false si no lo es.*/

function adult (age) {
  if (age>= 18){
    console.log('true')
  }
  else{
    console.log('false')
  }
}

/*Crea una función que reciba un nombre y devuelva el texto "Hola, [nombre]!"*/
function text (name) {
  console.log(`Hola, ${name}!`)
}

/*Crea una función que reciba una letra y devuelva true si es una vocal, false si no.*/
function vocal (letter) {
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    console.log('true')
  }
  else {
    console.log('false')
  }
}

/*Crea una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente.*/
function dayWeek (num4) {
  if (typeof num4 !=='number' || (num4 <1 || num4 >7)) {
    console.log('Error')
  }
  else if (num4 == 1) {
    console.log('Monday')
  }
  else if (num4 == 2) {
    console.log('Tuesday')
  }
  else if (num4 == 3) {
    console.log('Wednesday')
  }
  else if (num4 == 4) {
    console.log('Thursday')
  }
  else if (num4 == 5) {
    console.log('Friday')
  }
  else if (num4 == 6) {
    console.log('Saturday')
  }
  else if (num4 == 7) {
    console.log('Sunday')
  }
  else {
    console.log('Error')
  }
}

/*Crea una función que reciba una hora (por ejemplo, 14) y devuelva:
  - "Buenos días" si es antes de las 12
  - "Buenas tardes" si es entre 12 y 20
  - "Buenas noches" si es después de 20
 */

  function weekDay (number){
    if( typeof number !=='number' ||  (number <1 || number >7) ){
        return 'El parámetro no es correcto'
    }
    if(number ===1){
        return 'Lunes'
    }else if(number ===2){
        return 'Martes'
    }else if(number ===3){
        return 'Miercoles'
    }else if(number ===4){
        return 'Jueves'
    }else if(number ===5){
        return 'Viernes'
    }else if(number ===6){
        return 'Sábado'
    }else if(number ===7) {
        return 'Domingo'
    } else {
        return 'No se que día es este'
    }
}

function isCarPiece (pieceToCheck){
  const car = ['ruedas', 'puertas','espejos']
    return car.includes(pieceToCheck.toLowerCase())
}

console.log(isCarPiece('espejos')); // true
console.log(isCarPiece('espejoasdlfkñakdsfñ')); // false
console.log(isCarPiece('Ruedas')); // true