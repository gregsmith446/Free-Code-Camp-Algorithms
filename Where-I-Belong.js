function getIndexToIns(arr, num) {
    //sort the numbers in the array with a comparison 
    arr.sort(function(a, b) {
        return a - b;
    });

    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
            //When an item on the array is greater than the number we are comparing against, then we return the index as an integer.
        }
    }
    return arr.length;
    //if not, we return the length of the array, as that number is bigger than all the other numbers in the array
}

getIndexToIns([10, 20, 30, 40, 50], 35);
