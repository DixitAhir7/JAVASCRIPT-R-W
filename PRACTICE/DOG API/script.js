async function fetchDogs() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {
        method: 'GET'
    });

    const text = await response.json();
    if (!response.ok) {
        console.log(response.status);
    }

    try {
        const getdog = document.querySelector('button');
        let data = text
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
    } catch (error) { console.error('Error loading api:', error); }
}
fetchDogs();