<?php
include "connection.php";
$name=$_POST["name"];

$country1=$_POST['country'];
$robin=implode(",",$country1);
echo count($robin);

$sql = "INSERT INTO selection (name,country) values ('$name','$robin')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>



