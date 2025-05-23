const prname = document.querySelector('input[type="text"]');
const prprice = document.querySelector('input[type="number"]');
const image = document.querySelector('input[type="file"]');
const form = document.querySelector('form');
const select = form.querySelector('select');
const imagepreview = document.querySelector('.image-preview');
const cart = document.querySelector('.cart span');

const catogory = ['select', 'electronic', 'clothes', 'shoes'];

catogory.forEach((index, value) => {
    select.innerHTML +=
        `<option value="${index}">${value}</option>`
});

const reader = new FileReader();

image.onchange = () => {
    reader.readAsDataURL(image.files[0]);
}

reader.onload = () => {
    imagepreview.innerHTML +=
        `<img src="${reader.result}" alt="NO IMG">`

}

function addingitems() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const getdata = JSON.parse(localStorage.getItem('products')) || [];

        const obj = {
            namevalue: prname.value,
            pricevalue: prprice.value,
            selectvalue: select.value,
            imgresult: reader.result
        }
        getdata.push(obj);
        localStorage.setItem('products', JSON.stringify(getdata));
        window.location.assign('../index.html')
    })
};

addingitems();