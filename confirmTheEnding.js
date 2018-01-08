function confirmEnding(str, target) {
    var end = target.substring(target.length - target.length);
    // console.log(end); //returns the full target string
    var endOfString = str.substring(str.length - target.length);
    // console.log(endOfString); returns the str but only as many characters as there are in the target arguement starting at the end of the str

    if (end === endOfString) {
        return true;
    }
    else {
        return false;
    }
}

confirmEnding("Bastian", "n");

//pseudo

// Use substr() to get the last Nth characters.
// To do that, use length() and turn Nth into a negative number.

// return true if the end of the first arguement (str) 
// is equal (===) to the second arguement, (target)
// else, return false
