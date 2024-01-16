const sumAll = function(x, y) {

  if (x < 0 || isNaN(y) || (typeof y === "string") )  {
    return 'ERROR'
  }


  if (y < x) {
    temp = x;
    x = y;
    y = temp;
  }

  let sum = 0
  for (let i = x; i <= y ; i++) {
    sum += i
  }
  return sum
};

sumAll(12, 4)

// Do not edit below this line
module.exports = sumAll;
