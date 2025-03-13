// ... this is called rest operator

function sum(...arr) {
    return arr.reduce((acc, cur) => acc + cur)
}

console.log(sum(10, 20, 30, 40, 50));


const obj = { name: "dixit", age: 20 }
console.log(obj);

// this is called spread operator which is copying the obj
console.log({ ...obj });

const object = { occupation: "student", teacher: "jaymin sir", where: "RW" }
console.log(Object.keys(object));
console.log(Object.values(object));


// return array by group of object
console.log(Object.entries(object));