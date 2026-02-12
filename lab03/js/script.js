// DOM Access using getElementById
document.getElementById("submitBtn").onclick = function () {
    validateForm();
};

function validateForm() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    // Empty check
    if (username === "" || email === "" || phone === "" || password === "" || confirm === "") {
        document.getElementById("message").innerHTML = "All fields are mandatory";
        return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("message").innerHTML = "Phone must be 10 digits";
        return;
    }

    // Password validation
    let passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passRegex.test(password)) {
        document.getElementById("message").innerHTML =
            "Password must have capital, digit & special char";
        return;
    }

    // Password match
    if (password !== confirm) {
        document.getElementById("message").innerHTML = "Passwords do not match";
        return;
    }

    // Email validation
    let emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("message").innerHTML = "Invalid Email format";
        return;
    }

    document.getElementById("message").innerHTML = "Registration Successful";
    document.getElementById("message").style.color = "green";
}

/* Change image source */
function changeImage() {
    document.getElementById("myImage").src = "images/img2.jpg";
}

/* jQuery Operations */
$(document).ready(function () {

    // Change button text
    $("#submitBtn").text("Submit Form");

    // Change background using jQuery
    $("body").css("background-image", "linear-gradient(to right, #dbeafe, #fef9c3)");

    // Access form data
    $("#submitBtn").click(function () {
        console.log($("#username").val());
    });

    // Add attribute
    $("#username").attr("placeholder", "Enter username");

    // Add text node
    $("#addText").click(function () {
        $("#message").append("<span> ✔</span>");
    });

    // Delete node
    $("#deleteText").click(function () {
        $("#message").empty();
    });
});
