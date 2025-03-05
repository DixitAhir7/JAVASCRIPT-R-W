let count = [11, 5, 56, 235, 57, 68, 357]

const temp = (a, b) => { return a.grid - b.grid }


let users = [
    {
        id: 1,
        name: "aakash",
        grid: 9220
    },
    {
        id: 2,
        name: "pratham",
        grid: 9544
    },
    {
        id: 3,
        name: "dixit",
        grid: 9515
    },
    {
        id: 4,
        name: "zeel",
        grid: 8781
    },
    {
        id: 5,
        name: "priyanka",
        grid: 7999
    },
    {
        id: 6,
        name: "aayush",
        grid: 7733
    },
    {
        id: 7,
        name: "bhavesh",
        grid: 9230
    },
    {
        id: 8,
        name: "vrushita",
        grid: 9288
    },
    {
        id: 9,
        name: "het",
        grid: 9114
    },
    {
        id: 10,
        name: "poojan",
        grid: 7966
    },
    {
        id: 11,
        name: "bhavesh",
        grid: 9229
    },
]

const usersDiv = document.getElementById(".sort")
users.forEach((user) => {
    usersDiv.innerHTML += `
        <div class="col-3">
            <ul class="user">
                <li>ID : ${user.id}</li>
                <li>name : ${user.name}</li>
                <li>grid : ${user.grid}</li>
            </ul>
        </div>
    `
})


const selcet = document.querySelector("form select")
const form = document.querySelector("form")

form.onsubmit = (e) => {
    e.preventDefault()

    if (selcet.value == 0) {
        usersDiv.innerHTML = ""
        users.forEach((user) => {
            usersDiv.innerHTML += `
        <div class="col-3">
            <ul class="user">
                <li>ID : ${user.id}</li>
                <li>name : ${user.name}</li>
                <li>grid : ${user.grid}</li>
            </ul>
        </div>
    `
        })
    }
    else if (selcet.value == 1) {
        const sortedUsers = users.toSorted((a, b) => {

            // {name : priyanka}  {name: pratham}

            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            if (a.name === b.name) {
                return a.grid - b.grid
            }
            return 0
        })
        usersDiv.innerHTML = ""
        sortedUsers.forEach((user) => {
            usersDiv.innerHTML += `
        <div class="col-3">
            <ul class="user">
                <li>ID : ${user.id}</li>
                <li>name : ${user.name}</li>
                <li>grid : ${user.grid}</li>
            </ul>
        </div>
    `
        })
    } else if (selcet.value == 2) {
        const sortedUsers = users.toSorted((a, b) => { return a.grid - b.grid })
        usersDiv.innerHTML = ""
        sortedUsers.forEach((user) => {
            usersDiv.innerHTML += `
        <div class="col-3">
            <ul class="user">
                <li>ID : ${user.id}</li>
                <li>name : ${user.name}</li>
                <li>grid : ${user.grid}</li>
            </ul>
        </div>
    `
        })
    }
}
