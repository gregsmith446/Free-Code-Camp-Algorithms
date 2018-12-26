// You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.
// Search for non-whitespace using \S, which is an uppercase s. 
// This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. 

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

console.log("There are this many non-whitespaces in the text " + result);