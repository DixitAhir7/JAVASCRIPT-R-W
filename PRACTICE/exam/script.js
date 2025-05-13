const displaydata = document.querySelector('.showdata .row');
const getdata = JSON.parse(localStorage.getItem('products')) || [];

function displayproducts(getdata) {
    getdata.forEach((product, index) => {
        displaydata.innerHTML += `
        <div id="displayproducts">
            <h2>${product.namevalue}</h2>
            <p>${product.pricevalue}</p>
            <p>${product.selectvalue}</p>
            <img src="${product.imgresult}"> 
        </div>
    `
    });
};

displayproducts(getdata);