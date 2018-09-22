<?php
include "connection.php";
$sql = "INSERT INTO MyGuests(firstname , lastname, email) values ('raju','verma','raju@gmail.com')";

$sql = "INSERT INTO MyGuests(firstname , lastname, email) values 
('zahid','khan','zahid@gmail.com')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>