// capture groups is a way to specify when you have multiple repeat substrings in your string.

// You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. 
// To specify where that repeat string will appear, you use a backslash (\) and then a number. 
// This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

let repeatNum = "42 42 42";

//  in simple terms, this uses capture groups to match numbers that are repeated only three times in a string, each separated by a space.

let reRegex =  /^(\d+)\s\1\s\1$/;

let result = reRegex.test(repeatNum);

console.log(result); // returns true or false

