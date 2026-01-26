 function createAccount() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  // Name validation
  if (name === "") {
    message.innerHTML = "Please enter your name";
    message.style.color = "red";
    return false;
  }

  // Phone validation (10 digits)
  if (!/^[0-9]{10}$/.test(phone)) {
    message.innerHTML = "Enter valid 10-digit phone number";
    message.style.color = "red";
    return false;
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message.innerHTML = "Enter valid email address";
    message.style.color = "red";
    return false;
  }

  // Success
  message.innerHTML = "Account Created Successfully!";
  message.style.color = "green";

  // Optional: clear form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";

  return false; // prevents page refresh
}

