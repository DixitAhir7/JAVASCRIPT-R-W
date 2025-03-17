/*
when you make fun in object and print it out the value if you did clg and it will be undefined,
but if you return it it will return a value
*/

let obj = {
    name: "dixit",
    age: 20,
    city: "Mangrol",
    country: "India",
    /*
    this keyword will work only in defined object{}
    if you have 5 object with different obj name but ,
    key names are same then you can use (this) keyword
    */

    fun: function () {
        console.log(this.age);
        return "hello"
    }
};

result = obj.fun()
console.log(result);

let car = {
    Name: "mini-cooper",
    age: "it has been around 40 years",
    city: "philipines",
    country: "america",
    fun: function () {
        console.log(this.age);
        return "byy";
    }
}

result_2 = obj.fun()
console.log(result_2);


i = 0;
while (i < 5) {
    console.log("hello", i);
    i++;
}