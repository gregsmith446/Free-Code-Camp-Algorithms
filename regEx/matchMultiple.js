//  You can search for multiple patterns using the alternation or OR operator: |.

let petString = "James has a pet cat.";

// reads as dog, cat, bird, or fish
let petRegex = /dog|cat|bird|fish/;

let result = petRegex.test(petString);

console.log(result); // true because cat is in there, meeting the criteria.
// all it takes it once of those string to match