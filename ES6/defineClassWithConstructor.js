// define the Vegetable object using ES6 class syntax.

function makeClass() {
  "use strict";
    class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => will be 'carrot'