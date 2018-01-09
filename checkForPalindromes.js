
function palindrome(str) {
  // Good luck!
  var removeChar = str.replace(/[\W_]/g, '').toLowerCase();
  var strReverse = removeChar.split('').reverse().join('');
      if(strReverse === removeChar){
        return true;
      } else {
        return false;
      }
      
      
    }




palindrome("eye");