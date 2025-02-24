function getText() {
    let gettingText = document.querySelector("section .input input").value
    document.getElementById("demo").innerHTML = "you wrote:" + gettingText
}

// onblur means you leave the field then it'll be uppercase
// it is useful in form validation

function blurEvent() {
    input.value = input.value.toUpperCase()
}

let input = document.getElementById("blur-event")
input.onblur = blurEvent;