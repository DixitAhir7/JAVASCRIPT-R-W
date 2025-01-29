let x=3;
console.log(x %3);
console.log(x**3);

//in post increment or decrease you'll have to print it 
//in pre you won't have to print it

console.log(x--);
console.log(x);
console.log(--x);
console.log("2"==2);
console.log(2=="4");

//swapping two variables

let a = 10;
let b = 20;

[a,b] = [b,a];
console.log(a);
console.log(b);


// finding min number

num=Number(prompt("enter a num"))
num_2=Number(prompt("enter a second num"))

if (num,num_2==0){
    console.log("please enter a number");
}else if (num>num_2){
    console.log("minimum number:",num_2);
}else if (num<num_2){
    console.log("minimum number:",num);
}else{
    console.log("goodbye");
}

//neutral number

zero=Number(prompt("enter a number:"))

if (zero==0){
    console.log("it is zero");
}else if(zero>0){
    console.log("it's postive");
}else if (zero<0){
    console.log("it's negative");
}


//checking the num is divisible by this number or not


let lg = Number(prompt("Enter a number: "));
let output = false;

if (lg % 2 === 0) {
    console.log(lg + " is divisible by 2");
    output = true;
}

if (lg % 3 === 0) {
    console.log(lg + " is divisible by 3");
    output = true;
}

if (lg % 5 === 0) {
    console.log(lg + " is divisible by 5");
    output = true;
}

if (!output) {
    console.log(lg + " is not divisible by 2, 3, or 5");
}



//telecom service provider in 3 diff language


let language = Number(prompt("1 english \n2 hindi \n3 gujrati"))

switch (language) {
    case 1: //english
        let recharge = Number(prompt("1 top-up \n2 special recharge \n3 interent recharge"))
        switch (recharge) {
            case 1: console.log("you have done recharge")

            case 2: console.log("you have done special recharge")

            case 3: console.log("you have done internet recharge")
        }
}

switch (language) {
    case 2: //english
        let recharge = Number(prompt("1 top-up \n2 special recharge \n3 interent recharge"))
        switch (recharge) {
            case 1: console.log("apne safaltapurvak recharge kiya")

            case 2: console.log("apne safaltapurvak recharge kiya")

            case 3: console.log("apne safaltapurvak recharge kiya")
        }
}


// simple calculator

let addition = Number(prompt("Enter the first number: "));
let operator = prompt("Enter an operator (+, *, /, -): ");
let addition_2 = Number(prompt("Enter the second number: "));

if (operator === "+") {
    console.log(addition + addition_2);
} else if (operator === "*") {
    console.log(addition * addition_2);
} else if (operator === "/") {
    console.log(addition / addition_2);
} else if (operator === "-") {
    console.log(addition - addition_2)
} else {
    console.log("Failed: Invalid operator");
}


switch (operator) {
    case "+": console.log(addition + addition_2);

    case "*": console.log(addition * addition_2)
}