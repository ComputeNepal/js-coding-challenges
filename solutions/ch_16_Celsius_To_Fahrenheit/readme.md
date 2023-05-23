# Challenge 16: Convert Celsius to Fahrenheit

Write a function that takes a temperature in Celsius as input and returns the equivalent temperature in Fahrenheit. The formula for converting Celsius to Fahrenheit is F = (C \* 1.8) + 32.

Write a function called `celsiusToFahrenheit` that takes a temperature in Celsius as its parameter and returns the equivalent temperature in Fahrenheit.

## Answer

```javascript
function celsiusToFahrenheit(celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
```

## Answer Explanation

The function takes a temperature `celsius` in Celsius as its parameter. It then applies the conversion formula `(C * 1.8) + 32` to calculate the equivalent temperature in Fahrenheit. Finally, it returns the Fahrenheit temperature.

Here's an example usage of the function:

```javascript
const temperatureCelsius = 25;
const temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(temperatureFahrenheit); // Output: 77
```

In this example, the `celsiusToFahrenheit` function correctly converts the temperature from Celsius to Fahrenheit, with an input of 25 degrees Celsius resulting in 77 degrees Fahrenheit.
