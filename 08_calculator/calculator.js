const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(a) {
  let sum = 0
  a.forEach((value) => sum += value)
  return sum
};

const multiply = function(a) {
let multiplication = 1
 a.forEach((value) => multiplication *= value)
 return multiplication
};

const power = function(a, b) {
  return a**b
};

const factorial = function(a) {

  if (a === 0 || a === 1)
    return 1

  let solution = 1
  for (let i = a; i > 0; i--) {
    solution *= i
  }
  return solution
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
