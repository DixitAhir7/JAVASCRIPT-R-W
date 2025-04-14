const btn = document.querySelector('button');
const pTag = document.querySelector('.quote p')

const quotes = [
    "All our dreams can come true, if we have the courage to pursue them.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Dreams come true.",
    "Dream as if you'll live forever"
]


btn.addEventListener('click', function () {
    let random = Math.floor(Math.random(quotes) * quotes.length)
    pTag.textContent = `$quote 1 is ${quotes[random]}`
})