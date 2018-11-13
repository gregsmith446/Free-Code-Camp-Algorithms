// an example of using the let keyword

let catName;
let quote;

function catTalk() {
    // enables Strict Mode, which catches common coding mistakes and "unsafe" actions
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}

catTalk();