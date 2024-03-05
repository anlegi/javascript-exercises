const palindromes = function (string) {

  let arr = string.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s/g, '').split("")
  console.log(arr)
  if (arr.length % 2 == 0) {
    for (let i = 0; i < arr.length; i++) {
      // console.log(i, arr[i], arr[arr.length - 1 - i], !(arr[i] === arr[arr.length - 1 - i]))
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false
      }
    }
  }
  else {
    for (let i = 0; i < (arr.length - 1) / 2; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]){
        return false
      }
    }
  }
  return true
};

// Do not edit below this line
module.exports = palindromes;
