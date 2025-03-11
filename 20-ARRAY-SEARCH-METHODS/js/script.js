const arr = [19, 46, 23, 43, 55, 46, 46];


// in this you can pass only one argument 
const indexof = arr.indexOf(46)
console.log('index founded:', indexof);


// last index will return from last 
const lastindex = arr.lastIndexOf(46)
console.log('last index of:', lastindex);

// will return boolean value if it includes it


console.log(arr.includes(19))



// will return first true value of the condition
const find = arr.find((a) => {
    return a % 2 == 0
})

console.log('finded value:', find);

const findIndex = arr.findIndex((a) => {
    return a == 55
})

console.log('founded index:', findIndex);

const minValue = [0, 20, 11, 34, 56, 10, 0];
const min = Math.min.apply(null, minValue);

console.log('minimum value:', min);
const max = Math.max.apply(null, minValue);

console.log('maximum value:', max); 