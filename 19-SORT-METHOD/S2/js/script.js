const btn1 = document.querySelector("div #btn1")
let h1Tag = document.querySelector("h1")

let arr1 = [
    9, 5, 6, 3, 7, 8, 1, 2, 11, 10, 4
]

btn1.addEventListener("click", function () {
    h1Tag.innerText = arr1.sort((a, b) => a - b).join(", ")
})


const btn2 = document.querySelector("div #btn2")
let h2Tag = document.querySelector("h2")

let arr2 = [
    9, 5, 6, 3, 7, 8, 1, 2, 11, 10, 4
]

btn2.addEventListener("click", function () {
    h2Tag.innerText = arr2.reverse()
})