// the + symbol makes it so that it attempts to match that letter if it occurs at least once, and may be repeated.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);

console.log(result);

// this example returns [ 'ss', 'ss' ] as 's' happens twice and and two times in each occurence