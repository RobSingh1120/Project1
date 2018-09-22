<?php

include('header.php');

include('sidebar.php');
?>
<?php

                  include "connection.php";
                


?>
<!--  Content Wrapper. Contains page content -->
  <div class="content-wrapper">
   

    <!-- Main content -->
    <section class="content">
        <form action="search.php" method="POST">
              <div class="box-body">
                <div class="form-group">
                <label for ="name"></label> Name : 
                   <input type="text"  name="Name">
                
                   
                   <label for="gender"></label> Gender :
                   <input type="text"  name="Gender" >
                   
               
                   <input type="submit" name="submit" class="btn btn-primary" value="SEARCH">
               </div>
                </div>
                </form>
    <div class="box-header">
  
     <button> <a class="btn btn-info pull-right" href="adduser.php">ADD User </a></button></h1>
      
        <div class="col-xs-12">
       
          
                  <div class="box-body table-responsive no-padding">
                  <table class="table table-hover" id="mytable">
                  <thead>
                  <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>MobileNo</th>
                  <th>Location</th>
                  <th>Marital_status</th>
                  <th>Gender</th>
                
                  <th>Action</th>
                  </tr>
                  </thead>
<?php

$name=$_POST["Name"];
$gender=$_POST["Gender"];
//echo $name.$zone.$gender;
include "connection.php";

if(empty($name) && empty($gender) )
{
$sql1 = " SELECT * FROM Aldovo1 ";

//echo "abcd";
$result = $conn->query($sql1);
if ($result->num_rows > 0) 
{
   while($row = $result->fetch_assoc())
    {
      ?>
        <tbody>
      <tr>
                   <td align="center"><?php echo $row["Id"]; ?></td>
                  <td align="center"><?php echo $row["Name"]; ?></td>
                  <td align="center"><?php echo $row["Email"]; ?></td>
                  <td align="center"><?php echo $row["MobileNo"]; ?></td>
                  <td align="center"><?php echo $row["Location"]; ?></td>
                   <td align="center"><?php echo $row["Marital_status"]; ?></td>
                    <td align="center"><?php echo $row["Gender"]; ?></td>
        
      <td> 
                  <a href="#"  data-toggle="modal"  data-target="#mytable"></a> 
                  <a href="#" class="btn-danger btn" data-toggle="modal" onclick="idd(<?php echo $row['Id']; ?>)" data-target="#logoutModal">Delete</a>

                  <button  >
                  <a class="btn-danger btn" href="updateuser.php?Id=<?php echo $row["Id"]; ?>" ">Update</a>  </button>
                  <button  >
                  <a class="btn-danger btn" href="viewuser.php?Id=<?php echo $row["Id"]; ?>" ">View</a>  </button>
                   <button  >
                 
                   <?php if($row["Status"]==1) 
                   { ?>
                   <a href="" class="btn btn-success" data-toggle="modal" onclick="postid(<?php echo $row['Id']; ?>)"  data-target="#blockModal" >Block</a> 
                  <?php }
                  else{ ?>
                    <a href="" class="btn btn-danger" data-toggle="modal" onclick="getid(<?php echo $row['Id']; ?>)"  data-target="#unblockModal">UnBlock</a> </button> 
        <?php
      }
      ?>
        
</td>
      </tr>
        </tbody>
      <?php
    }
} 
else {
    echo "0 results";
  }
}

elseif(!empty($name) && !empty($gender) )
{
$sql1 = " SELECT * FROM Aldovo1 WHERE Name like '$name' AND Gender like '$gender' ";

//echo "abcd";
$result = $conn->query($sql1);
if ($result->num_rows > 0) 
{
   while($row = $result->fetch_assoc())
    {
      ?>
        <tbody>
      <tr>
                   <td align="center"><?php echo $row["Id"]; ?></td>
                  <td align="center"><?php echo $row["Name"]; ?></td>
                  <td align="center"><?php echo $row["Email"]; ?></td>
                  <td align="center"><?php echo $row["MobileNo"]; ?></td>
                  <td align="center"><?php echo $row["Location"]; ?></td>
                   <td align="center"><?php echo $row["Marital_status"]; ?></td>
                    <td align="center"><?php echo $row["Gender"]; ?></td>
        
      <td> 
                  <a href="#"  data-toggle="modal"  data-target="#mytable"></a> 
                  <a href="#" class="btn-danger btn" data-toggle="modal" onclick="idd(<?php echo $row['Id']; ?>)" data-target="#logoutModal">Delete</a>

                  <button  >
                  <a class="btn-danger btn" href="updateuser.php?Id=<?php echo $row["Id"]; ?>" ">Update</a>  </button>
                  <button  >
                  <a class="btn-danger btn" href="viewuser.php?Id=<?php echo $row["Id"]; ?>" ">View</a>  </button>
                   <button  >
                 
                   <?php if($row["Status"]==1) 
                   { ?>
                   <a href="" class="btn btn-success" data-toggle="modal" onclick="postid(<?php echo $row['Id']; ?>)"  data-target="#blockModal" >Block</a> 
                  <?php }
                  else{ ?>
                    <a href="" class="btn btn-danger" data-toggle="modal" onclick="getid(<?php echo $row['Id']; ?>)"  data-target="#unblockModal">UnBlock</a> </button> 
        <?php
      }
      ?>
        
</td>
      </tr>
        </tbody>
      <?php
    }
} 
else {
    echo "0 results";
  }
}
elseif(!empty($name) && empty($gender) )
{
$sql1 = " SELECT * FROM Aldovo1 WHERE Name like '$name' ";

//echo "abcd";
$result = $conn->query($sql1);
if ($result->num_rows > 0) 
{
   while($row = $result->fetch_assoc())
    {
      ?>
        <tbody>
      <tr>
         <td align="center"><?php echo $row["Id"]; ?></td>
                  <td align="center"><?php echo $row["Name"]; ?></td>
                  <td align="center"><?php echo $row["Email"]; ?></td>
                  <td align="center"><?php echo $row["MobileNo"]; ?></td>
                  <td align="center"><?php echo $row["Location"]; ?></td>
                   <td align="center"><?php echo $row["Marital_status"]; ?></td>
                    <td align="center"><?php echo $row["Gender"]; ?></td>
        
      <td> 
                  <a href="#"  data-toggle="modal"  data-target="#mytable"></a> 
                  <a href="#" class="btn-danger btn" data-toggle="modal" onclick="idd(<?php echo $row['Id']; ?>)" data-target="#logoutModal">Delete</a>

                  <button  >
                  <a class="btn-danger btn" href="updateuser.php?Id=<?php echo $row["Id"]; ?>" ">Update</a>  </button>
                  <button  >
                  <a class="btn-danger btn" href="viewuser.php?Id=<?php echo $row["Id"]; ?>" ">View</a>  </button>
                   <button  >
                 
                   <?php if($row["Status"]==1) 
                   { ?>
                   <a href="" class="btn btn-success" data-toggle="modal" onclick="postid(<?php echo $row['Id']; ?>)"  data-target="#blockModal" >Block</a> 
                  <?php }
                  else{ ?>
                    <a href="" class="btn btn-danger" data-toggle="modal" onclick="getid(<?php echo $row['Id']; ?>)"  data-target="#unblockModal">UnBlock</a> </button>
        <?php
      }
      ?>
      
</td>
      </tr>
        </tbody>
      <?php
    }
} 
else {
    echo "0 results";
  }
}
else
{
$sql1 = " SELECT * FROM Aldovo1 WHERE Gender like '$gender' ";

//echo "abcd";
$result = $conn->query($sql1);
if ($result->num_rows > 0) 
{
   while($row = $result->fetch_assoc())
    {
      ?>
        <tbody>
      <tr>
                   <td align="center"><?php echo $row["Id"]; ?></td>
                  <td align="center"><?php echo $row["Name"]; ?></td>
                  <td align="center"><?php echo $row["Email"]; ?></td>
                  <td align="center"><?php echo $row["MobileNo"]; ?></td>
                  <td align="center"><?php echo $row["Location"]; ?></td>
                   <td align="center"><?php echo $row["Marital_status"]; ?></td>
                    <td align="center"><?php echo $row["Gender"]; ?></td>
              <td> 
              <a href="#"  data-toggle="modal"  data-target="#mytable"></a> 
                  <a href="#" class="btn-danger btn" data-toggle="modal" onclick="idd(<?php echo $row['Id']; ?>)" data-target="#logoutModal">Delete</a>

                  <button  >
                  <a class="btn-danger btn" href="updateuser.php?Id=<?php echo $row["Id"]; ?>" ">Update</a>  </button>
                  <button  >
                  <a class="btn-danger btn" href="viewuser.php?Id=<?php echo $row["Id"]; ?>" ">View</a>  </button>
                   <button  >
                 
                   <?php if($row["Status"]==1) 
                   { ?>
                   <a href="" class="btn btn-success" data-toggle="modal" onclick="postid(<?php echo $row['Id']; ?>)"  data-target="#blockModal" >Block</a> 
                  <?php }
                  else{ ?>
                    <a href="" class="btn btn-danger" data-toggle="modal" onclick="getid(<?php echo $row['Id']; ?>)"  data-target="#unblockModal">UnBlock</a> </button>
        <?php
      }
      ?>
       
</td>
      </tr>
        </tbody>
      <?php
    }
} 
else {
    echo "0 results";
  }
}

?>
</table>
  </div>
      
       

    </section>
    <!-- /.content -->
  </div>
  </div>
<?php
include('sidebar.php');
include('footer.php'); 
?>
</body>
</html>