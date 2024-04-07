const convertToCelsius = function(temp) {
  // °C = (°F - 32) × 5/9
  let celsius = (temp - 32) * 5 / 9;
  let roundCelcius = Math.round(celsius * 10) / 10
  return roundCelcius;
};

const convertToFahrenheit = function(temp) {
  // °F = (9/5 × °C) + 32
  let fahrenheit = (9 / 5 * temp) + 32;
  let roundFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundFahrenheit;
};

convertToCelsius(-100);
convertToFahrenheit(73.2);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
