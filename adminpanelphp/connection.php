


<?php
$servername = "localhost";
$username = "RND_Robin";
$password = "mobi123DB";
$dbname="RND_Robin_19Jul18_Ravi";
// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

echo "Connected successfully";
?>
