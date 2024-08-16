// carrito.js

document.addEventListener('DOMContentLoaded', function () {
    const carritoContenido = document.getElementById('carrito-contenido');

    // Obtener carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Mostrar productos en el carrito
    mostrarCarrito();

    function mostrarCarrito() {
        carritoContenido.innerHTML = '';

        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.innerHTML = `<p>${producto.titulo} - ${producto.precio}</p>`;
            carritoContenido.appendChild(productoDiv);
        });
    }
});

// LIMPIAR EL CARRITO 
function limpiarLocalStorage() {
    localStorage.removeItem('carrito'); // Elimina la clave 'carrito' del localStorage
    alert('El carrito ha sido limpiado.'); // Puedes mostrar una notificación si lo deseas
    location.reload();
}

// Agregar un evento de clic al botón de limpiar carrito
document.getElementById('limpiarCarritoBtn').addEventListener('click', limpiarLocalStorage);