<?php

include ('connection.php');
$Id=$_GET['Id']; 
//echo $Id; exit;

$q= "DELETE FROM `Aldovo1` WHERE Id= '$Id'";

$res=mysqli_query($conn, $q);
if($res){
	echo "Action Completed"; 
header('location:datamysql.php');

}

else {
        echo "Action not Completed";
    }
?>