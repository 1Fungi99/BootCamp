var sum = function(numOne, numTwo) {
  return numOne + numTwo;
};

var subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

var addCallBacks = function(functionOne, functionTwo) {
  return functionOne(6, 2) + functionTwo(6, 3);
};

// What does this return?
addCallBacks(sum, subtract);
