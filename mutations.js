function mutation(arr) {
    //convert both strings in given array to lowercase
    var stringOne = arr[1].toLowerCase();
    var stringTwo = arr[0].toLowerCase();
    //loop through str1.  if the letters in str1 are not present in str2, return false aka (-1)
    for (i = 0; i < stringOne.length; i++) { // i = 0,1,2, etc
        if (stringTwo.indexOf(stringOne[i]) === -1)
            return false;
    } // if the letters are present in str1, return true
    return true;
}

mutation(["hello", "hey"]);

// if 1st string in the array does not contain all the letters of the 2nd string in the array
//return false
//else true
//indexOf is caseSensitive

//example use of indexOf
// var a = [2, 9, 9];
// a.indexOf(2); // 0 
// a.indexOf(7); // -1

// if (a.indexOf(7) === -1) {
//   // element doesn't exist in array
// }