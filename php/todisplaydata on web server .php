
<body>

User  Name is :<?php echo $_POST["name"]; ?><br>
First name is: <?php echo $_POST["firstname"]; ?><br>
Last name is   :<?php echo $_POST["lastname"]; ?><br>
email is  :<?php echo $_POST["email"]; ?><br>
password is  :<?php echo $_POST["psw"]; ?><br>
gender:<?php echo $_POST["gender"]; ?><br>
Birthday:<?php echo $_POST["birthday"]; ?><br>
Teachnical:<?php if(isset($_POST['Button'])){//to run PHP script on Button
if(!empty($_POST['teachnical'])){
// Loop to store and display values of individual checked checkbox.
foreach($_POST['teachnical'] as $selected){
echo $selected."</br>";
}
}
}?><br>
image is:<?php echo $_POST["pic"]; ?><br>


</body>