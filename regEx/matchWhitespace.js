// You can search for whitespace using \s, which is a lowercase s. 
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

console.log("There are this many spaces in the text" + result);