<?php

$Id=$_GET['Id']; 

 include("connection.php");
 $sql="SELECT  * FROM Aldovo1 WHERE Id='$Id'";
 $result=mysqli_query($conn,$sql);
while($row = mysqli_fetch_array($result))
    {
$state = $row["Status"];
        if($state == 0)
        {
            $state_value = 1;
        }
        else
        {
            $state_value = 0;
        }

}
$sql1= "UPDATE Aldovo1 SET Status = '$state_value' WHERE  Id ='$Id'  ";
   
    $result = mysqli_query($conn,$sql1);
    if($result == true)
    {
        echo 'updated successfully';
        header('location:datamysql.php');
    }
    else
    {
        echo 'failed to update';
   

    }

?>