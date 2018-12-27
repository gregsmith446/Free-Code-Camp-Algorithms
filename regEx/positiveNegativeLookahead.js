// Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along.

// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. 
// A positive lookahead is used as (?=  ) where the space is the required part that is not matched.

// A negative lookahead will look to make sure the element in the search pattern is not there. 
// A negative lookahead is used as (?!   ) where the space is the pattern that you do not want to be there. 
// The rest of the pattern is returned if the negative lookahead part is not present.


// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "bana12";
let pwRegex = /(?=\w{5})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);

console.log(result); // true if meets criteria otherwise returns nothing


// The first lookahead is only used to find a string consisting of a certain amount of characters. 
// A second lookahead is used to check for consecutive numerical values at the end of the string. (must specify the exact amount of numbers you want to appear at the end of the string).
