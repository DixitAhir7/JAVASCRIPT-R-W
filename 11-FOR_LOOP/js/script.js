// arr=[10,20,22,300,90];


// i=0;
// for (i; i < 5; i++) {
//     console.log(i,arr[i]);
// };


// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log("*","*","*","*","*");
//     }for (let j = 0; j < 5; j++) {
//         console.log("*","*","*","*","*");
//     }
// };


/*
when you make fun in object and print it out the value if you did clg and it will be undefined,
but if you return it it will return a value
*/  


let obj={
    name:"dixit",
    age:20,
    city:"Mangrol",
    country:"India",
    /*
    this keyword will work only in defined object{}
    if you have 5 object with different obj name but ,
    key names are same then you can use (this) keyword
    */ 
   
    fun:function(){
        console.log(this.age);
        return "hello"
    }
};

result=obj.fun()
console.log(result);

i=0;
while(i<5){
    console.log("hello",i);
    i++;
}