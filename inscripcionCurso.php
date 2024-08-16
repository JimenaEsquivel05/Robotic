<?php
// Establecer la conexión a la base de datos (modifica los valores según tu configuración)
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "robotic";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
$nombre = $_POST['nombre'];
$apellidoM = $_POST['apellidoM'];
$apellidoP = $_POST['apellidoP'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$metodoPago = $_POST['metodoPago']; 
$cursoInteres = $_POST['curso'];

// Preparar la consulta SQL para insertar datos en la tabla
$sql = "INSERT INTO inscripciones (nombre, apellidoM, apellidoP, email, telefono, metodoPago, curso)
        VALUES ('$nombre', '$apellidoM', '$apellidoP', '$email', '$telefono', '$metodoPago', '$cursoInteres')";

// Inicializar el array de respuesta
$response = array();

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    $response['success'] = true;
    $response['message'] = "Inscripción realizada correctamente";
} else {
    $response['success'] = false;
    $response['message'] = "Error al realizar la inscripción: " . $conn->error;
}

// Cerrar la conexión
$conn->close();

// Enviar la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>