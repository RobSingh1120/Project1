
<?php 
session_start();
?>


<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="description" content="">
    <meta name="author" content="">
    <title></title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/slick.css" rel="stylesheet">
    <link href="css/slick-theme.css" rel="stylesheet">
    <link href="css/intlInputPhone.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/mobile.css" rel="stylesheet">
    <link href="css/global.css" rel="stylesheet">
</head>

<body class="nologged">
    <header class="d-flex align-items-center">
        <div class="container-common">
            <div class="row justify-content-end align-items-center">
                <h3>Login User</h3>
                <div class="menu ml-auto" id="menubox">
                    <span class="close-menu" id="menuClose"></span>
                
                  <!--       <button  >
                  <a class="btn-danger btn" href="adduser.php" ">ADD USER</a>  </button> -->
                        
                </div>
              
                    </div>
                </div>
               
            </div>
        </div>
    </header>
    <main>
        <section class="main-content">
            <div class="banner-pages d-flex align-items-center justify-content-center text-center" style="background-image:url(images/6.jpg);">

            </div>
        </section>
        <section class="form_control min_height_650">
            <div class="container_box_form margin-minus-top box_shadow">
                <div class="d-flex align-items-center justify-content-center min_height_350">
                    <div class="w-100">
                        <div class="form_head_text max_width_500 text-center">
                            <h5 class="font-weight-bold">Login Details </h5>
                            
                        </div>
                        <form id="registration" action="indexcode.php" method="POST" enctype="multipart/form-data" class="custom_form pt-3" >
              <div class="box-body">
                <div class="form-group">
                  <label for="user">MobileNo</label>
                  <input type="text" class="form-control" id="MobileNo" name="MobileNo" placeholder="MobileNo" >

                </div>
                <div class="form-group">
                  <label for="pass">Password</label>
                  <input type="password" class="form-control" id="Password" name="Password" placeholder="Password">
                </div>

                
          

              <div class="box-footer">
                <button type="submit"  name="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
                    </div>
                </div>
            </div>
        </section>

    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.js"> </script>
<!-- Bootstrap 3.3.7 -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>


<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<!-- <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/intlInputPhone.js"></script>  -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 <!--    <script src="js/jquery.min.js"></script>  -->
  
   <script src="js/jquery.validate.min.js"></script>
    <script src="js/jquery.validate.js"></script>
<?php
   include('footer.php');
   ?>
</body>