// this code has an object with data called AVG_TEMPERATURES
// the function takes as input an object
// in the function, the temperature data is assigned to a variable, avgTemperatures, using the deconstructuring assignment
// when run, the function returns 79, the temp of tomorrow from the object

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79