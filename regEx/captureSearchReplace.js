// Regular Expressions: Use Capture Groups to Search and Replace
// Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

let huhText = "This sandwich is good.";

// Write a regex so that it will search for the string "good". 
let fixRegex = /good/;

// Then update the replaceText variable to replace "good" with "okey-dokey".
let replaceText = "okey-dokey";

let result = huhText.replace(fixRegex, replaceText);

// returns "This sandwich is okey-dokey."
console.log(result);