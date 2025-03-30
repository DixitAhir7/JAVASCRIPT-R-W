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
    {
        id: 12,
        name: "devang",
        grid: 9493
    },
    {
        id: 13,
        name: "shradda",
        grid: 9332
    }
]

const usersDiv = document.getElementById("sortUser")
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
const search = document.querySelector("#search")

form.onsubmit = (e) => {
    e.preventDefault()

    const searchValue = search.value.toLowerCase().trim()

    // duplicate array
    let usersFilter = [...users];

    if (searchValue) {

        usersFilter = users.filter(
            function (obj) {
                const finalSearch = String(obj.grid).startsWith(searchValue) || String(obj.id).startsWith(searchValue) || obj.name.startsWith(searchValue)
                return finalSearch
            }
        )
    }

    if (selcet.value == 0) {
        usersDiv.innerHTML = ""
        usersFilter.forEach((user) => {

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
        const sortedUsers = usersFilter.toSorted((a, b) => {

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
        const sortedUsers = usersFilter.toSorted((a, b) => { return a.grid - b.grid })
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