// create a variable equal to the string "FreeCodeCamp"
// fccRegex uses regex to specify that we want the following line to return "true"
// if freecodecamp matches regardless of case

let myString = "freeCodeCamp";

let fccRegex = /frEEcodEcAmP/i;

let result = fccRegex.test(myString);

console.log(result); // returns true no matter what the case of the letters

