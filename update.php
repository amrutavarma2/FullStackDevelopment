<?php
include "config/db.php";
$id = $_GET['id'];

if (isset($_POST['update'])) {
    $contact = $_POST['contact'];
    mysqli_query($conn, "UPDATE students SET contact='$contact' WHERE id=$id");
    header("Location: index.php");
}

$data = mysqli_query($conn, "SELECT * FROM students WHERE id=$id");
$row = mysqli_fetch_assoc($data);
?>

<form method="POST">
    <h3>Update Contact</h3>
    <input type="text" name="contact" value="<?= $row['contact']; ?>">
    <button name="update">Update</button>
</form>