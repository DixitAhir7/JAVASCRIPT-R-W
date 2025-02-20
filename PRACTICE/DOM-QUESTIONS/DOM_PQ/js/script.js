let count = 0;

function increment() {
    let count_add = document.getElementsByClassName("counter1")[0];
    count_add.innerText = ++count;
}

function decrement() {
    let count_add = document.getElementsByClassName("counter1")[0];
    count_add.innerText = --count;

}

function reset() {
    count = 0;
    let count_add = document.getElementsByClassName("counter1")[0];
    count_add.innerText = count;
}