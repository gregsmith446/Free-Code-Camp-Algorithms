// JavaScript provides us with a built-in method, indexOf(), 
// that allows us to quickly and easily check for the presence of an element on an array. 
// when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

// Modify the function quickCheck using indexOf() 
// so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
    
// if indexOf() returns a value greater than 0, the element exists in the array    
if (arr.indexOf(elem) >= 0)
{
  return true;
}
  return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));