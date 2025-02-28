const arr = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
]

// shift will remove the first index element

// console.log(arr)

// let removingShift = arr.shift()
// console.log(removingShift)
// console.log(arr)


// // add element at 0 index
// // it will return length of array

// let addingElement = arr.unshift("before one")
// console.log(addingElement)


// slice will remove the first element
// it will return first index

// let sliceElement = arr.slice(1, 3)
// console.log(sliceElement)

// let sliceElement2 = arr.slice(1, 2)
// console.log(sliceElement2)


// it'll return 1,2 index
// it'll add elements at specified index

// const tosliceElement = arr.splice(1, 2, 'a', 'b')
// console.log(tosliceElement)
// console.log(arr)

const arr2 = [10, 20, 30, 40, 50]

// it is not in place
// original remains unchanged

const reomveWSplice = arr2.toSpliced(1, 2)

// replacing elements at index 1,2 
const reomveWSplice2 = arr2.toSpliced(1, 2, 200, 300)

const removeArr = arr2.toSpliced(arr2.length)

console.log(arr2)
console.log("removed elements:\n", reomveWSplice)
console.log("added elements:\n", reomveWSplice2)
console.log("removed elements:\n", removeArr)