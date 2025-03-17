arr = [10, 20, 22, 300, 90];


i = 0;
for (i; i < 5; i++) {
    console.log(i, arr[i]);
};


function starPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

starPattern(5);