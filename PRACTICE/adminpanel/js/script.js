// $(document).ready(function () {
//     $('.sidebar').click(function (e) {
//         e.preventDefault();
//         $('.sidebar').toggleClass('active');
//     });
// })

const sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('click', (e) => { e.preventDefault(); sidebar.classList.toggle('active') })