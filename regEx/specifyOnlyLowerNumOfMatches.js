// Sometimes you only want to specify the lower number of patterns with no upper limit.
// To only specify the lower number of patterns, keep the first number followed by a comma.

// Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's

let haStr = "Hazzzzah";
let haRegex = /haz{3,}zah/i; // Change this line
let result = haRegex.test(haStr);

console.log("Question: Did the string meet the given criteria?  " + "Answer: " + result);