<?php

include("connection.php");
$Username=$_POST["Mobile"];
$Password=$_POST["pass"];

$sql= "SELECT * FROM Aldovo1 where MobileNo='$Username' AND Password='$Password' ";
echo $sql; exit;
$result= mysqli_query($conn,$sql);
/*echo ($result); exit();*/
$row=mysqli_num_rows($result);

if($row==1)
{
	echo "Verified Users:";
}
else
{
echo "login failed";
}
?>