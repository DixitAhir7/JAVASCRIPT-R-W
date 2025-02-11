function test(){
    let x=3;
    console.log(x %3);
    console.log(x**3);
}

test()

//in post increment or decrease you'll have to print it 
//in pre you won't have to print it

console.log(x--);
console.log(x);
console.log(--x);
console.log("2"==2);
console.log(2=="4");

//swapping two variables
function swap(){
    let a = 10;
    let b = 20;
    
    [a,b] = [b,a];
    console.log(a);
    console.log(b);
}

swap()

// finding min number
function min_number(){
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
}

min_number()


//neutral number
function neutral_number(){
    zero=Number(prompt("enter a number:"))

    if (zero==0){
        console.log("it is zero");
    }else if(zero>0){
        console.log("it's postive");
    }else if (zero<0){
        console.log("it's negative");
    }
}

neutral_number()

//checking the num is divisible by this number or not

function divisible(){
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
}

divisible()


//telecom service provider in 3 diff language

function language(){
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
}

language()


// simple calculator
function calculator(){
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
}


function user(){
    let user=Number(prompt("enter a number"));

    if (user%2==0){
        console.log("welcome!");
    }else{
        console.log("goodbye");
    }
}

user()

function student(){
    let student=prompt("enter your marks to get your grade!");
    if (student>=90 && student>85) {
        console.log("congats you got A");
    }else if (student<=84 && student>=75){
        console.log("you got b grade");
    }else if (student<74 && student>=60){
        console.log("you got c");
    }else{
        console.log("sorry you are failed");
    }
}

student()

// finding large number


function find_large(){
    let user_again=Number(prompt("enter a number: "))
    let user_2=Number(prompt("enter a second number: "))
    let user_3=Number(prompt("enter a third number: "))
    
    
    if (user_again>user_2){
        console.log(`"it is a largest number:${user_again}"`);
        if (user_2>user_again){
            console.log(`"it is a largest number:${user_2}"`);
        }else if(user_again==user_2){
            console.log("the numbers you entered are all same!");
        }else if (user_again==user_3){
            console.log("the numbers you entered are all same!");
        }else if (user_2==user_3){
            console.log("the numbers you entered are all same!");
        }
    }else if(user_3>user_2){
        console.log(`"it is a largest number${user_3}"`);
    }else if (user_2>user_3){
        console.log(`"it is a largest number${user_2}"`);
    }else{
        console.log("program failed");
    }
}

find_large()

function arr(){
    arr=[12,45,53,78,97]

for (let con = 0; con < 10; con++) {
    console.log(con, "is a number");
}
}

arr()


// printing 1 to 10

function one_ten(){
    let a_ = 1;

    for (a_ = 1; a < 11; a_++) {
        console.log(a_)
    };
    
    for (let i=10; i > 0; i--) {
        console.log(i)
    };
}

one_ten()


function odd(){
    let odd=Number(prompt("enter a number: "));

    for (let i=1; i<odd; i+=2) {
        console.log(i)
    };
}

odd()

function even(){
    let even=Number(prompt("enter any number: "));

    for (let i=0; i<even; i+=2) {
        console.log(i)
    };
}

even()

// multiplication table


function multiplication_table(){
    first=Number(prompt("enter a number: "));

    for (let i=1; i<11; i++) {
        console.log(`${first} * ${i} = ${first*i}`)
    }
}

multiplication_table()

function star(){
    let star=prompt("enter number of star: ");
    let star_2=""
    
    
    for(let i=1; i<=star; i++){
        for(let j=1; j<=i; j++){
            star_2+="*"
        }
        star_2+="\n"
    }
    
    console.log(star_2);
}

multiplication_table()


// fibonocci series
// o and 1 is default num in fibonocci series
// 0+1=1
// 1+1=2
// 2+1=3
// 3+2=5
// 5+3=8
// 8+5=13


function fibonacci(){
    let num=Number(prompt("enter a number: "));
    let a=0;
    let b=1;
    for (let i=0; i<num; i++) {
        console.log(a);
        let temp=a;
        a=b;
        b=temp+b;
        
    }
}

fibonacci()