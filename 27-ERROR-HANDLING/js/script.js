import * as names from "./main.js";

names.name();

// try {
//     function add() {
//         let addition = 8 + 5;
//         console.log("Addition:", addition);
//         add();
//     }

//     add();
// } catch (e) {

//     // messagee will run the speicific error
//     console.log("Error caught:", e.message);
// }


try {
    let user = prompt('enter name: ');
    console.log(user);


    // will throw error
    if (!user) {
        throw new Error("can't be empty");
    }
} catch (e) {
    console.log(e);
}