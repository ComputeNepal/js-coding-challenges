# Challenge 12: Find the Smallest Common Multiple

Write a function that takes two numbers as input and returns the smallest common multiple of those numbers. The smallest common multiple is the smallest number that is divisible by both of the input numbers. For example, the smallest common multiple of 3 and 4 is 12.

Write a function called `smallestCommonMultiple` that takes two numbers as its parameters and returns the smallest common multiple of those numbers.

## Answer

```javascript
function smallestCommonMultiple(num1, num2) {
  // Find the larger and smaller numbers
  const larger = Math.max(num1, num2);
  const smaller = Math.min(num1, num2);

  // Start with the larger number and check if it's divisible by the smaller number
  let current = larger;
  while (current % smaller !== 0) {
    current += larger;
  }

  return current;
}
```

## Answer Explanation

The function takes two arguments num1 and num2, which are the numbers to find the smallest common multiple for. Here's what the function does:

- First, it finds the larger and smaller numbers by using the `Math.max` and `Math.min` functions.
- The function then initializes a variable `current` to the value of the larger number. It then loops while `current` is not divisible by the smaller number. Inside the loop, it adds the value of the larger number to `current`. When the loop exits, `current` will be the smallest number that is divisible by both `num1` and `num2`.
- Finally, the function returns the value of `current`.

Here's an example usage of the function:

```javascript
console.log(smallestCommonMultiple(3, 4)); // 12
console.log(smallestCommonMultiple(6, 9)); // 18
console.log(smallestCommonMultiple(5, 7)); // 35
```

In this example, the function correctly calculates the smallest common multiple of the input numbers and returns the correct result.
