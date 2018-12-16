// asterisk character

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

console.log(result);

// matches Aaaaaa but would not match aAAAAA as there are no flags