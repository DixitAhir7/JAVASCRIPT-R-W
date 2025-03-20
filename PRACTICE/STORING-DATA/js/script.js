const form = document.querySelector("section form");
const prName = form.querySelector("div:first-child input");
const pr_img = form.querySelector("div:nth-child(2) input");
const prPrice = form.querySelector("div:nth-child(3) input");
const prDec = form.querySelector("div:nth-child(4) textarea");
const showPr = document.querySelector(".show-pr #pr-list");

// Display image
const prImg = form.querySelector(".show-pr .show-img");

const ITEM = "products";
const products = JSON.parse(localStorage.getItem(ITEM)) || [];

function displayHtml(product) {
    showPr.innerHTML = "";
    showPr.innerHTML = `
        <div id="product">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <div class="product-img">
                <img src="${product.img}">
            </div>
            <p>${product.dec}</p>
        </div>
    `;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputImg = pr_img.files[0];

    if (!inputImg) {
        alert("Please select an image");
        return;
    }

    const product = {
        name: prName.value,
        price: Number(prPrice.value),
        dec: prDec.value
    };

    const file = new FileReader();
    file.readAsDataURL(inputImg);

    file.onload = () => {
        product["img"] = file.result;

        products.push(product);
        localStorage.setItem(ITEM, JSON.stringify(products));

        displayHtml(product);
    };

    prName.value = "";
    prPrice.value = "";
    prDec.value = "";
    pr_img.value = "";
});

const lastProducts = JSON.parse(localStorage.getItem(ITEM));
if (lastProducts && lastProducts.length > 0) {
    displayHtml(lastProducts[lastProducts.length - 1]);
}