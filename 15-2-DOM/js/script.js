let h2Tag = document.querySelector("h2")
const inputColor = document.querySelector(".form-style input")
let size = 100;

function changeSize() {
    h2Tag.style.fontSize = `${size}px`;
}

function changeColor() {
    h2Tag.style.color = inputColor.value
}