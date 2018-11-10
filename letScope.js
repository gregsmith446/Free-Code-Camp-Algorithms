// This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. 

function checkScope() {
"use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();