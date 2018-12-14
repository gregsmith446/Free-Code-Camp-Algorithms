//match both letters and number ranges using regex + the global and case insensitive flag

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig;
let result = quoteSample.match(myRegex);

console.log(result);