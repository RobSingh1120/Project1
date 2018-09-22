<?php

session_start();
?>
<body>
<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
         <?php echo $_SESSION['Name'];?>
         <br>
          <a href="#"><i class="fa fa-circle text-success">Active</i></a>
        </div>
      </div>
      <!-- search form -->
      
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        
        
        <li>
          <a href="datamysql.php">
            <i class="fa fa-th"></i> <span>USER</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        
        
        
  
        
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  </body>