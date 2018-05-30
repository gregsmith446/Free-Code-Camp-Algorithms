
function orbitalPeriod(arr) {
  var EarthGM = 398600.4418;
  var earthRadius = 6367.4447;
  var avgAlt;
  var answerArr = [];
  var answerObject = {
    name: "",
    orbitalPeriod: 0,
  };
  
  for (var i = 0; i < arr.length; i++) {
    answerObject.name = arr[i].name;
    answerObject.orbitalPeriod = arr[i].avgAlt;
    
    // MATH
    var a = (2 * Math.PI); //2PI
    var b = Math.pow(earthRadius + arr[i].avgAlt, 1.5);
    var c = (a * b);
    var d = Math.sqrt(EarthGM); //squareroot of EarthGM
    answerObject.orbitalPeriod = Math.round(c/d);
    
    answerArr.push(answerObject);
  }
  console.log(answerArr);
  return answerArr;

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// p = 2pi(avg alt + earth rad) ^1.5 / square root EarthGM
