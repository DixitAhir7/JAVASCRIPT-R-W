const arr1 = [
    11, 32, 4, 2, 0, 2, 78, 65
]

console.log(arr1)
const sortingArr = arr1.sort((a, b) => a - b)

console.log("sorted array:", sortingArr)

const age = [
    20, 23, 18, 17, 20, 25, 20
]

const sortingAge = age.sort()
console.log("sorted age in array:", sortingAge)

const reverse = [
    -1, 7, 89, 32, 54, 44
]

console.log("original array:", reverse)
const reversingArr = reverse.reverse(reverse)
console.log("reversed arr:", reversingArr)

const sortArr2 = [
    -1, 7, 89, 32, 54, 44
]

console.log("original array:", sortArr2)
const sortingArr2 = sortArr2.sort((a, b) => a - b)
console.log("sorted array:", sortingArr2)