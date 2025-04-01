import * as names from "./main.js";

names.name();

try {
    function add() {
        let addition = 8 + 5;
        console.log("Addition:", addition);
        add();
    }

    add();
} catch (e) {

    // messagee will run the speicific error
    console.log("Error caught:", e.message);
}