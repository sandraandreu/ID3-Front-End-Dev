/**
 * Gutufasio está programando un carrito de la compra y está pensando en como modelar los objetos.
 * Imagina que en el carrito de la compra hay los siguientes elementos:
 *  7 botellas de agua - 700€
 *  2 bolsas de palomitas: 255.5€
 *  1 kg de azúcar: 1000€
 *  728 panes de hamburguesa: 928€
 *  28 kg de tofu ahumado: 2223€
 * Escribe un array para representar esa información.
 */

const shoppingCart = [
    { product: 'botellas de agua', price: 700, quantity: 7 },
    { product: 'bolsas de palomitas', price: 255.5, quantity: 2 },
    { product: 'azúcar', price: 1000, quantity: 1 },
    { product: 'panes de hamburguesa', price: 928, quantity: 728 },
    { product: 'tofu ahumado', price: 2223, quantity: 28 }
]

/**
 * Al carrito vamos a aplicarle los impuestos.
 * Los impuestos dependerán del país. Gutufasio no sabe mucho de esto y lo único que sabe es que en España
 * los impuestos son el 21%, salvo en Ceuta, Melilla y Canarias, que no hay impuestos.
 *
 * Además, Gutufasio es UX, así que ha decidido poner en la interfaz los impuestos de cada elemento del array
 * por lo que necesita que en el array, cada elemento tenga, además de su precio, el impuesto.
 *
 * Crea una función que se llame calculateTaxes, que acepte dos parámetros de entrada:
 * - country
 * - state
 * La función debe devolver un nuevo array incluyendo el precio con impuestos y el precio total para cada elemento.
 */

function calculateTaxes (country,state) {
    if (country !== 'España') {
        return 'No tenemos la información del IVA en otro país que no sea españa'
    }
    else if (state !== 'Ceuta' && state !== 'Melilla' && state !== 'Canarias') {
        
        const shoppingCartWithIVA = shoppingCart.map (function (product) {
            const iva = 0.21
            const priceWithIVA = product.price * (1 + iva)
            const totalPrice = priceWithIVA * product.quantity
            return {
                product: product.product,
                price: product.price,
                quantity: product.quantity,
                priceWithIVA,
                totalPrice
            }
        })
        return shoppingCartWithIVA
    }
    else if (state == 'Ceuta' || state == 'Melilla' || state == 'Canarias') {
        const shoppingCartTotalProducts = shoppingCart.map (function (product) {
        const totalPrice = product.price * product.quantity
        return {
            product: product.product,
            price: product.price,
            quantity: product.quantity,
            totalPrice
        }
        })
        return shoppingCartTotalProducts
    }

}


console.log(calculateTaxes('España','Ceuta'))
console.log(calculateTaxes('Italia','manacor'))
console.log(calculateTaxes('España','Valencia'))

/**
 * Gutufasio quiere añadir cupones, porque total, como cobra la botella de agua a 100€, pues se lo puede permitir.
 *
 * Los cupones tienen 3 propiedades:
 * - El código del cupón
 * - El porcentage de descuento que tiene
 * - El mínimo de dinero que tiene que costar el carrito de la compra sin impuestos, para que el cupón aplique
 *
 *
 * Los cupones válidos serán:
 *  GUTUFACIO10, ROBUSTIO20, LOSORNITORRINCOSMOLANUNHUEVO50
 *  Los porcentajes de descuento son 10, 20 y 50 respectivamente, y las cantidades mínimas para que funcionen son
 *  1000€, 20€ y 5000€
 *
 * Como ya hemos dicho, Gutufacio le gusta poner toda la información en la interfaz, y quiere poner el precio original de cada
 * elemento y el precio después de aplicar el cupón.
 *
 * La función para comprobar y aplicar un cupón de descuento se llamará applyCoupon y tendrá dos parámetros:
 *  - El cupón de descuento
 *  - El array con el carrito de la compra
 * La función debe devolver el nuevo carrito con el cupón aplicado si es válido
 *
 * Nota, el descuento se aplica sobre el precio sin impuestos. Los impuestos se calculan sobre el precio base.
 */
const shoppingCart = [
    { product: 'botellas de agua', price: 700, quantity: 7 },
    { product: 'bolsas de palomitas', price: 255.5, quantity: 2 },
    { product: 'azúcar', price: 1000, quantity: 1 },
    { product: 'panes de hamburguesa', price: 928, quantity: 728 },
    { product: 'tofu ahumado', price: 2223, quantity: 28 }
]


const coupons = [{
    code: 'GUTUFACIO10',
    percentage: 10,
    minimumMoneySpent: 1000
},
{
    code: 'ROBUSTIO20',
    percentage: 20,
    minimumMoneySpent: 20
},{
    code: 'LOSORNITORRINCOSMOLANUNHUEVO50',
    percentage: 50,
    minimumMoneySpent: 5000
}]

function applyCoupon (coupon,shoppingCart) {
    const filterCoupons = coupons.find(function(item){
        return item.code == coupon
    })

    if (!filterCoupons) {
    return('Su cupón no es valido') }

    let totalPriceShoppingCart = 0
    shoppingCart.forEach(function(product){
    totalPriceShoppingCart += (product.price * product.quantity)
    })

    let isPossibleUseCoupon = (totalPriceShoppingCart>=filterCoupons.minimumMoneySpent)
    let discount = filterCoupons.percentage / 100
    

    if (filterCoupons && isPossibleUseCoupon) {
        const shoppingCartWithCoupon = shoppingCart.map (function (product) {
            return {
                product: product.product,
                price: product.price ,
                quantity: product.quantity,
                priceWithDiscount : product.price - (product.price * discount)
            }
            })
            return shoppingCartWithCoupon
    }
    
}

console.log(applyCoupon('Sandra08',shoppingCart))
console.log(applyCoupon('ROBUSTIO20',shoppingCart))
    


/**
 * Al carrito de la compra de Gutufasio le vamos a aplicar ahora los gastos de envío.
 * Los gastos de envío dependerán del país y de la región.
 *  Si el país es españa:
 *      Si la región es Ceuta, Melilla o Canarias, los gastos de envío serán 2€
 *      Si la región es otra serán de 1.5€
 *  Si el país es Francia los gastos de envío serán 500€, porque Gutufasio odia a los franceses y no quiere enviarles nada
 *  salvo a la región de Alsacia, que está muy bonita en navidad, así que los gastos de envío serán 5€ en ese caso.
 *  Si el país es Andorra, los gastos de envío serán 100€, ya que no pagan impuestos pues que paguen por el envío.
 *  En cualquier otro caso los gastos de envío serán 30€
 */

const shoppingCart = [
    { product: 'botellas de agua', price: 700, quantity: 7 },
    { product: 'bolsas de palomitas', price: 255.5, quantity: 2 },
    { product: 'azúcar', price: 1000, quantity: 1 },
    { product: 'panes de hamburguesa', price: 928, quantity: 728 },
    { product: 'tofu ahumado', price: 2223, quantity: 28 }
]

function shippingCosts (country,state) {
    let shipment = 0
    if (country === 'España' &&  state === 'Ceuta' || state === 'Melilla' || state === 'Canarias') {
        shipment = 2
    }

    else if (country === 'España') {
        shipment = 1.5
    }

    else if (country === 'Francia' && state === 'Alsacia') {
        shipment = 5
    }

    else if (country === 'Francia') {
        shipment = 500 
    }

    else if (country === 'Andorra') {
        shipment = 100 
    }

    else {
        shipment = 30
    }

    const shoppingCartWithShipment = shoppingCart.map (function (product) {
            return {
                product: product.product,
                price: product.price ,
                quantity: product.quantity,
                shipment
            }})

    return shoppingCartWithShipment
}

console.log(shippingCosts('España','Valencia'))
console.log(shippingCosts('España','Ceuta'))
console.log(shippingCosts('Andorra','Valencia'))
console.log(shippingCosts('Francia','Valencia'))

/**
 * Bueno, Gutufasio se lo ha pensado mejor y si el carrito de la compra supera los 100€, los gastos de envío serán gratis
 * salvo si el país es Francia, a los Franceses sigue cobrándoselos
 */
const shoppingCart = [
    { product: 'botellas de agua', price: 700, quantity: 7 },
    { product: 'bolsas de palomitas', price: 255.5, quantity: 2 },
    { product: 'azúcar', price: 1000, quantity: 1 },
    { product: 'panes de hamburguesa', price: 928, quantity: 728 },
    { product: 'tofu ahumado', price: 2223, quantity: 28 }
]

function newShippingCosts(country,state) {

    let totalPriceShoppingCart = 0

    shoppingCart.forEach(function(product) {
    totalPriceShoppingCart += product.price * product.quantity
    if (country === 'Francia') {
        shipment = 30
    }

    else if (country !== 'Francia' && totalPriceShoppingCart>100) {
        shipment = 0
    }
    })

    const shoppingCartWithShipment = shoppingCart.map (function (product) {
        return {
            product: product.product,
            price: product.price ,
            quantity: product.quantity,
            shipment
        }})
        
    return   shoppingCartWithShipment
}

console.log(newShippingCosts('Andorra','Valencia'))
console.log(newShippingCosts('Francia','Valencia'))
