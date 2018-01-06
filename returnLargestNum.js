function largestOfFour(arr) {
    //answers stores the largest num from each array 1by1
    var answers = [];
    //for loop goes through array 1 array at a time
    for (i = 0; i < arr.length; i++) {
        // console.log(arr); obtains all nums in all 4 arrays
        var largestNum = arr[i][0]; //largestNum is initially = to the 1st num in each sub-array
        //for loop goes through the nums in each of the 4 sub-arrays
        for (var x = 0; x < arr[i].length; x++) { // 
            if (arr[i][x] > largestNum) {
                largestNum = arr[i][x];
                //if statement says "if the num is bigger than the one before it, set it = to the var largestNum"
            }
        }
        // console.log(largestNum); //the largest Num in each array has now been obtained.
        //last step is to set the answers 1-4 = to largestNum var
        answers[i] = largestNum;
    }
    // console.log(answers); //returns the answers 
    return answers;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
