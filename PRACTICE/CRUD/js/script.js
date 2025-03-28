const form = document.querySelector('form');
const productName = form.querySelector('.pName input');
const productPrice = form.querySelector('.pPrice input');
const productDescription = form.querySelector('.pDes textarea');
const submit = form.querySelector('form input[type="submit"]');
const reset = form.querySelector('form input[type="reset"]');
const show = document.querySelector('.display .show-html');
const btn = document.querySelector('#btn');

// Load products from localStorage when page loads
document.addEventListener('DOMContentLoaded', () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.forEach(product => displayProduct(product));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputName = productName.value.trim();
    let inputPrice = productPrice.value.trim();
    let inputDescription = productDescription.value.trim();

    if (!inputName || !inputPrice || !inputDescription) {
        alert("Please fill all fields!");
        return;
    }

    let product = {
        name: inputName,
        price: inputPrice,
        description: inputDescription
    };

    // Get existing products from localStorage
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(storedProducts));

    displayProduct(product);
    form.reset();
});

// Function to display a product
function displayProduct(product) {
    show.innerHTML += `
        <div class="entry">
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
        </div>
    `;
}

// Delete all products from localStorage
btn.addEventListener('click', () => {
    localStorage.removeItem('products');
    show.innerHTML = ""; // Clear the display
});
