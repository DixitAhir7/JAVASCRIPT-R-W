const obj = [
    {
        id: 1,
        Name: "dixit",
        Home: "Mangrol",
        Email: "dixitahir0050@gmil.com"
    },

    {
        id: 2,
        Name: "heet",
        Home: "Mangrol",
        Email: "heetbamrotiya@gmil.com"
    },

    {
        id: 3,
        Name: "abhi",
        Home: "Mangrol",
        Email: "abhi@gmil.com"
    },

    {
        id: 4,
        Name: "sarman",
        Home: "Mangrol",
        Email: "sarman@gmil.com"
    }
]

obj.forEach(function (item) {
    const a = document.querySelector("section div").innerHTML =
        `
    <div>
        <ul class="c1">
            <li>${item.id}</li>
            <li>${item.Name}</li>
            <li>${item.Email}</li>
            <li>${item.Home}</li>
        </ul>
    </div>
    `
});

