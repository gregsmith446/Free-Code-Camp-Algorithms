// Create a function that looks through an array (first argument) and returns the FIRST ELEMENT in the array that passes a 
// truth test (second argument). If no number(element) passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;

  for (var i=0; i < arr.length; i++) {
      num = arr[i];

      if (func(num)) {
        return num;
      }
  }
        return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// basically, if the number in the array can be divided by 2 with no remainder, return that number and be done, otherwise
// no number meets the criteria set in the function, and you return undefined.

// Challenge asks us to look through array. This is done using a for loop.
// The num variable is being passed into the function, so we set it to each index in our array.
// The pre-defined function already checks each number for us, so if it is “true”, we return that num.
// If none of the numbers in the array pass the function’s test, we return undefined.

