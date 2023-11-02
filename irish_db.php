<?php

include 'irish_db.php';

$servername = "localhost"; // Change this to your database server name
$username = "username"; // Change this to your database username
$password = "password"; // Change this to your database password
$dbname = "database_name"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if

    ($_SERVER["REQUEST_METHOD"] == "POST"){

        $name = $_POST["name"];
        $sql = "INSERT INTO Users (name) VALUES ('$name')";
    }
    if($conn->query($sql) == TRUE){
        echo "Record added successfully";
    }else{
        echo "Error " . $sql . "<br>" . $conn->error;
    }
