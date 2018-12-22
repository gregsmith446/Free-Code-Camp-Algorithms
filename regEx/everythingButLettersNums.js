// A natural pattern you might want to search for is the opposite of alphanumerics.
// You can search for the opposite of the \w with \W. This shortcut is the same as [^A-Za-z0-9_].

// Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let result = quoteSample.match(nonAlphabetRegex).length;

console.log("There are " + result + " non-alphanumeric characters in the provided string.");

