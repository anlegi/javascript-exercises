const leapYears = function(year) {
  if (year % 4 == 0) {
    if (year % 400 == 0) { // Find the right condition
      return true
   } else {
      return false
   }
   return true
  }
  return false
};

leapYears(2000)
// Do not edit below this line
module.exports = leapYears;
