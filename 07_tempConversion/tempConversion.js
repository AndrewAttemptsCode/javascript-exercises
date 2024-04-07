const convertToCelsius = function(temp) {
  // °C = (°F - 32) × 5/9
  let celsius = (temp - 32) * 5 / 9;
  return celsius;
};

const convertToFahrenheit = function(temp) {
};

convertToCelsius(32);
// convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
