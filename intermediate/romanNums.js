//function that takes as input a num and outputs the num in Roman Numerals

function convertToRoman(num) {
  //all possible nums
  var romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // numeral equivalants to Roman Nums
  var numEquivs = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

  var answer = '';

  // loop through the number milestones, starting at 0 until 13
  for (var index = 0; index < numEquivs.length; index++) {
    // while the index is <= length of our num equivs
    while (numEquivs[index] <= num) {
      // take the current answer, add the roman Num at the given index, set = to answer
      answer = answer + romanNum[index];
      // take the supplied num, subtract the amt of the roman Num just added to answer
      num = num - numEquivs[index];
      // now repeat process until supplied num=0, then the answer will be all romanNums
    }
  }
  // return romanNum conversion for given num
  return answer;

}

//calls the function with a 2 for example
convertToRoman(2);
