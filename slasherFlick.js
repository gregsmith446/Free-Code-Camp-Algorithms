function slasher(arr, howMany) {
    // chop off number (howMany) of elements of an array starting at the 0 index (head)
    for (i = 0; i < arr.length; i++) { //loopsthruarray
        if (i < howMany) {
            console.log(arr.slice(howMany));
            return arr.slice(howMany);
        }
        else {
            return arr.slice(howMany);
        }
    }
}

slasher([1, 2, 3], 0);
