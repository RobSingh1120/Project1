 <?php 

session_start();

    $_SESSION["name"]=$_POST["name"];
  
    $_SESSION["Mobile"]=$_POST["Mobile"];
    $_SESSION["place"]=$_POST["place"];
    $_SESSION["pass"]=$_POST["pass"];
    $_SESSION["conPass"]=$_POST["conPass"];
       // $_SESSION["Image"]=$_FILES["photo"]["name"];
         $_SESSION["photo_name"]=$_FILES["photo"]["name"];
// print($_FILES["photo"]['name']);exit;
 $photo_name =$_FILES['photo']['name'];
 $tmp_name =$_FILES['photo']['tmp_name'];




//print_r($_SESSION["name"]); exit();

$nameErr= $mobileErr = $locationErr = $passwordErr = $cpasswordErr = $photoErr = "";
$name = $email = $Mobile = $place = $pass = $conPass= $photo =  "";
if(isset($_POST['submit']))
{


 if (empty($_POST["name"])) 
  {

    $nameErr = "Name is required ";
  } 
  else 
  {
   $name = test_input($_POST["name"]);
   if ( !preg_match('/^[a-z ]+$/i',$name))
    {
      $nameErr = "Only letters and white space  are allowed";
    }
  }

  
    
  if (empty($_POST["Mobile"])) {
    $mobileErr = "Mobile number is required";
  }
   else {
    $Mobile = test_input($_POST["Mobile"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL
    if (!preg_match('/^[0-9]*$/',$Mobile))      {
        $mobileErr = "Invalid format please fill ";
    }
  }



  if (empty($_POST["place"])) {
    $locationErr = "place is required";
  } 
  else {
    $place = test_input($_POST["place"]);
  }






  if (empty($_POST["pass"])) {
    $passwordErr = "password is required";
  }
   else {
    $password = test_input($_POST["pass"]);
    
  }




  if (empty($_POST["conPass"])) {
    $cpasswordErr = "confirm password is required";

  } 
  else {
    $cpassword = test_input($_POST["conPass"]);

    if($_POST["conPass"]!==$_POST["pass"])
     {
         $cpasswordErr="please enter same password ";
    }
  }

if (empty($_FILES['photo'])) {
    # code...
    $photoErr="Image is required";
}
else{
    $photo =test_input($_FILES["photo"]);
}



  if($nameErr == "" && $emailErr == "" && $mobileErr == "" && $locationErr == "" && $passwordErr ==""  &&  $cpasswordErr == "" && $photoErr =="" )
  {
     move_uploaded_file($tmp_name,"images/".$photo_name);
     
     header("Location:signup-code.php");
    }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


?> 

<!DOCTYPE html>
<html lang="en">

<head>
    <style>
   .error 
    {
    color: #FF0000;
    }
    </style>
    
</head>
<body class="nologged">
    <header class="d-flex align-items-center" >
        <div class="container-common">
            <div class="row justify-content-end align-items-center">
                <div class="logo mr-auto">
                    <a h
                    </a>
                </div>
                <div class="menu ml-auto" id="menubox">
                    <span class="close-menu" id="menuClose"></span>
                    <ul>
                      <li><a href="login.php">Login</a></li>
                       
                    </ul>
                
                    </div>
                </div>
                <a href="javascript:;" class="mob-menu" id="menuShow">
                    <span class="menu-bar"></span>
                </a>
            </div>
        </div>
    </header>
    <main>
        <section class="main-content">
            <div class="banner-pages d-flex align-items-center justify-content-center text-center" style="background-image:url(images/header-pic3.jpg);">

            </div>
        </section>
        <section class="form_control min_height_650">
            <div class="container_box_form margin-minus-top box_shadow">
                <div class="d-flex align-items-center justify-content-center min_height_350">
                    <div class="w-100">
                        <div class="form_head_text max_width_500 text-center">
                          
                          
                        </div>

                        <form id="registration" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" class="custom_form pt-3" method="POST" enctype="multipart/form-data">
                        <!-- <form  id = "registration" action="insertdatatodatabase.php" method="post"  enctype="multipart/form-data"> -->
                            <div class="max_width_350">
                                <div class="flied_grop mb-3">
                                    <div class="form-group custom_group">
                                        <input type="text" class="form-control" placeholder="Name" name="name" id="name" value="<?php echo $name;?>"   />
                                        <span class="error"> <?php echo $nameErr;?></span>
                                    </div>
                                </div>
                                <div class="flied_grop mb-3">
                                    <div class="form-group custom_group">
                                        <input type="email" class="form-control" placeholder="Email" name="email" id="email"  value="<?php echo $email;?>" />
                                        <span class="error"><?php echo $emailErr;?></span>
                                    </div>
                                </div>
                                <div class="flied_grop mb-3">
                                    <div class="form-group custom_group">
                                        <input type="text" class="form-control" placeholder="Mobile No." id="Mobile" name="Mobile"    value="<?php echo $Mobile;?>"  maxlength="11" />
                                         <span class="error"> <?php echo $mobileErr;?></span>
                                    </div>
                                </div>
                                <div class="flied_grop mb-3">
                                    <div class="form-group custom_group">
                                        <input type="text" class="form-control" placeholder="Location "  name="place" id="place"  value="<?php echo $place;?>" />
                                         <span class="error"> <?php echo $locationErr;?></span>
                                    </div>
                                </div>

                                <div class="flied_grop mb-3">
                                    <div class="form-group custom_group">
                                        <input type="password" class="form-control" placeholder="Password " id="pass" name="pass"   value="<?php echo $pass;?>" />
                                        <span class="error"> <?php echo $passwordErr;?></span>
                                    </div>
                                </div>
                                <div class="flied_grop mb-3">
                                    <div class="form-group custom_group">
                                        <input type="password" class="form-control" placeholder="Confirm Password " name="conPass"  id="conPass"  value="<?php echo $conPass;?>"  />
                                         <span class="error"> <?php echo $cpasswordErr;?></span>
                                    </div>
                                </div>
                                <div class="flied_grop mb-3">
                                    <div class="form-group custom_group">
                                        <label class="kycfile-uplaod">
                                            <input type="file" name="photo" id="Image" class="form-control" accept="image/*" value="<?php echo $Image;?>" />
                                            
                                            
                                            <i class="fas fa-paperclip"></i>
                                        </label>
                                    </div>
                                </div>

                                <div class="flied_grop mb-3">
                                    <div class="form-goup d-flex flex-wrap justify-content-between">
                                        <div class="lft_div">
                                        <input type="checkbox"  id="check" name="checkbox" />
                                            <label class="custom_check">I agree to the <a href="terms-conditions.php" >terms and condtions</a>
                                            
                                            <span class="checkmark"></span>
                                        </label>
                                        </div> <span id="ide8"> </span>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <button type="submit"  name="submit" class="btn theme-btn btn-block btn-lg">Sign Up</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </main>

    
    <!-- logout Modal end -->
   <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/intlInputPhone.js"></script> 
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 <!--    <script src="js/jquery.min.js"></script>  -->
   <script src="js/jquery.validate.js"></script>
   <script src="js/jquery.validate.min.js"></script>
      
</body> 
</html>
