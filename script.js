// MOSTRAR EL CARRUSEL Y INSERTAR LOS BOTONES PARA CARRUSEL
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

function mostrarSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    actualizarCarousel();
}

function actualizarCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

// Llamamos a la función para iniciar el carrusel
actualizarCarousel();

//FUNCION DE LOS BOTONES AGREGAR AL CARRITO
document.addEventListener('DOMContentLoaded', function () {
    const agregarCarritoButtons = document.querySelectorAll('.agregarCarrito');

    agregarCarritoButtons.forEach(button => {
        button.addEventListener('click', agregarAlCarrito);
    });

    function agregarAlCarrito(event) {
        const contenedorProducto = event.target.closest('.contenedor');
        const titulo = contenedorProducto.querySelector('h2').textContent;
        const precio = contenedorProducto.querySelector('p:nth-child(3)').textContent;

        const producto = {
            titulo: titulo,
            precio: precio
        };

        // Obtener carrito actual desde localStorage
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto al carrito
        carrito.push(producto);

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert(`Producto ha sido agregado al carrito!`);
    }
});

// Agrega tus funciones JavaScript aquí
document.getElementById('chat-icon').addEventListener('click', function() {
    document.getElementById('chat-modal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('chat-modal').style.display = 'none';
});
document.getElementById('submit-btn').addEventListener('click', function() {
    // Obtener los datos del formulario
    var formData = new FormData(document.getElementById('chat-form'));

    // Realizar la petición AJAX
    fetch('guardar_opinion.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert(data.message);
            
            // Limpiar los campos del formulario
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('opinion').value = '';

            // Cerrar el modal
            document.getElementById('chat-modal').style.display = 'none';
        } else {
            alert("Error al enviar la opinión. Por favor, inténtelo de nuevo.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error al enviar la opinión. Por favor, inténtelo de nuevo.");
    });
});




