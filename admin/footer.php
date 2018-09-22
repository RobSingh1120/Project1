<?php 
session_start();
?>


 <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 2.4.0
    </div>
    <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
    reserved.
  </footer>

  <!-- Control Sidebar -->
  
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>
<div class="modal fade" id="logoutModal1" tabindex="-1" role="dialog">
        <div class="modal-dialog max-WT-450" role="document">
            <div class="modal-content text-center">
                <div class="modal-body custome-modla-body min-ht-300 d-flex align-items-center justify-content-center">
                    <div class="w-100">
                        <img src="images/icon-logout.png" class="logOut-img" alt="">
                        <h5 class="mb40 gill">Are you sure you want to Logout?</h5>
                        <li><a href="index.php"><button type="button" ><i class="btn theme-btn max-WT-140" >YES</i></a></li>
                             <li><a href="datamysql.php"><button type="button"><i class="btn theme-btn max-WT-140">NO</i></a></li>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
 <!-- Modal -->
   <!--  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#logoutModal">Open Modal</button>  -->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog">
        <div class="modal-dialog max-WT-450" role="document">
            <div class="modal-content text-center">
                <div class="modal-body custome-modla-body min-ht-300 d-flex align-items-center justify-content-center">
                                    <div class="w-100">
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <img src="images/icon-logout.png" class="logOut-img" alt="">
                        <h5 class="mb40 gill">Want to Delete?</h5>
                        <a type="submit" id="modalSubmit" class="btn btn-primary max-WT-140">YES</a>
                        <button type="button" class="btn btn-primary max-WT-140" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="blockModal" tabindex="-1" role="dialog">
        <div class="modal-dialog max-WT-450" role="document">
            <div class="modal-content text-center">
                <div class="modal-body custome-modla-body min-ht-300 d-flex align-items-center justify-content-center">
                                    <div class="w-100">
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <img src="images/icon-logout.png" class="logOut-img" alt="">
                        <h5 class="mb40 gill">Are you sure you want to UnBlock?</h5>
                        <a  type="submit" id="ModalSubmitBlock" class="btn btn-primary max-WT-140">YES</a>
                        <button type="button" class="btn btn-primary max-WT-140" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="modal fade" id="unblockModal" tabindex="-1" role="dialog">
        <div class="modal-dialog max-WT-450" role="document">
            <div class="modal-content text-center">
                <div class="modal-body custome-modla-body min-ht-300 d-flex align-items-center justify-content-center">
                                    <div class="w-100">
                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <img src="images/icon-logout.png" class="logOut-img" alt="">
                        <h5 class="mb40 gill">Are you sure you want to Block?</h5>
                        <a  type="submit"  id="ModalSubmitUnblock" class="btn btn-primary max-WT-140">YES</a>
                        <button type="button" class="btn btn-primary max-WT-140" data-dismiss="modal">No</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


<!-- ./wrapper -->
<!-- jQuery 3 -->

 <script src="https://code.jquery.com/jquery-3.3.1.js"> </script>
<!-- Bootstrap 3.3.7 -->
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready( function () {
    $('#mytable').DataTable();
} );
function idd(Id) {
  $("#modalSubmit").attr('href','deleteuser.php?Id='+Id);
}


function postid(Id) {

  $("#ModalSubmitBlock").attr('href','blockuser.php?Id='+Id);
}
function getid(Id) {

  $("#ModalSubmitUnblock").attr('href','unblockuser.php?Id='+Id);
}

</script>
</body>
</html>
