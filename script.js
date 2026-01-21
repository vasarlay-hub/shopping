function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("shopBox").style.display = "block";
    } else {
        msg.innerText = "invalid username or password";
        msg.style.color = "red"
    }
}
