// acessing id,class,tag,name

let getting_class = document.getElementsByClassName("btn")
console.log(getting_class);

let getelementby_id = document.getElementById("navbarSupportedContent")
console.log(getelementby_id);

let getting_tag = document.getElementsByTagName("h1")
console.log(getting_tag);

let getting_name = document.getElementsByName("#")
console.log(getting_name);

getting_class[0].innerText = "hello"

document.body.style.backgroundColor = "white";
document.body.style.backgroundColor = "gray";