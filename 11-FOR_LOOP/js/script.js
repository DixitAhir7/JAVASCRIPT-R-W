arr=[10,20,22,300,90];


i=0;
for (i; i < 5; i++) {
    console.log(i,arr[i]);
};


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("*","*","*","*","*");
    }for (let j = 0; j < 5; j++) {
        console.log("*","*","*","*","*");
    }
};



let obj={
    name:"John",
    age:30,
    city:"New York",
    country:"USA"
};

console.log(Object.keys(obj));
console.log(Object.values(obj));