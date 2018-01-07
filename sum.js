// SUM OF ALL NUMBERS - FCC
// given an array with 2 nums [num, num]
// the numbers in the array need to be added   
// as well as the numbers between them
// example: [1, 2] = 3
// example: [1, 4] = 1 + 2 + 3 + 4 = 10
// largest number doesn't always come first
// example: [4, 1] = 4 + 3 + 2 + 1 = 10


// STEP 1 - math.max() // find the  the max value of the 2 numbers assings to var [check]
// STEP 2 - math.min() // finds the minimum value of the 2 numbers assigns to var [check]
function sumAll(arr) { // a function called sumAll that takes an array as an argument
    var max = Math.max(arr[0], arr[1]); //finds the max value in the given array
    var min = Math.min(arr[0], arr[1]); //find the min value in the given array
    // console.log(max);
    // console.log(min);
    // STEP 3 - for loop // add all the numbers in between [check]
    var sum = 0; //creates a variable where the sum of the numbers in the array can be stored
    for (var i = min; i <= max; i++) { // starts with the lowest num in the array and goes up 1 at a time to the highest number
        // sum = sum + i; //long version
        sum += i; //short version --> sum of the numbers in the array is = to the current sum plus the next number, then repeat until done
    }
    // console.log(sum);
    return (sum); //returns the sum of all the numbers in the given array
}

sumAll([1, 4]);
