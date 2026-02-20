<?php include "config/db.php"; ?>

<!DOCTYPE html>
<html>
<head>
    <title>College Student Registration</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/validate.js"></script>
</head>

<body>
<h2>Student Registration System</h2>

<form method="POST" action="insert.php" onsubmit="return validateForm();">
    <input type="text" id="fname" name="fname" placeholder="First Name"><br>
    <input type="text" id="lname" name="lname" placeholder="Last Name"><br>
    <input type="text" id="roll" name="roll" placeholder="Roll No"><br>
    <input type="password" id="pass" name="pass" placeholder="Password"><br>
    <input type="password" id="cpass" name="cpass" placeholder="Confirm Password"><br>
    <input type="text" id="contact" name="contact" placeholder="Contact Number"><br>

    <button type="submit">Register</button>
</form>

<hr>

<h3>Student Records</h3>
<table>
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Roll No</th>
    <th>Contact</th>
    <th>Actions</th>
</tr>

<?php
$result = mysqli_query($conn, "SELECT * FROM students");
while ($row = mysqli_fetch_assoc($result)) {
?>
<tr>
    <td><?= $row['id']; ?></td>
    <td><?= $row['firstname']." ".$row['lastname']; ?></td>
    <td><?= $row['rollno']; ?></td>
    <td><?= $row['contact']; ?></td>
    <td>
        <a href="update.php?id=<?= $row['id']; ?>">Edit</a> |
        <a href="delete.php?id=<?= $row['id']; ?>">Delete</a>
    </td>
</tr>
<?php } ?>

</table>
</body>
</html>