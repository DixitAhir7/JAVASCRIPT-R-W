// block scope
{
    var Name="hello"
    let age=20
    console.log(Name);
    console.log(age);
    const name="world"
    console.log(name);
}


// function scope
function sum(a,b){
    console.log(a+b);
}

sum(10,20)