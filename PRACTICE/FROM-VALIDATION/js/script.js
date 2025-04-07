const input = document.querySelector('input[type="text"]');
const ps = document.querySelector('input[type="password"]');
const form = document.querySelector('form');
const submit = form.querySelector('input[type="submit"]');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let obj = {
        inputval: input.value,
        psval: ps.value
    }

    localStorage.setItem('userInfo', JSON.stringify(obj))

    if (!obj.inputval && !obj.psval) {
        alert('Please enter username and password');
    } else {
        console.log(obj.inputval, obj.psval);
    }    

})