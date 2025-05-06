async function fetchDogs() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
        credentials: 'omit'
    });

    const text = await response.text();
    if (!response.ok) {
        console.log(response.status);
    }

    try {
        const getdog = document.querySelector('button');
        let data = JSON.parse(text);
        if (data) {
            getdog.addEventListener('click', (e) => {
                e.preventDefault();
                const displayhtml = document.createElement('div');
                const imgtag = document.createElement('img');
                imgtag.src = data.message
                imgtag.style.width = '300px'
                displayhtml.innerHTML = imgtag
                document.body.appendChild(imgtag);
            })
        }
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}
fetchDogs();