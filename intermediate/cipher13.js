function rot13(str) { // LBH QVQ VG!
    var num = 0; //starts being set at 0
    var myString = ""; //empty string
    for (var i = 0; i < str.length; i++) { //loops through str
        num = str.charCodeAt(i); //num is set to the charCodeAt(index)
        //if the charCodeAt(0,1,2,3, etc >= 65), add 13 to num
        if (num >= 65) {
            num += 13;
        } //if the charCodeAt(0,1,2,3, etc > 90), subtract 26 from the num
        if (num > 90) {
            num -= 26;
        }
        myString += String.fromCharCode(num); //take the answer and set it = to myString
    }
    console.log(myString);
    return myString; //return the answer
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");
