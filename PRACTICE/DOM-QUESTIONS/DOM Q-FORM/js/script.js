let username = document.querySelector(".form-validation input"); 
let password = document.querySelector(".for-password input");     

let usernameoutput = document.querySelector(".output p:first-child span");
let passwordoutput = document.querySelector(".output p:last-child span");

function formSubmit() {
    let value_user = username.value;  
    let value_pass = password.value;  

    if (value_user && value_pass) {
        console.log("Username:", value_user);
        console.log("Password:", value_pass);
        usernameoutput.innerText = value_user;
        passwordoutput.innerText = value_pass;
    } else {
        console.log("Please fill out this field");
    }
}
