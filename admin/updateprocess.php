<?php
$Id=$_GET['Id'];
  include("connection.php");

 

  $name=$_POST['Name']; 
   $email= $_POST['Email'];
   $mobile= $_POST['MobileNo'];
   $location= $_POST['Location'];
    $password = $res['Password'];
   $marital_status= $_POST['Marital_status'];
   $gender= $_POST['Gender'];
$sql= "UPDATE Aldovo1 SET Name='".$name."',Email='".$email."',MobileNo='".$mobile."',Location='".$location."',Password='".$password."',Marital_status='".$marital_status."',Gender='".$gender."' where Id='$Id'";

$res= mysqli_query($conn,$sql); 
header("location:datamysql.php");
if($res)
{
 echo "Success";
      }
      else
      {
      echo "unsuccess";
      }
  

      ?>
