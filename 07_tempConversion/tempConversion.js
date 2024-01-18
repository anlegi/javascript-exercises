const convertToCelsius = function(x) {
  let celsius = (x - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10
};

const convertToFahrenheit = function(x) {
  let fahreinheit = x * (9 / 5) + 32;
  return Math.round(fahreinheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
