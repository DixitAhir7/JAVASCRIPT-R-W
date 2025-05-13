const prname = document.querySelector('input[type="text"]');
const prprice = document.querySelector('input[type="number"]');
const image = document.querySelector('input[type="file"]');
const form = document.querySelector('form');
const select = form.querySelector('select');
const imagepreview = document.querySelector('.image-preview');

const catogory = ['select', 'electronic', 'games', 'shoes', 'clothes', 'construction'];

catogory.forEach((name, index) => {
    select.innerHTML +=
        `<option value="${name}" id="${index}">${name}</option>`
});

const reader = new FileReader();

image.onchange = () => {
    reader.readAsDataURL(image.files[0]);
    reader.onload = () => {
        imagepreview.innerHTML +=
            `<img src="${String(reader.result)}" alt="${image.src}">`
    }
}


function addingitems() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const getdata = JSON.parse(localStorage.getItem('products')) || [];

        const obj = {
            namevalue: prname.value,
            pricevalue: prprice.value,
            selectvalue: select,
            imgresult: reader.result
        }
        getdata.push(obj);
        localStorage.setItem('products', JSON.stringify(getdata));
        window.location.assign('../index.html')
    })
};

addingitems();