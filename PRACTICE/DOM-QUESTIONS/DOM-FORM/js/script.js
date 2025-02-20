// let changeColor = document.getElementsByClassName("container");
// document.body.style.backgroundColor = changeColor.value;

const h2Tage = document.querySelector("h2");
const inputColor = document.querySelector(".container");

function changeColor() {
    h2Tage.style.backgroundColor = inputColor.value
}