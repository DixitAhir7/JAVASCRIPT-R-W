try {
    $(document).ready(function () {
        $('.api_data p').show()
    })
} catch (e) { console.log('error during jquery loading:', e); };

async function fetchUser() {
    try {
        const response = await fetch("https://dummyjson.com/products", {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            credentials: 'same-origin',
        });
        
        const text = await response.text();
        // const text = await response.arrayBuffer();
        if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`); }

        const data = JSON.parse(text);
        if (data && data.products) {
            let output = '';
            data.products.forEach((product, index) => {
                output += `
                    <h2>Product ${index + 1}:</h2 >
                    <h3>${product.title}</h3>
                    <p>price: ${product.price}</p>
                    <p>category: ${product.category}</p>
                `
            });
            $('.api_data').html(output);
        } else { console.error('No products found in the data'); }
    } catch (error) { console.error('Fetch error:', error); }
} fetchUser();

async function addnewproduct() {
    try {
        let addProduct;
    } catch (e) { console.log(e); }
}