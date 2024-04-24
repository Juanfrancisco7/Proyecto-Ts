// Definimos una función para mostrar los productos en la página
function displayProducts(products) {
    var productsSection = document.getElementById('products');
    if (!productsSection)
        return;
    products.forEach(function (product) {
        var productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = "\n            <h3>".concat(product.name, "</h3>\n            <p>Precio: ").concat(product.price, "\u20AC</p>\n        ");
        productsSection.appendChild(productElement);
    });
}
//lista de productos
var products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }
];
// Llamamos a la función para mostrar los productos cuando la página se carga
window.onload = function () {
    displayProducts(products);
};

