<?php
include 'connection.php';

$un=$_POST["user"];
$psw=$_POST["pass"];
$psw1=$_POST["pass1"];
$psw2=$_POST["pass2"];
$sql="select id from page where username='$un'";
$result=mysqli_query($conn,$sql);
$row=mysqli_num_rows($result);
if($psw1==$psw2)
{
	$sql1="update Page set password='$psw2' where password='$psw'";
	$result1=mysqli_query($conn,$sql1);
$row1=mysqli_num_rows($result1);

echo "password Changed Successfully:";

}
else
{
 echo "password Doesn't exist:";
}


?>
