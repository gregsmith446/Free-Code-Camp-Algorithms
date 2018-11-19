// this code uses the deconstructing assignment to assign the max temperature variable (from inside a nested object) 
// to a variable outside the object ES6


const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
    const { tomorrow : { max : maxOfTomorrow  }} = forecast;
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6