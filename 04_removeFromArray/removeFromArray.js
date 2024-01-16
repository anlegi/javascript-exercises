const removeFromArray = function(array, ...nums) {
  let responseArray = []
  for (let i = 0; i < array.length; i++){
    if (!nums.includes(array[i])){
      responseArray.push(array[i])
    }
  }
  return responseArray
};

// Do not edit below this line
module.exports = removeFromArray;
