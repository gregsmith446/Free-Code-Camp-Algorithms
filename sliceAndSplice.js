// You are given two arrays and an index.
// We need to copy each element from the first array into the second array starting at the index n. 
// We’ve also got to ensure that the original arrays are not mutated. That is, we cannot make any changes to the original arrays.

function frankenSplice(arr1, arr2, n) {

  let copyArr = arr2.slice();
  console.log(copyArr);

  for (let i = 0; i < arr1.length; i++)
  {
      copyArr.splice(n, 0, arr1[i]);
      n++;
  }
  return copyArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, copyArr.
// Now that we have an array that we can mutate on, we can iterate through every item in the first array using a for loop. For each 
// item in the first array we use the splice() function to insert the item into index n of localArray.
// We increment the index n by one. This will ensure that every item from the arr1 is inserted into copyArr in the proper index position.
// Finally, we return the localArray to end the function.


// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// str.slice(beginIndex[, endIndex])


// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// Note: This method changes the original array.

