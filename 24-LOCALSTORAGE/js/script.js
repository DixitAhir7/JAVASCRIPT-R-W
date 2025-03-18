/*
localstorage will store the data in application in browser,
it is functionality of bom,
*/

const arr = [2313, 3, 12, 12, 13, 13, 1]
localStorage.setItem("key1", arr)

let obj = { name: "dixit", id: 2, city: "mangrol" }
localStorage.setItem("obj", JSON.stringify(obj))


let keyName = localStorage.key(0);
console.log(keyName);


let retrievedUser = JSON.parse(localStorage.getItem("obj"));
console.log(retrievedUser.name); 