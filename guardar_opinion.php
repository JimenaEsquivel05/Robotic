<?php
// Establecer la conexión a la base de datos (modifica los valores según tu configuración)
$servername = "127.0.0.1";
//$servername = "127.0.0.1:33065";
$username = "root";
$password = "";
$dbname = "robotic";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$opinion = $_POST['opinion'];

// Preparar la consulta SQL
$sql = "INSERT INTO opiniones (nombre, correo, opinion) VALUES ('$name', '$email', '$opinion')";

// Inicializar el array de respuesta
$response = array();

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    $response['success'] = true;
    $response['message'] = "Opinión enviada correctamente";
} else {
    $response['success'] = false;
    $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$conn->close();

// Enviar la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>