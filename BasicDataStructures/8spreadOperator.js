// ES6's new spread operator allows us to easily copy all of an array's elements, in order.
// The spread syntax simply looks like this: ...

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
// returns [ [ true, false, true ], [ true, false, true ] ]
