let form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    passwordError.innerText = "";
    successMessage.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email address";
        isValid = false;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        phoneError.innerText = "Phone number is required";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.innerText = "Enter a valid 10-digit number";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.innerText = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.innerText = "Password must contain at least 6 characters";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMessage.innerText = "✓ Registration successful!";

        form.reset();
    }

});