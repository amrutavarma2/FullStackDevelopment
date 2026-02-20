function validateForm() {
    let contact = document.getElementById("contact").value;
    let pass = document.getElementById("pass").value;

    if (contact.length != 10 || isNaN(contact)) {
        alert("Contact must be 10 digits");
        return false;
    }

    let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$&#]).{7,}$/;
    if (!pattern.test(pass)) {
        alert("Password must have capital letter, number & special character");
        return false;
    }

    return true;
}