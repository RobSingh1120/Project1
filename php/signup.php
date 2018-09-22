
<!DOCTYPE html>
<html>
<head>
 
</head>
<style>
body>
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
}

button:hover {
    opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
    padding: 14px 20px;
    background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
    padding: 16px;
}

/* Clear floats */
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
    .cancelbtn, .signupbtn {
       width: 100%;
    }
}
</style>
<body>

<form action="insertdatab.php" method="post" >
  <div class="container">
    <h1>STUDENT</h1>
    <p>Please fill in this form to create an account.</p
      >
        <label><b>User Name</b></label>
    <input type="text" placeholder="Hint-Robinsingh"  name="name" type="text" pattern="[a-zA-Z]{}" title="Minimum 2 letters"  minlength="2" required>

    
        <label><b>First Name</b></label>
    <input type="text" placeholder="Hint-Robin"  name="firstname" type="text" pattern="[a-zA-Z]{5,}" title="Minimum 5 letters" required>

<label><b>Last Name</b></label>
    <input type="text" placeholder="Hint-Robin"  name="lastname" type="text" pattern="[a-zA-Z]{5,}" title="Minimum 5 letters" required>

    <label ><b>Email</b></label>
    <input type="text" required placeholder="Hint-robin@gmail.com" name="email" pattern="[^ @]*@[^ @]*" required>

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>

    
    <label><b>Gender</b></label><br><br> 
  <input type="radio" name="gender" value="male" checked> Male
  <input type="radio" name="gender" value="female"> Female
  <input type="radio" name="gender" value="other"> Other 
        <br><br>
    <label for="birthday"><b>Birthday</b></label>
    <input type="date" placeholder="bday date" name="birthday" required>

    <br><br>

    <label><b>Teachnical</b></label><br><br> 

  <input type="checkbox" name="teachnical[]" value="c++">c++<br>
  <input type="checkbox" name="teachnical[]" value="java">java<br>
  <input type="checkbox" name="teachnical[]" value="Python">Python<br>
  <input type="checkbox" name="teachnical[]" value="HTML">HTML<br>
  <input type="checkbox" name="teachnical[]" value="LAMP" >LAMP<br>

<br><br>
   <label><b>Image</b></label>
 <input type="file" name="pic" accept="image/png, image/jpeg">

   <label for="avatar">Profile picture:</label>
        <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg" />
<label for="avatar">Profile picture:</label>
        <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg" />
<br>
     
<!--       <button type="submit" class="signupbtn">Submit</button>
 -->     <input type="submit" name="Button" value="Submit">
  </div>
</form>

</body>
</html>
