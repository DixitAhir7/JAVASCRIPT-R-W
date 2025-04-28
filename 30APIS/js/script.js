// async function hello() {
//     return "Hello World"
// } hello().then(alert);


// async function hello2(name) {
//     return `hello ${name}`
// }; const username = prompt('enter name: '); hello2(username).then(alert);

async function myFunction() {
    return "Hello";
};

function foo() { return Promise.resolve(1) }; let result = foo(); console.log(result);

async function _() {
    setTimeout(() => {
        console.log('hy from async');
    }, 2000);
};
_();

async function foo2() {
    return 2;
}

async function main() {
    let result2 = await foo2();
    console.log(result2);
}

main();