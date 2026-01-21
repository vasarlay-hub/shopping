function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("shopBox").style.display = "block";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid login!";
    }
}

let cartItems = [];

function addCart(item) {
    cartItems.push(item);
    document.getElementById("cart").innerText =
        "Cart Items: " + cartItems.join(", ");
}
