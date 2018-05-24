//function that takes as input 2 separate arrays and outputs the difference between the contents of arr1 and arr2 as an array

function diffArray(arr1, arr2) {
  //empty array to push different elements btwn arr1 + arr2
  var answerArr = [];  
  
  //function that compares contents of arr1 to arr2
  function onlyInFirst(one, two) {
    for (var i = 0; i < one.length; i++) {
      console.log(one[i]); // one[i] is equal to every single item in arr1
      if (two.indexOf(one[i]) === -1) { // if an item is not present (-1) in two
           answerArr.push(one[i]); //push the item not present to the answerArr
      }
    }
  }
  
onlyInFirst(arr1, arr2);
onlyInFirst(arr2, arr1);

  //this returns the array with the difference
  return answerArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //ex/ [1, 2, 3, 4], [1, 2, 3, 4, 5]
  //should return [5] as an array
