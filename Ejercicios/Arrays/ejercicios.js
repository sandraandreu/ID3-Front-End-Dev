/*
1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
	{ product: 'Red wine', price: 20, quantity: 1},
    { product: 'water', price: 1, quantity: 2 },
    { product: 'Pizza carbonara', price: 10, quantity: 3 },
    { product: 'Tiramisú', price: 5.99, quantity: 2 }
]


//Crear una variante del total
    let totalPriceShoppingCart = 0
//Recorrer todo el array 

    shoppingCart.forEach(function(product){
        //Multiplicar el precio de cada producto por la cantidad
        let totalPriceProduct = (product.price * product.quantity)
        //Sumar el resultado de todas las multiplicaciones anteriores
        totalPriceShoppingCart += TotalPriceProduct
        })

//Mostrar con un console el precio total del carrito

console.log('El precio total de su carrito de la compra es ' + (totalPriceShoppingCart.toFixed(2)) + '€')




/*
    2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
    tareas que están completadas y luego todas las tareas que están pendientes.
*/

//Crea un array que contenga un listado de tareas
const morningTasks = [
    { text: "Sacar al perro", completed: true },
    { text: "Estudiar JavaScript", completed: false },
    { text: "Hacer la compra", completed: false },
    { text: "Lavar ropa", completed: true }
];


//Crear un nuevo array que contenga el resultado de las tareas completadas
    //Recorrer el array con filter
    //Retornar las tareas completadas
TasksCompleted = morningTasks.filter(function(tasks){   
    return tasks.completed
})
console.log(TasksCompleted)

//Crear un nuevo array que contenga el resultado de las tareas pendientes
    //Recorrer el array con filter
    //Retornar las tareas que no esten completadas
TasksPending = morningTasks.filter(function(tasks){   
    return !tasks.completed
})
console.log(TasksPending)





/*
3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
- Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];

//Crear una nueva variable de un array que contenga las frutas que crecen en un arbol

growsOnATree = ['manzana', 'pera', 'granada', 'platano']

//Recorrer el array con map y crea un nuevo array que diga si crece en los arboles

fruits = frutas.map(function(fruit) {
    //retornar un nuevo array que contenga el nombre de la fruta y si crece o no en un arbol
    return {
        name: fruit,
        growsOnATree: growsOnATree.includes(fruit)
    }

})

console.log(fruits)

/* 
4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
{ product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

Asumiremos que los impuestos son el 10% del precio total del producto.

PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

//Recorrer el carrito de la compra con map
    //Crear una nueva variable que sea taxes y que taxes sea el 10% del precio
    //Retornar un nuevo array que contenga las taxes

shoppingCartWithTaxes = shoppingCart.map(function(product){
    const taxes = product.price * 0.10
    return {
        product: product.product,
        price: product.price,
        quantity: product.quantity,
        taxes: parseFloat(taxes.toFixed(2))
    }
})

console.log(shoppingCartWithTaxes)

/*
5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose 
en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con
"Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/


function removeproduct (productForRemove) {
newShoppingCart = shoppingCart.filter(function(item) {
    if (item.product === productForRemove && item.quantity === 1) {
        return false
    }
    else if (item.product === productForRemove && item.quantity > 1) {
            item.quantity = item.quantity - 1;
            return true;}
    return true;
})
console.log (newShoppingCart)
}

removeproduct('Red wine')
removeproduct('Tiramisú')



