

<?php

include('header.php');

include('sidebar.php');
?>
<?php

      
  include("connection.php");
 if($_SERVER["REQUEST_METHOD"] == "POST"){

$name=$_POST['Name']; 
 $email= $_POST['Email'];
  $mobile= $_POST['MobileNo'];
  $location= $_POST['Location'];
  $password= $_POST['Password'];
  $marital_status= $_POST['Marital_status'];
  $gender= $_POST['Gender'];

$q= "INSERT INTO `Aldovo1`(`Name`, `Email`, `MobileNo`, `Location`, `Password`, `Marital_status`, `Gender`) VALUES ('".$name."','".$email."','".$mobile."','".$location."','".$password."','".$marital_status."','".$gender."')";

$res= mysqli_query($conn,$q); 


if($res==true)
{
       echo "<script>location.href='datamysql.php';</script>";

      }
      else
      {
      echo "unsuccess";
      }
    } 

      ?>
      <html>
<body>
<div class="content-wrapper">
 


          <div class="box box-primary">
            <div class="box-header with-border">
                <h1>Add User Details</h1>
         
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form id="regis"  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST" enctype="multipart/form-data" class="custom_form pt-3" >
              <div class="box-body">
                <div class="form-group">
                  <label for="user">Name</label>
                  <input type="text" class="form-control" id="Name" name="Name" placeholder="name" >

                </div>
                <div class="form-group">
                  <label for="pass">Email</label>
                  <input type="text" class="form-control" id="Email" name="Email" placeholder="Email">
                </div>
                 <div class="form-group">
                  <label for="add">MobileNo</label>
                  <input type="text" class="form-control" id="MobileNo" name="MobileNo" placeholder="Mobile">
                </div>
                <div class="form-group">
                  <label for="add"> Location</label>
                  <input type="text" class="form-control" id="Location" name="Location" placeholder="Location">
                
                </div>
                <div class="form-group">
                  <label for="add"> Password</label>
                  <input type="password" class="form-control" id="Password" name="Password" placeholder="Password">
                
                </div>

                <div class="form-group">
                <label for="add"> Marital_status</label>
                <br>
                  <input type="radio" name="Marital_status" value="Single">Single<br>
                  <input type="radio" name="Marital_status" value="Married"> Married  
                
                </div>
                <div class="form-group">
                  <label for="Gender"> GENDER </label>
                  <select name="Gender" class="form-control" >
                  <option value="None" selected >None</option>
                    <option value="male">Male</option>
                        <option value="female">Female</option>
                         <option value="female">Other</option>
                        
                </select>
                </div>

              <!-- /.box-body -->

              <div class="box-footer">
                <button type="submit"  name="submit" class="btn btn-primary">ADD Account</button>
              </div>
            </form>
          </div>
          </div>
          </div>
           <script src="https://code.jquery.com/jquery-3.3.1.js"> </script>
<!-- Bootstrap 3.3.7 -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>


<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
   <script src="js/jquery.validate.min.js"></script>
    <script src="js/jquery.validate1.js"></script>
      
  <?php
  include('footer.php');
  ?>


