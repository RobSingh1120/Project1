<?php
 session_start();

 include ("connection.php");	

$Name=$_SESSION["name"];
$Zone=$_SESSION["zone"];
$Ward=$_SESSION["ward"];
//echo "$Name";
$MobileNo=$_SESSION["Mobile"];
$Location=$_SESSION["place"];
$Password=$_SESSION["pass"];
//$Image=$_SESSION["Image"];
$photo_name=$_SESSION["photo_name"];
$photo_temp=$_SESSION["photo_temp"];

move_uploaded_file($photo_temp,"images/".$photo_name);

$sql = "INSERT INTO Adminpanel(Name, Zone, Ward , MobileNo, Location, Password , Image) VALUES 
                                                                 ('$Name',  '$Zone',  '$Ward',  '$MobileNo',  '$Location',  '$Password', '$photo_name')";

if ($conn->query($sql) == true) 
{
    echo "New record created successfully";
    header("location:login.php");
} 
else {
    echo "fail in login";
}
?>