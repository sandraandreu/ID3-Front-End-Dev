/**
 * 1. Crea una función que sume un número de días a una fecha.
 */

function addDaysToADate (days , date) {
    const now = new Date(date).getTime();
    const milliseconds = days * 24 * 60 * 60 * 1000
    const newDateAfterSum = milliseconds + now
    const now2 = new Date(newDateAfterSum);
    return now2

}

console.log(addDaysToADate(5,'2025-02-01'))
/**
 * 2. Crea una función que reste un número de días a una fecha.
 */

function subtractDaysToADate (days , date) {
    const now = new Date(date).getTime();
    const milliseconds = days * 24 * 60 * 60 * 1000
    const newDateAfterSum = now - milliseconds
    const now2 = new Date(newDateAfterSum);
    return now2

}

console.log(subtractDaysToADate(5,'2025-02-01'))

/**
 * 3. Modifica la función del ejercicio 1 para que sea más genérica y que permita sumar días, horas, minutos o segundos
 */

function addToADate (days , hours, minutes, seconds, date) {
    const now = new Date(date).getTime();

    const milliseconds =  days * 24 * 60 * 60 * 1000 +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1000;

    const newDateAfterSum = milliseconds + now
    const now2 = new Date(newDateAfterSum);
    return now2

}

console.log(addToADate(40,6,0,30,'2025-02-01T12:00:00.000Z'))
/**
 * 4.  Modifica la función del ejercicio 2 para que sea más genérica y que permita restar días, horas, minutos o segundos
 */

function subtractToADate (days , hours, minutes, seconds, date) {
    const now = new Date(date).getTime();

    const milliseconds =  days * 24 * 60 * 60 * 1000 +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1000;
    
    const newDateAfterSum = now - milliseconds
    const now2 = new Date(newDateAfterSum);
    return now2

}

console.log(subtractToADate(60,9,0,50,'2025-02-01T12:00:00.000Z'))

/**
 * 5. Crea una función que compruebe si una fecha está entre otras dos fechas.
 */

function isDate1BetweenDate2AndDate3 (date1,date2,date3) {
    const now = new Date(date1).getTime();
    const now2 = new Date(date2).getTime();
    const now3 = new Date(date3).getTime();
    const result = (date1>date2) && (date1<date3) || (date1<date2) && (date1>date3);

    return result
}

console.log(isDate1BetweenDate2AndDate3('2025-02-01','2025-01-01','2025-02-05'))
console.log(isDate1BetweenDate2AndDate3('2024-02-01','2025-01-01','2026-02-05'))

/**
 * 6. Crea una función que devuelva cuánto tiempo ha pasado desde una fecha y la fecha actual en días, horas, minutos y segundos.
 * Por ejemplo debe devolver un string que sea, "han pasado 2 días, 4 horas, 2 minutos y 1 segundos desde [FECHA_INTRODUCIDA]}"
 *
 */

function timeHasPassed (date1) {

const nowCurrent = new Date().getTime();
const now = new Date(date1).getTime();

const msBetweenDates = nowCurrent - now;

if (msBetweenDates < 0) {
  return `La fecha ${date1} es futura`;
}

const differenceInDays = Math.floor(msBetweenDates / (1000 * 60 * 60 * 24));
const differenceInHours = Math.floor((msBetweenDates / (1000 * 60 * 60)) % 24);
const differenceInMinutes = Math.floor((msBetweenDates / (1000 * 60)) % 60);
const differenceInSeconds = Math.floor((msBetweenDates / 1000) % 60);

return(`Han pasado ${differenceInDays} días, ${differenceInHours} horas, ${differenceInMinutes} minutos y ${differenceInSeconds} segundos desde ${date1}`);

}

console.log(timeHasPassed('2025-01-04T15:21:38.207Z'))
console.log(timeHasPassed('2025-12-17T15:11:38.207Z'))

/**
 * 7. Si no lo has hecho, modifica la función anterior para que no salga la información que no sea relevante. Por ejemplo, si solo han pasado
 * 10 segundos, no debería decir ni los días, las horas ni los minutos.
 */

function timeHasPassed (date1) {

const nowCurrent = new Date().getTime();
const now = new Date(date1).getTime();

const msBetweenDates = nowCurrent - now;

if (msBetweenDates < 0) {
  return `La fecha ${date1} es futura`;
}

const differenceInDays = Math.floor(msBetweenDates / (1000 * 60 * 60 * 24));
const differenceInHours = Math.floor((msBetweenDates / (1000 * 60 * 60)) % 24);
const differenceInMinutes = Math.floor((msBetweenDates / (1000 * 60)) % 60);
const differenceInSeconds = Math.floor((msBetweenDates / 1000) % 60);


if (differenceInDays>0) {
  return(`Han pasado ${differenceInDays} días, ${differenceInHours} horas, ${differenceInMinutes} minutos y ${differenceInSeconds} segundos desde ${date1}`);
}

if (differenceInHours>0) {
  return(`Han pasado ${differenceInHours} horas, ${differenceInMinutes} minutos y ${differenceInSeconds} segundos desde ${date1}`);
}

if (differenceInMinutes>0) {
  return(`Han pasado ${differenceInMinutes} minutos y ${differenceInSeconds} segundos desde ${date1}`);
}

return(`Han pasado ${differenceInSeconds} segundos desde ${date1}`);

}

console.log(timeHasPassed('2025-01-04T15:21:38.207Z'))
console.log(timeHasPassed('2025-12-16T15:10:38.207Z'))
console.log(timeHasPassed('2025-12-17T15:10:02.207Z'))

/**
 * 8. Modifica la función anterior para que se le pueda pasar un objeto que permita desactivar los días, las horas, los minutos o los segundos
 * Por ejemplo, si le paso { days: false, hours: false } la función debe devolver solo los minutos y los segundos que han pasado.
 */

function timeHasPassed (date1,timeUnitsVisibility = {}) {

const nowCurrent = new Date().getTime();
const now = new Date(date1).getTime();

const msBetweenDates = nowCurrent - now;

const differenceInDays = Math.floor(msBetweenDates / (1000 * 60 * 60 * 24));
const differenceInHours = Math.floor((msBetweenDates / (1000 * 60 * 60)) % 24);
const differenceInMinutes = Math.floor((msBetweenDates / (1000 * 60)) % 60);
const differenceInSeconds = Math.floor((msBetweenDates / 1000) % 60);

if (msBetweenDates < 0) {
  return `La fecha ${date1} es futura`;
}

if (timeUnitsVisibility.minutes == false) {
  return(`Han pasado ${differenceInSeconds} segundos desde ${date1}`);
}

if (timeUnitsVisibility.hours == false) {
  return(`Han pasado ${differenceInMinutes} minutos y ${differenceInSeconds} segundos desde ${date1}`);
}

if (timeUnitsVisibility.days == false) {
    return(`Han pasado ${differenceInHours} horas, ${differenceInMinutes} minutos y ${differenceInSeconds} segundos desde ${date1}`);
}

return(`Han pasado ${differenceInDays} días, ${differenceInHours} horas, ${differenceInMinutes} minutos y ${differenceInSeconds} segundos desde ${date1}`);


}

console.log(timeHasPassed('2025-01-04T15:21:38.207Z',timeUnitsVisibility = {days: false, hours: false} ))
console.log(timeHasPassed('2025-12-16T15:10:38.207Z',timeUnitsVisibility = {days: false, hours: false, minutes:false }))
console.log(timeHasPassed('2025-12-17T15:10:02.207Z',timeUnitsVisibility = {}))

/**
 * 9. Crea una función como la anterior, pero que indique cuánto tiempo queda para una fecha específica.
 */

/**
 * 10. Dado el array de ejemplo que pongo, haz una función que filtre las tareas completadas el 9 de enero durante todo el día
 */

const tasks = [
  {
    text: 'Hacer la compra',
    completed: true,
    completedAt: '2025-01-10T15:54:40.088Z'
  },
  {
    text: 'Ir a clase',
    completed: true,
    completedAt: '2025-01-09T15:00:40.088Z'
  },
  {
    text: 'Comer',
    completed: true,
    completedAt: '2025-01-09T14:00:40.088Z'
  },
  {
    text: 'Repasar javascript',
    completed: false
  }
];

function filterTasksCompletedDayNineJanuary () {
  tasks.forEach (function(task){
      const date = new Date(task.completedAt)
      if (date.getDate() == 9 && date.getMonth() == 0) {
        console.log(task.text)
      }
  return   
  })
}

(filterTasksCompletedDayNineJanuary())
  