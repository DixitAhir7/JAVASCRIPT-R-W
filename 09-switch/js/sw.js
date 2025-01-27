// let user=Number(prompt("enter a number:"));

// switch (user){
//     case 1:console.log("sun");
//     break;

//     case 2:console.log("mon");
//     break;

//     case 3:console.log("tue");
//     break;

//     case 4:console.log("wed");
//     break;

//     case 5:console.log("thu");
//     break;

//     case 6:console.log("fri");
//     break;

//     case 7:console.log("sat");
//     break;
    
//     default:{
//         console.log("invalid");
//     }
// }

// let num=prompt("enter a positive num:");
// num > 0 ? console.log("you r right") : num < 0 ? console.log("it's negative") : console.log("it is zero");


//telecome service


function telecoe_service(){
    let lang, service;
    console.log("1 english");
    console.log("2 hindi");
    console.log("3 gujrati");
    lang = Number(prompt("enter ur language:"));



switch(lang){
    case 1 :
        console.log("top-up");
        console.log("special");
        console.log("net pack");
        service = Number(prompt("enter your service:"));
        switch(service){
            case 1 :console.log("you have done recharge");
            break;

            case 2:console.log("you have done recharge");
            break;

            case 3 :console.log("you have done recharge");
        }   
    ;
    case 2 :
        console.log("top-up");
        console.log("special");
        console.log("net pack");
        service = Number(prompt("enter your service:"));
        switch(service){
            case 1 :console.log("safaltapurav recharge");
            break;

            case 2:console.log("safaltapurav recharge");
            break;

            case 3 :console.log("safaltapurav recharge");
        }   
    ;
    case 3 :
        console.log("top-up");
        console.log("special");
        console.log("net pack");
        service = Number(prompt("enter your service:"));
        switch(service){
            case 1 :console.log("thay gayu");
            break;

            case 2:console.log("thay gayu");
            break;

            case 3 :console.log("thay gayu");
        }   
    ;
    
}



}
    telecoe_service();

// // calculator

// let A=Number(prompt("enter any number:"));
// let B=Number(prompt("enter second value:"));
// let c =A+B