// code uses ES6 template literals to create string from object or arrays

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";

const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, 
`<li class="text-warning">${arr[1]}</li>` ,`<li class="text-warning">${arr[2]}</li>`];

  return resultDisplayArray;
}

// calls the makeList function with the parameter being the array result.failure
const resultDisplayArray = makeList(result.failure);