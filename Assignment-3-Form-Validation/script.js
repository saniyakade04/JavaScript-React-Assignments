function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;

    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText =
            "Name is required";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText =
            "Enter a valid email";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText =
            "Phone must contain 10 digits";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText =
            "Password must contain at least 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Registration successful!");
    }

    return valid;
}