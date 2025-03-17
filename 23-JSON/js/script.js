const obj = {
    id: 20,
    name: "dixit",
    address: {
        city: 'mangrol',
        houseno: 32,
        houseName: 'krishna'
    }
}

// let json = JSON.stringify(obj)
let json2 = JSON.parse(JSON.stringify(obj))
// console.log(json);
console.log(json2);