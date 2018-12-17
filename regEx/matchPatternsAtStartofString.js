// In an earlier challenge, you used the caret character (^) INSIDE a character set to create a negated character set 
// in the form [^thingsThatWillNotBeMatched]
// Outside of a character set however, the caret, ^ is used to search for patterns at the beginning of strings.
// example: /^magic/

// Challenge
// Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";

let calRegex = /^Cal/;

let result = calRegex.test(rickyAndCal);

console.log(result);

// returns True as the string does begin with Cal
// testing for Ricki would retun false as Ricki is in the string but not at the start.