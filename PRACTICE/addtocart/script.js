const displaydata = document.querySelector('.display-data');
const getdata = JSON.parse(localStorage.getItem('products')) || [];
const displayimg = document.querySelector('.image-preview');

const catogory = ['select', 'electronic', 'clothes', 'shoes'];
catogory.forEach((index, value) => {
    select.innerHTML +=
        `<option value="${value}">${index}</option>`
});

function displayproducts(getdata) {
    displaydata.style.display = 'block';
    getdata.forEach((product) => {
        displaydata.innerHTML = `
        <div id="displayproducts">
            <h2>${product.namevalue}</h2>
            <p>${product.pricevalue}</p>
            <p>${product.selectvalue}</p>
        </div>
    `
        displayimg.innerHTML =
            `
     <img src="${product.imgresult}">   
    `
    });
};

displayproducts(getdata);