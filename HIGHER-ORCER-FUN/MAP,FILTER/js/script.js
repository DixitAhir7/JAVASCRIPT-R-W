const arr = [98, 54, 65, 43, 3, 23];


// filter will return only true value
const arrSort = arr.filter((fill) => {
    if (fill == 98 || fill == 3) {
        return true
    }
    return false
})

console.log(arrSort);


const arr2 = [98, 54, 65, 43, 3, 23];


// filter will return only true value
const arrSort2 = arr2.filter((fill2) => {
    if (fill2) {
        return false
    }

    return true
})

console.log(arrSort2);

const arr3 = [10, 43, 56, 43, 33, 22, 11, 0];

// it creates duplicate array
const duplicate = [...arr3]
console.log(duplicate);


const arr4 = [76, 54, 6.5, 54, 2]

const mappingArr = arr4.map(a => {
    if (a != arr4) {
        return a
    }
    else {
        return false
    }
})

console.log(mappingArr);