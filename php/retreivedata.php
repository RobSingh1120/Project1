

<?php
include_once 'connection.php';
$result = mysqli_query($conn,"SELECT * FROM MyGuests");
?>
<!-- $sql = "SELECT * FROM MyGuests"; -->
<!-- <?php
$i=0;
while($row = mysqli_fetch_array($result)) {
if($i%2==0)
$classname="even";
else
$classname="odd";
?> -->
<br>
<tr class="<?php if(isset($classname)) echo $classname;?>">
	<?php echo $row["id"]; ?>
    <?php echo $row["firstname"]; ?>
    <?php echo $row["lastname"]; ?><br>
   </tr>
<?php
$i++;
}
?>