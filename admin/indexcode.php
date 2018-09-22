<?php
session_start();

      include("connection.php");
      $MobileNo=$_POST["MobileNo"];
     $Password=$_POST["Password"];

 //print_r($Password);exit;
$sql= "SELECT Name,Email, MobileNo,Location ,Marital_status,Gender FROM Aldovo1 WHERE MobileNo ='$MobileNo' AND Password='$Password'";
$result= mysqli_query($conn,$sql);
$row = mysqli_num_rows($result);
$a = mysqli_fetch_array($result);

//print_r($a);exit();
if($row==1)
{
  $_SESSION['Name']= $a[0];
  $_SESSION['Email']= $a[1];
  $_SESSION['MobileNo']= $a[2];
  $_SESSION['Location ']= $a[3];
  $_SESSION['Marital_status ']= $a[4];
  $_SESSION['Gender ']= $a[5];
 // echo "Username is :".$a[0];exit();

   
    echo ("<script>
    window.alert('You logged in succesfully . Thanku');
    window.location.href='datamysql.php';
    </script>
    ");
 }
 else
 {
  echo ("<script>
    window.alert('Please enter the correct Username and Password. Thanku');
    window.location.href='index.php';
    </script>
    ");
 }

      ?>
