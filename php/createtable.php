<?php
include "connection.php";
// sql to create table
include "rs.php";
$sql = "CREATE TABLE Page (id INT(6) AUTO_INCREMENT PRIMARY KEY, 
Username VARCHAR(30) NULL,
lastname VARCHAR(30) NULL,
email VARCHAR(20),
password VARCHAR(20),
gender varchar(20),
birthday date,
Teachnical varchar(50),	
Image blob(50))"; 

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}
$conn->close();
?>