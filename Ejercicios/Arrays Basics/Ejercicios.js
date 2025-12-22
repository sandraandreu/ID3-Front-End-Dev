/*
1. Crea un array que contenga un listado de tareas.
Las tareas tienen un texto y pueden estar completadas o pendientes. 

Imaginamos que estamos mostrando una interfaz con un filtro de tareas
el filtro permite elegir, tareas solo pendientes, solo completadas o
ambas.

Haz una función que acepte dos parámetros, el array de tareas y el filtro
y devuelva el listado filtrado.
*/
// constante con la lista de tareas y definiendo las propiedades de cada tarea

const morningTasks = [
    { text: "Sacar al perro", completed: true },
    { text: "Estudiar JavaScript", completed: false },
    { text: "Hacer la compra", completed: false },
    { text: "Lavar ropa", completed: true }
];

// declarar la función con dos parámetros: array y filtro
function filterTasks(tasks, filter) {
     // pensar qué valores y qué tipo de dato puede tener el filtro
        // Como son 3 valores, no puede ser un boolean, pondremos texto: 'completed', 'pending', 'all'
    // Recorro el array con un filter porque quiero filtrarlo y lo asigno a una variable o lo retorno directamente
    return tasks.filter(function(task){
        // si el filtro es solo para completed, retorno la prop completed porque es boolean
        if(filter === 'completed'){
            return task.completed;
        }

        // si el filtro es solo para pending, retorno la prop completed negada
        if(filter === 'pending'){
            return !task.completed;
        }
        // si no se da ninguna de las anteriores retorno true
        return true;
    });
}


/*
2. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
*/

const vehicles = [
    {   Name: 'Car',
        Wheels: '4',
        Fuel Type: 'Gasoline',
        Seats: '5',
        Maximum Speed: '200 km/h',
        Usage: 'Personal transportation'
    } ,

    {   Name: 'Motorcycle',
        Wheels: '2',
        Fuel Type: 'Gasoline',
        Seats: '2',
        Maximum Speed: '180 km/h',
        Usage: 'Personal transportation'
    } ,

    {   Name: 'Bus',
        Wheels: '6',
        Fuel Type: 'Diesel',
        Seats: '50',
        Maximum Speed: '120 km/h ,
        Usage: 'Public transportation'
    } 
];

/*
3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
en la variable shoppingList.

Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
esa función debe buscar el elemento en el array y eliminarlo.

Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', debe devolver un array ['pepino', 'sandía']
*/
const shoppingList = [
    'x2 leche de coco',
    'pimiento rojo',
    'pimiento verde',
    'x6 garrafas de agua',
    'aguacates',
    'avena',
    'tomate frito',
    'pepino'
];


function removeProductShoppingList (shoppingList,product) {
    
if (shoppingList.includes(product)) {
    const indexProduct = shoppingList.indexOf(product)
    shoppingList.splice (indexProduct, 1)
    console.log (shoppingList)
    return shoppingList}

else {
    console.log('Este producto no está en tu lista de la compra')
}
}

removeProductShoppingList (shoppingList,'pepino')
removeProductShoppingList (shoppingList,'aguacates')
removeProductShoppingList (shoppingList,'sandra')

function removeItem(array, item) {
    let indexToRemove = -1;

array.forEach((elemento, index) => {
    if (elemento === item) {
        indexToRemove = index;
    }
    });

    if (indexToRemove !== -1) {
    array.splice(indexToRemove, 1);
    }
}

removeItem(shoppingList, 'pimiento verde');
console.log(shoppingList);

/**
 * 4. Repite el ejercicio anterior sin modificar el array que le pasas como parámetro a la función.
 * Si ya has hecho el ejercicio anterior sin modificar el array, hazlo modificándolo.
 */

const shoppingList2 = [
    'x2 leche de coco',
    'pimiento rojo',
    'pimiento verde',
    'x6 garrafas de agua',
    'aguacates',
    'avena',
    'tomate frito',
    'pepino'
];


function removeProductShoppingList (product) {
    
const shoppingListNew = shoppingList2.slice();

if (shoppingList2.includes(product)) {
    const indexProduct = shoppingListNew.indexOf(product)
    shoppingListNew.splice (indexProduct, 1)
    console.log (shoppingListNew)
    return shoppingListNew}

else {
    console.log('Este producto no está en tu lista de la compra')
}
}

removeProductShoppingList ('pepino')
removeProductShoppingList ('aguacates')
removeProductShoppingList ('sandra')


function removeItemNoModify(array, item) {
    const newArray = [];

    array.forEach(elemento => {
    if (elemento !== item) {
        newArray.push(elemento);
    }
    });

    return newArray;
}

const newList = removeItemNoModify(shoppingList, 'aguacates');
console.log('new list: ' , newList);
// → ['x2 leche de coco','pimiento rojo','pimiento verde','x6 garrafas de agua','avena','tomate frito','pepino']

console.log('original list: ', shoppingList); 
// El array original NO se modifica

