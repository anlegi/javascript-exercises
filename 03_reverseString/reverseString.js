const reverseString = function(text) {
  splitText = text.split("");
  let reversedResult = "";
  for (let i = splitText.length - 1; i >= 0; i--) {
    reversedResult += splitText[i]
  }
  return reversedResult
};


// Do not edit below this line
module.exports = reverseString;
