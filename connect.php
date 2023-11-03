<?php
$FullName = $_POST['fllname'];
$email = $_POST['email'];
$phone = $_POST['tel'];
$address1 = $_POST['address1'];
$city = $_POST['city'];
$period = $_POST['period'];
$date = $_POST['date'];


// db connection 

$conn = new mysqli('localhost','root','','irish_db');
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


?>