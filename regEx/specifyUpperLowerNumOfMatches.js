// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i;
let result = ohRegex.test(ohStr);

console.log(result); // returns true because the string has 3-6 "h"s after an "o", ignoring case.
// the \s tells the regEx to include white spaces, followed by "no"