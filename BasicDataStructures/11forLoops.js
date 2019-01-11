function filteredArray(arr, elem) {
  let newArr = [];

// loop through given array
// if the elem given is not in that sub-array, add that sub-arr to the newArr
// this means sub-arrays containing the elem are not added
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
          newArr.push(arr[i]);
        }
    }
  return newArr;
}


console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));
// filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);