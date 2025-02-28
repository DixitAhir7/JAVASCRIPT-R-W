const timeOut = setTimeout(function () {
    console.log("function called");
}, 1000);

/*
setInterval will run infinite time,
if you don't specify clearInterval
*/

const interval = setInterval(function () {
    console.log("this is interval")
    clearInterval(interval);
}, 1000);

console.log("this is program for checking the timeout function");

// this code will run after 5 sec
let timeoutId = setTimeout(() => {
    console.log("This will not run");
}, 5000);

// but now it won't run because of the cleartimeout
clearTimeout(timeoutId)


let count = 0;
let timeout = setInterval(function () {
    if (count == 2) {
        console.log("this is interval code")
        clearInterval(timeout)
        console.log("completed task")
    }
    count++;
}, 2000);