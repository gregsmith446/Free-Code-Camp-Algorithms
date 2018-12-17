// A group of criminals escaped from jail and ran away, but you don't know how many. 
//However, you do know that they stay close together when they are around other people. 
// You are responsible for finding all of the criminals at once.

// Write a greedy regex that finds one or more criminals within a group of other people. 
// A criminal is represented by the capital letter C.




// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);

// returns [ 'CCC', index: 12, input: 'P1P2P3P4P5P6CCCP7P8P9' ]
// CCC are the 3 criminals together
console.log(matchedCriminals);