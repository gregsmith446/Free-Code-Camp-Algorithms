// console.log("linked");

// document.getElementById("sumDigits").onsubmit = (function(event) {
//     event.preventDefault();
//     console.log("form submitted");
// });

document.getElementById("submit").onclick = function() {
    //take the numbers from the text field and display them in our display area
    var input = document.getElementById("input").value; // .text .innerHTML .value = other ways to get HTML data //setting as a variable gives the retrieved data a place to stay
    //input will become equal to the value of input
    //console.log(input);
    document.getElementById("display").innerHTML += input; //takes the variable, puts it into our span tag, (=+) makes it so future numbers are added on (concatenate)
    document.getElementById("input").value = ""; //clear the input field 
};

document.getElementById("addDigits").onclick = function() {
    // console.log("addDigits button clicked and is working");
    // now need to get the sum of the digitsfrom the display field.
    var display = document.getElementById("display").innerHTML; //without equal sign after innerHTML, this is a "getter" as in get me the information in that element
    // console.log(display);
    //next - need to loop through the digits 1 by 1 to add them
    var runningTotal = 0; // starts at 0, but keep running total
    for (var i = 0; i < display.length; i++) {
        // console.log(i); //only show the number of digits
        console.log(display[i]); //gives us each digit in the display span
        // runningTotal = runningTotal + parseInt(display[i]); //long form
        runningTotal += parseInt(display[i]); //short form
    }
    console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;

};
