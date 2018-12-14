// use regex to create a set of characters that you do not want to match - called negated character sets.
// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);