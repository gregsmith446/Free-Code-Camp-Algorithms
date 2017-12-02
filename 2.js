function factorialize(num) {
  var factorial = num;
  if(num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

