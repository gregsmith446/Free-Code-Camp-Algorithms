// code uses reg ex to extract the multiple matches from the test string, twinkleStar, using the "g" and "i" flags.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex);
console.log(result);