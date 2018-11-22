// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// this function takes 
const half = (function() {
  "use strict";

  // change code below this line
  return function half({max, min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };

})();

console.log(stats); // object
console.log(half(stats)); // 28.015