const rating = [
    {
        ir: 9.0,
        movie: "the godfather 2",
        img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6319_p_v8_bc.jpg"
    },
    {
        ir: 8.4,
        movie: "avengers endgame",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw6QTsDE3d6-qOL5xMa4-JDdBNTa3uspCrg&s"
    },
    {
        ir: 9.2,
        movie: "the godfather",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWU4BB_TIirPXQyr6BJpNkh0aYJ3HuhOxlg&s"
    },
    {
        ir: 8.7,
        movie: "intersteller",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX74qpR4Wbwf2LiYlXSokhaxJwa827tj6WFQ&s"
    },
    {
        ir: 9.0,
        movie: "the dark knight",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ekE6Hhz9gvIbiFSUPxt-FyAh4zXTXX0bjQ&s"
    },
    {
        ir: 9.3,
        movie: "the shawshank redemption",
        img: "https://musicart.xboxlive.com/7/e0ee5100-0000-0000-0000-000000000002/504/image.jpg"
    },

]


// const getoriginal = document.querySelector("select");
// const getoriginal2 = document.querySelector(".sortinglist");

// // display in html
// rating.forEach(element2 => {

//     getoriginal2.innerHTML +=
//         `<ul>
//         <li>${element2.ir}</li>
//         <li>${element2.movie}</li>
//         <li><img src="${element2.img}" alt=""></li>
//     </ul>
//     `
// });


const getSelect = document.querySelector("select");
const getSelect2 = document.querySelector(".sort");
const submit = document.querySelector("submit");

// sorting
sortedRating = rating.toSorted((a, b) => {
    return b.ir - a.ir
})

// display in html
sortedRating.forEach(element => {

    getSelect2.innerHTML +=
        `<ul>
        <li>${element.ir}</li>
        <li>${element.movie}</li>
        <li><img src="${element.img}" alt=""></li>
    </ul>
    `
});