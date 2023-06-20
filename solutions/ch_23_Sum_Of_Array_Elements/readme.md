# Challenge 23: Sum of Array Elements

Write a JavaScript function to sum of all elements in an array.

Write a function called `sumArray` that takes `array` in its parameter and returns sum of all array elements.

## Answer 1

```javascript
// Function to sum array elements
function sumArray(array) {
  let sum = 0;

  // Run loop
  for (let i = 0; i < array.length; i++) {
    // Add array element to sum
    sum += array[i]; // sum = sum + array[i];
  }
  return sum;
}
```

## Answer 1 Explanation

The `sumArray` function takes `array` as input. Declare `sum` variable to store sum of all array elements. Run loop for each array element and add array element to `sum` and finally return `sum`.

## Answer 2 (Array forEach Method)

```javascript
// Function to sum array elements
function sumArray(array) {
  let sum = 0;

  // Use array forEach method
  array.forEach((element) => {
    // Add element to sum
    sum += element; // sum = sum + element;
  });

  return sum;
}
```

## Answer 2 Explanation

The `sumArray` function takes `array` as input. Declare `sum` variable to store sum of all array elements. Use array `forEach()` method which run it for each array element and add array element to `sum` and return `sum`.

## Answer 3 (Array Reduce Method)

```javascript
// Function to sum array elements
function sumArray(array) {
  // Use array reduce method
  return array.reduce((sum, num) => sum + num, 0);
}
```

## Answer 3 Explanation

The `sumArray` function takes `array` as input and it uses the `reduce()` method to iterate over the array and return the sum of all elements.
