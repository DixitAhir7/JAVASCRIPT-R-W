$(document).ready(function () {
    $('.sidebar').click(function (e) {
        e.preventDefault();
        $('aside').toggleClass('active');
    });
})