// Uses class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.
// getter and setter in the class can be used to obtain or change the temperature in Celsius.
// Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
// Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.
// Lesson --> Getters and setters are important, because they hide internal implementation details [Abstraction]. 
// Think API

function makeClass() {
  "use strict";
    class Thermostat {
      constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
      }
      // getter
      get temperature(){
        return 5/9 * (this.fahrenheit - 32);
      }
      // setter
      set temperature(celsius){
        this.fahrenheit = celsius * 9.0 / 5 + 32;
      }
    }
  return Thermostat;
}

// instantiate the class 
const Thermostat = makeClass();
// set the initial temp in F (constructor accepts F temp)
const thermos = new Thermostat(76); // setting in Fahrenheit scale
// get temp in C 
let temp = thermos.temperature; // 24.44 in C
// set new temp in C
thermos.temperature = 26;
// get temp in C
temp = thermos.temperature; // 26 in C