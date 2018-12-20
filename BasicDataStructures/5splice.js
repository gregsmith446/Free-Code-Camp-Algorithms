// splice() allows us to remove any number of consecutive elements from anywhere in an array.

// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements

function sumOfTen(arr) {
    arr.splice(3, 1);
    arr.splice(4, 1);
  return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2, 5, 1, 5, 2, 1]));