const states = [
 "andhra pradesh"
 "telagana"
 "tamil naidu"
 "benguluru"
"kerala"
];
const stateselect =
 document.getElementById("state");
states.forEach(state => {
 const option =
  docement.createElement("option");
 option.value = state;
 option.textContent = state;
 stateSelect.appendChild(option);
});
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        district: document.getElementById("district").value,
        state: document.getElementById("state").value
    };

    console.log("User Information Received:", userData);

    document.getElementById("message").innerText =
        "Information received and sent to owner successfully!";
    
    document.getElementById("userForm").reset();
});



