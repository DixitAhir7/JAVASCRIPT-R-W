let user=Number(prompt("enter a number:"));

switch (user){
    case 1:console.log("sun");
    break;

    case 2:console.log("mon");
    break;

    case 3:console.log("tue");
    break;

    case 4:console.log("wed");
    break;

    case 5:console.log("thu");
    break;

    case 6:console.log("fri");
    break;

    case 7:console.log("sat");
    break;
    
    default:{
        console.log("invalid");
    }
}

let num=prompt("enter a positive num:");
num > 0 ? console.log("you r right") : num < 0 ? console.log("it's negative") : console.log("it is zero");


//telecome service

console.log("press 1 for english");
console.log("press 2 for hindi");
console.log("press 3 for gujrati");


let user_service=Number(prompt("enter your language"));


switch(user_service){
    case 1 :console.log("you choose english");

    case 2: console.log("you choose hindi");

    case 3 : console.log("you chooose gujrati");
}


let enter_choice=prompt("enter your choice");

switch(enter_choice){
    case 1:console.log("you choose internet recharge");

    case 2 : console.log("you choose call recharge");

    case 3 : console.log("you choose specail recharge");

    default:{
        console.log("you have succesfully done a recharge");
    }
}

// calculator

let A=Number(prompt("enter any number:"));
let B=Number(prompt("enter second value:"));
let c =A+B