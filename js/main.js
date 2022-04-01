const form = document.querySelector("form");
const username = document.getElementsById("username");
const password = document.getElementsById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});
function checkInputs() {
    const usernamevalue = username.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();
}

// Username inputs
if (usernamevalue ==="") {
setError(username, "Error: username cannot be Empty");
} else{
     setSuccess(username);
}

// Password Input
if (passwordvalue ===""){
    setError(password, "Error: password cannot be empty")
}

// Check for password conformation input
if (password2value ==""){
    setError(password2, "Error: password cannot be empty") ;
} else {
    setSuccess(password2);
}