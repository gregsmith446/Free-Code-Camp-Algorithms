
function findLongestWord(str) {
  var wordSplit = str.split(" "); //returns the number of words in each sentence 
  // var wordSplit = str.split(""); returns the number of letters in a sentence
  // console.log(wordsplit);
  var maxWordLength = 0;
  
  for (var i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i].length > maxWordLength) {
      maxWordLength = wordSplit[i].length;
    }
  }
  // console.log(maxWordLength);
  return maxWordLength;
  
}
 
findLongestWord("The quick brown fox jumped over the lazy dog");