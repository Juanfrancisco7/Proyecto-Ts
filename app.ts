// Definimos la interfaz para representar un producto
interface Product {
    id: number;
    name: string;
    price: number;
}



// Definimos una función para mostrar los productos en la página
function displayProducts(products: Product[]): void {
    const productsSection = document.getElementById('products');
    if (!productsSection) return;

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: ${product.price}€</p>
        `;
        productsSection.appendChild(productElement);
    });
}

//lista de productos
const products: Product[] = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 }
];

// Llamamos a la función para mostrar los productos cuando la página se carga
window.onload = function() {
    displayProducts(products);
};

