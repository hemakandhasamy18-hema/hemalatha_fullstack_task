document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "" ||
        dob === "" || course === "" || address === "" ||
        password === "" || confirmPassword === "") {

        message.style.color = "red";
        message.innerHTML = "Please fill in all fields.";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerHTML = "Passwords do not match.";
        return;
    }

    if (!terms) {
        message.style.color = "red";
        message.innerHTML = "Please accept the terms and conditions.";
        return;
    }

    message.style.color = "green";
    message.innerHTML = "Registration successful!";

    document.getElementById("registrationForm").reset();
});