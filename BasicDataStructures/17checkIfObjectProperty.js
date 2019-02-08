// how can we check if an object has a specific property? 
// JavaScript provides us with two different ways to do this. 
// the hasOwnProperty() method and the other uses the 'in' keyword.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

// Finish writing this function so that it returns true only if the users object contains all four names
// Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

function isEveryoneHere(obj) {
  if (users.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan'))
  {
    return true;
  }
  else 
  {
    return false;
  }
}

console.log(isEveryoneHere(users));