function destroyer(arr) {
    // start with destroyer([array] arg1, arg2)
    // must convert arguments, 1 & 2 into a regular array
    // to convert arrays into arguments use this:
    var args = arr.slice.call(arguments);
    //now use a for loop to iterate through arr
    for (i = 0; i < arr.length; i++) {
        //also use a for loop to iterate through arguments
        for (j = 0; j < args.length; j++) {
            // then use an if statement to compare arr and arguments
            if (arguments[j] === arr[i]) {
                delete arr[i];
                //delete all the arr elements that match the arguements
            }
        }
    }
    return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
