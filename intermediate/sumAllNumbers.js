function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]); //max value //4
  var min = Math.min(arr[0], arr[1]); //min value //1
    // console.log(max);
    // console.log(min);
  var sum = 0;
 for (var i = min; i <= max; i++) {
   // sum = sum + i; //long version
   sum += i; //short version
   }
  console.log(sum);
  return (sum);
}

sumAll([1, 4]);