<?php
include "connection.php";
$Username=$_POST["name"];

$lastname=$_POST["lastname"];
$email=$_POST["email"];
$password=$_POST["psw"];
$gender=$_POST["gender"];
$birthday=$_POST["birthday"];
$Teachnical = $_POST['teachnical'];
$Tec      = implode(',', $Teachnical);

$Image=$_POST["pic"];
$Firstname=$_POST["firstname"];

$sql = "INSERT INTO Page (Username,lastname,email,password,gender,birthday,Teachnical,Image,Firstname) values ('$Username','$lastname','$email','$password','$gender','$birthday','$Tec','$Image','$Firstname')";

if ($conn->query($sql) === TRUE) {+
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>