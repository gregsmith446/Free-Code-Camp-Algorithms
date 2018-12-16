// ? is lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// Regular expressions are by default greedy, However, you can use the ? character to change the reg ex to lazy matching. 

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/;
let result = text.match(myRegex);

console.log(result); // returns [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>' ]
