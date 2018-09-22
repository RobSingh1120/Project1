
<!-- master.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="description" content="Aldovo is going to be viral in next 1 year.">
    <!-- Twitter meta-->
   <!--  <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:site" content="@pratikborsadiya">
    <meta property="twitter:creator" content="@pratikborsadiya"> -->
    <!-- Open Graph Meta-->
    <meta property="og:type" content="Aldovo">
    <meta property="og:site_name" content="Aldovo Admin">
    <meta property="og:title" content="Aldovo admin panel">
    <meta name="base_url" content="{{ url('/') }}">
    <meta name="base_url_admin" content="{{  asset('admin/js/utils.js') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
  <!--   <meta property="og:url" content="http://pratikborsadiya.in/blog/vali-admin">
    <meta property="og:image" content="http://pratikborsadiya.in/blog/vali-admin/hero-social.png">
    <meta property="og:description" content="Vali is a responsive and free admin theme built with Bootstrap 4, SASS and PUG.js. It's fully customizable and modular."> -->
    <title>@yield('title')</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/jpg" href="http://www.simpleimageresizer.com/_uploads/photos/2ff923e2/2018-07-18_32x32.png" />

     <link rel="stylesheet" href="{{asset('admin/bower_components/bootstrap/dist/css/bootstrap.min.css')}}" />

    
     <link rel="stylesheet" href="{{asset('admin/bower_components/font-awesome/css/font-awesome.min.css')}}" />

  <!-- Ionicons -->
 
   <link rel="stylesheet" href="{{asset('admin/bower_components/Ionicons/css/ionicons.min.css')}}" />

  <!-- Theme style -->
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
 
   <link rel="stylesheet" href="{{asset('admin/dist/css/skins/_all-skins.min.css')}}" />

  <!-- Morris chart -->
  
   <link rel="stylesheet" href="{{asset('admin/bower_components/morris.js/morris.css')}}" />

  <!-- jvectormap -->
 
    <link rel="stylesheet" href="{{asset('admin/bower_components/jvectormap/jquery-jvectormap.css')}}" />

  <!-- Date Picker -->

  <link rel="stylesheet" href="{{asset('admin/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')}}" />

  <!-- Daterange picker -->
  
<link rel="stylesheet" href="{{asset('admin/bower_components/bootstrap-daterangepicker/daterangepicker.css')}}" />

<link rel="stylesheet" href="{{asset('admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css')}}" />
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic"/>
    <link rel="stylesheet" href="{{asset('admin/css/AdminLTE.css')}}" />
    <link rel="stylesheet" href="{{asset('admin/css/AdminLTE.min.css')}}" />
    <link rel="stylesheet" href="{{asset('admin/css/style.css')}}"/>
    <!-- toastr css -->     
    <<!-- link rel="stylesheet" href="{{asset('admin/css/toastr.min.css')}}"/> -->
<!--     <link href="{{asset('admin/sweetalert.css')}}" rel="stylesheet"/> -->




<!--     <link rel="stylesheet" href="http://cdn.bootcss.com/toastr.js/latest/css/toastr.min.css">
 -->


   
    
    <!-- Font-icon css-->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    @yield('stylesheets')
  </head>

<body class="app sidebar-mini rtl pace-done">
    <div class="wrapper">
        @include('admin.partial.header')
        @include('admin.partial.sidebar')
        <main class="app-content">
        @yield('content')
        </main>
        @yield('footer')
    </div>

     <!-- Essential javascripts for application to work-->
    <!-- <script src="{{ asset('admin/js/jquery-3.2.1.min.js') }}"></script> -->
 <!--    <script src="{{ asset('admin/js/popper.min.js') }}"></script>
    <script src="{{ asset('admin/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('admin/js/main.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>
    <script src="{{ asset('admin/js/front_end_js/form_validate.js') }}"></script> -->

    <!-- toastr js -->  
    
    <!-- <script src="http://cdn.bootcss.com/toastr.js/latest/js/toastr.min.js"></script> -->                    
    <!-- The javascript plugin to display page loading on top-->
   
    <script src="{{ asset('admin/js/plugins/pace.min.js') }}"></script>
    <script src="https://cdn.ckeditor.com/4.10.0/standard/ckeditor.js"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="{{ asset('admin/js/plugins/chart.js') }}"></script>
   
   
    @yield('after-script')
    <script type="text/javascript">
    var public_url = "<?php echo URL::to('/');?>";
    </script>
</body>
</html>