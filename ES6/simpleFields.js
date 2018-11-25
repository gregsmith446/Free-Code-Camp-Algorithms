// defining object literals

// code takes in 3 parameters and the return statement uses ES6 to assign them to vars without repetitive notation

const createPerson = (name, age, gender) => {
  "use strict";

  return {
    name,
    age,
    gender
  };

};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

// old return statement

//   return {
//     name: name,
//     age: age,
//     gender: gender
//   };