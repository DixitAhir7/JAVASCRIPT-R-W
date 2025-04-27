const arr = [
    "arr1",
    "arr2",
    "arr3",
    "arr4",
    "arr5",
    "arr6",
    "arr7",
]

console.log(arr.toString())
console.log(arr.join(" "))
arr.push("arr8")
console.log(arr)

// you can indexing in reverse 
console.log(arr.at(-1))

// you can only remove the last element
console.log(arr.pop())


const obj = [
    {
        Id: 1,
        Name: "Dixit",
        Home: "Mangrol",
        Email: "dixitahir0050@gmail.com"
    }
]

console.log(obj[0].Id)
console.log(obj[0].Name)
console.log(obj[0].Home)
console.log(obj[0].Email)