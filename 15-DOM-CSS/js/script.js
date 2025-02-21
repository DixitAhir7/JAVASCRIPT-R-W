let changeElement = document.querySelector(".container .structure h2");
changeElement.style.color = "red"

// 10px margin 
// work only in inline style
changeElement.style.margin = "10px"

// css

let changeCss = document.querySelector(".container .structure .name");
changeCss.style.cssText = "color: red; padding: 10px;"

// setting bg-image

function addImage() {
    document.body.style.background = "#f3f3f3 url('img/30076.jpg') no-repeat right top"
}

// function bgSize() {
//     document.getElementsByClassName("btn").style.backgroundSize = "60px 120px"
// }

function border() {
    document.getElementsByClassName("bd")[0].style.border = "thick solid black"
}

// adding border-bottom
// same with top,left,right

function borderB() {
    document.getElementsByClassName("da")[0].style.borderBottomLeftRadius = "10px"
}