const convertToCelsius = function(temp) {
  // °C = (°F - 32) × 5/9
  let celsius = (temp - 32) * 5 / 9;
  let roundCelcius = Math.round(celsius * 10) / 10
  return roundCelcius;
};

const convertToFahrenheit = function(temp) {
};

convertToCelsius(100);
// convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
