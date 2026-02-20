<?php
include "config/db.php";

$fname = trim($_POST['fname']);
$lname = trim($_POST['lname']);
$roll = trim($_POST['roll']);
$pass = $_POST['pass'];
$cpass = $_POST['cpass'];
$contact = $_POST['contact'];

if ($fname == "" || $lname == "" || $roll == "" || $pass == "" || $contact == "") {
    die("Fields cannot be empty");
}

if ($pass != $cpass) {
    die("Passwords do not match");
}

$hash = password_hash($pass, PASSWORD_DEFAULT);

$query = "INSERT INTO students (firstname, lastname, rollno, password, contact)
          VALUES ('$fname', '$lname', '$roll', '$hash', '$contact')";

mysqli_query($conn, $query);

header("Location: index.php");
?>