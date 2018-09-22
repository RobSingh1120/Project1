<?php

include('header.php');
include('sidebar.php');
?>
<?php
$Id=$_GET['Id'];
      
  include("connection.php");
 /*if($_SERVER["REQUEST_METHOD"] == "POST"){*/
   //print_r($Id);
   $sql="select * from Aldovo1 where Id='$Id'";
   $result=mysqli_query($conn,$sql);

while($res = mysqli_fetch_array($result))
{
    $name = $res['Name'];
    $email = $res['Email'];
    $mobile = $res['MobileNo'];
 $location = $res['Location'];
 $password = $res['Password'];
 $marital_status = $res['Marital_status'];
 $gender = $res['Gender'];
       
}
?>

<div class="content-wrapper">
 <h1>User Detail Update</h1>




                   <div class="row">
                          <!-- left column -->
                          <div class="col-md-6">
                            <!-- general form elements -->
                            <div class="box box-primary">
                              <div class="box-header with-border">
                                
                              </div>
                              <!-- /.box-header -->
                              <!-- form start -->
                              <form id="regis"  action="updateprocess.php?Id=<?php echo $Id;?>" method="POST" >
                                <div class="box-body">
                                  <div class="form-group">
                                    <label for="user">Name</label>

                                    <input type="text" class="form-control" id="Name" name="Name" placeholder="name" value="<?php echo $name;?>" >

                                  </div>
                                  <div class="form-group">
                                    <label for="pass">Email</label>
                                    <input type="text" class="form-control" id="Email" name="Email" placeholder="Email" value="<?php echo $email;?>">
                                  </div>
                                   <div class="form-group">
                                    <label for="cpass">MobileNo</label>
                                    <input type="text" class="form-control" id="MobileNo" name="MobileNo" placeholder="Mobile" value="<?php echo $mobile;?>">
                                  </div>
                                  <div class="form-group">
                                    <label for="add"> Location</label>
                                    <input type="text" class="form-control" id="Location" name="Location" placeholder=" Location" value="<?php echo $location;?>">

                                   </div>
                                                       <div class="form-group">
                                      <label for="add"> Password</label>
                                      <input type="password" class="form-control" id="Password" name="Password" placeholder="Password" value="<?php echo $password;?>" >
                                    
                                    </div>

                                   <div class="form-group">
                                  <label for="add"> Marital Status</label>
                                  <br>
                                   <?php if($Marital_status ==='Single')
                                     {
                                      ?>
                                      <input type="radio"  name="Marital_status" value="Single" checked>Single
                                      <input type="radio"   name="Marital_status" value="Married"> Married
                                      <?php }
                                      else
                                      { ?>
                                          <input type="radio"   name="Marital_status" value="Single"> Single
                                         <input type="radio"   name="Marital_status" value="Married" checked> Married
                            
                               <?php       }  ?>
                                  </div>
                                  <div class="form-group">
                                    <label for="Gender"> GENDER </label>
                                    <select name="Gender" class="form-control"> 
                                      <?php if($gender === 'male')
                                      {
                                        ?>
                                        <option value="male" selected >Male</option>
                                          <option value="female">Female</option>
                                          <option value="transgender">Other</option>
                                        <?php }
                                        else if($gender ==='female')
                                        { ?>
                                                    <option value="male">Male</option>
                                          <option value="female" selected>Female</option>
                                          <option value="transgender">Other</option>
                                     <?php   }
                                     else
                                     { ?>
                                                  <option value="male" >Male</option>
                                          <option value="female">Female</option>
                                          <option value="transgender" selected>other</option>
                                  <?php  } ?>

                                      
                                          </select>
                                          </div>
                                  
                                <!-- /.box-body -->

                                <div class="box-footer">
                                  <button type="submit"  name="submit" class="btn btn-primary">Update Account</button>
                                </div>
                              </form>
                            </div>
                            </div>
                            </div>
                                </div>
                                    </div>
                          
          <!-- /.box -->
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
   