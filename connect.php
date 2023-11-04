<?php
$FullName = $_POST['name'];
$commercial = $_POST['commercial_name'];
$phone = $_POST['phone'];
$period = $_POST['period'];
$date = $_POST['date'];

// db connection 
$conn = new mysqli('localhost', 'root', '', 'irish_db');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $stmt = $conn->prepare("INSERT INTO users (name, commercial_name, phone, period, date) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssiss", $FullName, $commercial, $phone, $period, $date);
    
    if ($stmt->execute()) {
        echo "Registration of new customer has been completed successfully";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
}

$conn->close();
?>
