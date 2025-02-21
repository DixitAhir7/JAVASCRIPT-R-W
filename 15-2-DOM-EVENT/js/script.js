let Num = document.querySelector("section h2")
let button = document.querySelector("section button")
let button2 = document.querySelector("section .btn2")

// problem is that i can click anywhere

function changeColor() {
    let randomColorValue1 = Math.floor(Math.random() * 256);
    let randomColorValue2 = Math.floor(Math.random() * 256);
    let randomColorValue3 = Math.floor(Math.random() * 256);
    Num.style.color = `rgb(${randomColorValue1}, ${randomColorValue2}, ${randomColorValue3})`;
}

// changing names on doubleclick

const names = [
    "Pratham",
    "Akash",
    "Devang",
    "JayminSir",
    "Ahir",
]

function changeName() {
    let randomIndex = Math.floor(Math.random() * 5);
    Num.innerHTML = names[randomIndex];
    console.log(randomIndex)
}

/*
addeventlistner can perform without calling the function,
and without in html too 
*/

button.addEventListener("click", changeColor)
button2.addEventListener("click", changeName)

// math module
// it is returning the numbers between 0-1