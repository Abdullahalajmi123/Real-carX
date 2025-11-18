function validateSignup() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let phone = document.getElementById("signupPhone").value;

    if (name === "" || email === "" || password === "" || phone === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email format.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    if (phone.length < 9 || phone.length > 10) {
        alert("Phone number must be 9–10 digits.");
        return false;
    }

    document.getElementById("signupTitle").innerHTML = "Account Created!";
    document.getElementById("signupTitle").style.color = "green";

    alert("Signup successful!");
    return true;
}


/* lOGIN vald */

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Invalid email format.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    document.getElementById("loginTitle").innerHTML = "Welcome Back!";
    document.getElementById("loginTitle").style.color = "green";

    alert("Login successful!");
    return true;
}
