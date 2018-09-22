<?php
include('header.php');
include('sidebar.php');
?>

  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Small boxes (Stat box) -->
      

  <?php
include "connection.php";
$Id =$_GET['Id'];
$sql = "SELECT * FROM Aldovo1 where Id='$Id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Id: 
        " . $row["Id"]. " <br>
        Name  :
        " . $row["Name"]. "<br>
        Email  : " . $row["Email"]. " <br>
         MobileNo   :" . $row["MobileNo"]. "<br>
          Location    :" . $row["Location"]. "

         <br>";
    }
} else {
    echo "0 results";
}
?>

       

    </section>
    <!-- /.content -->
  </div>



<?php
include('footer.php');
?>










