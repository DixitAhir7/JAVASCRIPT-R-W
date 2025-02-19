let username = document.querySelector(".form-validation label");
let password = document.querySelector(".for-password label");


let usernameoutput = document.querySelector(".output p:first-child span");
let passwordoutput = document.querySelector(".output p:last-child span");

function formSubmit() {
    let value_user = username.value;
    let value_pass = password.value;

    if (usernameoutput && passwordoutput) {
        console.log("username:", value_user);
        console.log("password:", value_pass);
        usernameoutput.innerText = value_user;
        passwordoutput.innerText = value_pass;
    } else {
        console.log("please fill out this field")
    }
}