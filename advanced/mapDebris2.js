
function orbitalPeriod(arr) {
  var EarthGM = 398600.4418;
  var earthRadius = 6367.4447;
  var name;
  var avgAlt;
  var answerArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    name = arr[i].name;
    avgAlt = arr[i].avgAlt;
    
    // MATH
    var a = (2 * Math.PI); //2PI
    var b = Math.pow(earthRadius + arr[i].avgAlt, 1.5);
    var c = (a * b);
    var d = Math.sqrt(EarthGM); //squareroot of EarthGM
    var OP = Math.round(c/d);
    
    answerArr.push(name, OP);
  }
  console.log(answerArr);
  return answerArr;

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// p = 2pi(avg alt + earth rad) ^1.5 / square root EarthGM
