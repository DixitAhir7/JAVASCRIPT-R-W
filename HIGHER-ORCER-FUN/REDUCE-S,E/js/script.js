// some array-method
// this will return true even if only one value is satisfying the conditon

const arr = [12, 5, 43, 33, 23, 0]
const some = arr.some(function (a) {
    return a % 2 == 0
})
console.log(some);

// every array-method
// this will return true if and only if every value is satisfying the conditon

const every = arr.every(function (a) {
    return a % 2 == 0
})
console.log(every);

// reduce method

const numbers = [175, 50, 25, 100];
const reducing = numbers.reduce((total, num) => {
    return total - num;
})

console.log(reducing);


