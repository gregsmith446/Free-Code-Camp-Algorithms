// The last challenge showed how to search for digits using the shortcut \d with a lowercase d. 
// You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
// This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; 
let result = numString.match(noNumRegex).length;

console.log("There are "+ result + " non-digits in the given movie title.");



