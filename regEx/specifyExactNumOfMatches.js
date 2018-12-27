// To specify a certain number of patterns, just have that one number between the curly brackets.
// Sometimes you only want a specific number of matches.

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i;
let result = timRegex.test(timStr);

console.log("returns " + result + " since the input has exactly 4 'm's.")