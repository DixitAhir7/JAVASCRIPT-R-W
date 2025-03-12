const str = "dixit";
console.log(str.charAt(2));


// split will convert it into array
// it'll convert every first letter of word into capital letter


const str2 = "dixit ahir is from mangrol";
const toArr = str2.split(" ").map(a => {
    return a.charAt(0).toUpperCase() + a.slice(1)
}).join(" ")

console.log(toArr);


console.log(str.trim());


// both work same
console.log(str.substring(2));
console.log(str.slice(2));

// same
console.log(str.toLocaleLowerCase());
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toLocaleUpperCase());


const Str = "1"

// it will add 2 0 before the 1
console.log(Str.padStart(2, "0"));


// will repeat the string
const repeat = "repeating";
console.log(repeat.repeat(2));


console.log(repeat.replace(repeat,"replacing"));
console.log(repeat.replaceAll(repeat,"replacing it with replace all"));