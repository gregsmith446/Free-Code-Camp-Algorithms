// regEx examples
// Regular expressions are used in programming languages to match parts of strings. 
// You create patterns to help you do that matching.

// Example 1
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
// returns True

// Example 2
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
// returns false

