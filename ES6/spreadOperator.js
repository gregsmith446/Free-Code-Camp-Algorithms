// this code copies the contents of arr1 into arr2 using the spread operator, then prints the result to the console.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();

console.log(arr2);