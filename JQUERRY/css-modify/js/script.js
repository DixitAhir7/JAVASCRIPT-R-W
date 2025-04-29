// it's for changing the text into exsisting text
$(document).ready(function () {
    $('button').click(function () {
        let askuser = prompt('add new text');
        if (!askuser) alert('add something'); else { $('#p').html(askuser) }
    });

    $('input[type="submit"]').click(function(){
        let input = $('input[type="text"]').val();
        console.log(input);
    })
    
    // append and prepend 
    $('button').click(function () {
        $('.div').append('<p>new p tag added by jquerry</p>')
    })

    $('button').click(function () {
        $('.div').prepend('<p>new p tag added by jquerry</p>')
    })
});