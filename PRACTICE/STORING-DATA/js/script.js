const form = document.querySelector("section form");
const prName = form.querySelector("div:first-child input");
const prPrice = form.querySelector("div:nth-child(2) input");
const prDec = form.querySelector("div:nth-child(3) textarea");
const showPr = document.querySelector(".show-pr #pr-list");

function displayHtml(product) {
    showPr.innerHTML = `
        <div id="product">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.dec}</p>
        </div>
    `;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const product = {
        name: prName.value,
        price: Number(prPrice.value),
        dec: prDec.value
    };

    localStorage.setItem("product", JSON.stringify(product)); // Store only the latest product

    displayHtml(product); // Display only the latest product

    // Clear input fields
    prName.value = "";
    prPrice.value = "";
    prDec.value = "";
});

const lastProduct = JSON.parse(localStorage.getItem("product"));
if (lastProduct) {
    displayHtml(lastProduct);
}