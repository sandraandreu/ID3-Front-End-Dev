// Actualiza el numerito del carrito
function updateCartUI(count) {
    const badge = document.querySelector("#cart-count");
    badge.textContent = count;
}

let cart = [];

function addToCart(productName) {
    // TODO: añadir el producto al array cart
    cart.push(productName)
    // TODO: actualizar la interfaz usando cart.length
    updateCartUI(cart.length)
    // updateCartUI(cart.length);
}
