document.getElementById('inscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío tradicional del formulario

    // Obtener los datos del formulario
    var formData = new FormData(this);

    // Realizar la petición AJAX
    fetch('inscripcionCurso.php', {
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
            location.reload();

            // Limpiar los campos del formulario
            this.reset();

            // Ocultar el formulario de inscripción
            document.querySelector('.inscription-form').style.display = 'none';
        } else {
            alert("Error al enviar la inscripción. Por favor, inténtelo de nuevo.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error al enviar la inscripción. Por favor, inténtelo de nuevo.");
    });
});
