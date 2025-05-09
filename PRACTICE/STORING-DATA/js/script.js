// getting all the nessecary html 

const form = document.querySelector('section form');
const prname = form.querySelector('div:nth-child(1) input#pName');
const prImg = form.querySelector('div:nth-child(2) input#img')
const prprice = form.querySelector('div:nth-child(3) input#pPrice');
const prdescription = form.querySelector('div:nth-child(4) textarea#Pdec');
const prSubmit = form.querySelector('[type="submit"]');
const prUpdate = form.querySelector('[type="button"]');
const prList = document.querySelector('.show-pr #pr-list')

// storing data in local storage
const ITEMKEY = 'product'
const data = JSON.parse(localStorage.getItem(ITEMKEY)) || [];


// showing in display
function displayHtml(data) {
    prList.innerHTML = "";

    // this will take data from localstroage
    data.forEach((product, index) => {
        prList.innerHTML += `
                        <div class="product"> 
                            <div class="producst-img">
                                <img src="${product.img}">
                            </div>
                            <h3>${product.name}</h3>
                            <p>${product.price}</p>
                            <p>${product.description}</p>
                            <a class="product-delete" href="javascript:void()" onclick="deleteData(${index})">delete</a>
                            <a class="product-update" href="javascript:void()" onclick="update(${index})">update</a>
                        </div>
            `;
    });
};

// when submit data will display
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputName = prname.value;
    let inputPrice = prprice.value;
    let inputdec = prdescription.value;
    let inputImg = prImg.files[0]

    const product = {
        name: inputName,
        price: Number(inputPrice),
        description: inputdec,
    }


    // filereader is api for images and files

    const reader = new FileReader();
    reader.readAsDataURL(inputImg);

    // without onload event it won't work

    reader.onload = () => {
        product['img'] = reader.result

        // adding the image to object and then storing it again in localstorage
        data.push(product);
        localStorage.setItem(ITEMKEY, JSON.stringify(data));
        displayHtml(data);
    }

    prname.value = ""
    prprice.value = ""
    prdescription.value = ""
})



prUpdate.onclick = (e) => {
    e.preventDefault()

    let inputName = prname.value;
    let inputPrice = prprice.value;
    let inputdec = prdescription.value;
    let inputImg = prImg.files[0]
}

function update(userindex) {
    const products = JSON.parse(localStorage.getItem(ITEMKEY)) || []
    const product = products.find((product, index) => {
        return index === userindex
    })

    prname.value = product.name
    prprice.value = product.price
    prdescription.value = product.description
    prImg.value = product.img
    setbase64(product.img, prImg)
    console.log(prUpdate);
    console.log(prSubmit);
    prUpdate.style.display = "block"
    prSubmit.style.display = "none"
}

function deleteData(index) {
    const products = JSON.parse(localStorage.getItem(ITEMKEY))
    products.splice(index, 1)
    localStorage.setItem(ITEMKEY, JSON.stringify(products))
    displayHtml(products)
}

displayHtml(data)