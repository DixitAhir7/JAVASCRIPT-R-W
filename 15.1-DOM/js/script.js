function changing_name() {
    let a = document.getElementsByClassName("h1").innerHTMl = "hy"
    document.body.style.backgroundColor = "black"
    return a
}


let reversename = true;

function changename() {
    const h1 = document.getElementsByClassName("name")[0]

    if (reversename) {
        h1.innerHTML = '<span class="up">great</span>'

    } else {
        h1.innerHTML = '<span class="up">hello</span>'
    }
    reversename = !reversename
}