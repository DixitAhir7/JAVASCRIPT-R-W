let x=3;
console.log(x*3);
console.log(x/3);
console.log(x %3);
console.log(x**3);

//in post increment or decrease you'll have to print it 
//in pre you won't have to print it

console.log(x--);
console.log(x);
console.log(--x);
console.log(2==3);
console.log("2"==2);
console.log(2=="4");
console.log(2==="2");
console.log(2!=3);
console.log(2===2);
console.log(3>=3);
console.log(3<=3);
console.log(6>=3);
console.log(34<=44);

//swapping two variables

let a = 10;
let b = 20;

[a,b] = [b,a];
console.log(a);
console.log(b);

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