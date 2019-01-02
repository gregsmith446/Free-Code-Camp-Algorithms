// slice(), rather than modifying an array, copies/extracts a given number of elements to a new array, 
// leaving the array it is called upon untouched. slice() takes only 2 parameters — 
// (the index at which to begin extraction, the index at which to stop extraction)
// extraction will occur up to, but not including the element at this index

function forecast(arr) {
    // start at index 2, the 3rd spot and extract up to index 4, the 5th spot but not including the 5th spot.
  return arr.slice(2, 4);

}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// returns [ 'warm', 'sunny' ] as new array
// the orginal array is untouched

