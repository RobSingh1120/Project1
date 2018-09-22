<?php
include 'connection.php';
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('zakir', 'khan', 'zakir@example.com')";

if (mysqli_query($conn, $sql)) {
    $last_id = mysqli_insert_id($conn);
    echo "New record created successfully. Last inserted ID is: " . $last_id;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
$conn->close();
?>