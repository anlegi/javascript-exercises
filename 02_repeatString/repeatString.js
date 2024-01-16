const repeatString = function(string, num) {
  let repeatedString = "";
  do {
    if (num === 0) {
      return ""
    } else if (num < 0) {
      return "ERROR"
    } else {
      repeatedString += string
      num--;
    }
  } while (num > 0);
  return repeatedString;
}

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
