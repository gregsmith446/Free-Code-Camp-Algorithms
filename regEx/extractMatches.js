// code tests string "extractStr" for the word "coding" and extracts it into the variable "result"
// Thus when console logging result we get the word "coding" instead of true or false like earlier regex examples.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result);