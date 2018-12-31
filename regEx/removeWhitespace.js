// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// To solve this challenge you simply have to create a regex string that matches any spaces at the beginning or at the end of the string.

let hello = "   Hello, World!  ";

let wsRegex = /^\s+|\s+$/g;

let result = hello.replace(wsRegex, '');

console.log(result);