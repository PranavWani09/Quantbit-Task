document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailerror = document.getElementById("email-error");
    let passworderror = document.getElementById("password-error");

    emailerror.textContent = "";
    passworderror.textContent = "";

    let isValid = true;

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        emailerror.textContent = "Enter a valid email address";
        isValid = false;
    }


    if (password.length < 8) {
        passworderror.textContent = "Password must be at least 8 characters long";
        isValid = false;
    }

    if (isValid) {
        alert("Login Successful!");
    }
});
