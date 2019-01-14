// Object properties can be nested to an arbitrary depth, and their values can be any type of data supported by JavaScript, 
// including arrays and even other objects. 

// Set the value of the online key to 45.

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);
