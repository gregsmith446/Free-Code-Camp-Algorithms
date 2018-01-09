function bouncer(arr) {
    return arr.filter(function(val) { // use the filter method to create nameless function that will run an if statement
        if (Boolean(val)) { // if there is a boolean value of false, aka a falsy value
            return val; // return only true values
        }
    });
}

bouncer([7, "ate", "", false, 9]);

// ALL of these are false values: false, null, 0, "", undefined, and NaN.
// the function above says, if any of the values in the given array are a false value, 
// return only the true values or in other words, remove the falsys from the array.
