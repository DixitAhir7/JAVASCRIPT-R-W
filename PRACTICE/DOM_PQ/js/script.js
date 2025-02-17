let count = 0;

function increment() {
    document.getElementsByClassName("counter1").innerText = count;
    count++;
    console.log(count)
}

let count_decrement = 0;

function decrement() {
    document.getElementsByClassName("counter1").innerText = count_decrement;
    count_decrement--;
    console.log(count_decrement)
}