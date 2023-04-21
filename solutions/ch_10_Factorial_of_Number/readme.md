# Challenge 10: Find the Factorial of a Number

Write a function that takes a number as input and returns its factorial. The factorial of a number is the product of all positive integers from 1 to the number itself. For example, the factorial of 5 is 120 (1 _ 2 _ 3 _ 4 _ 5 = 120).

Write a function called `factorial` that takes a number as its parameter and returns its factorial. If the input number is 0, the function should return 1.

## Answer

```javascript
function factorial(num) {
  // Handle the case where the input is 0
  if (num === 0) {
    return 1;
  }

  let result = 1;

  // Multiply all numbers from 1 to num
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}
```

## Answer Explanation

The function takes a single argument num, which is the number to calculate the factorial for. Here's what the function does:

- First, it checks if the input number is 0. If it is, it immediately returns 1 because the factorial of 0 is defined as 1.
- If the input number is not 0, the function initializes a variable `result` to 1, which is the initial value of the factorial.
- The function then loops over every integer from 1 up to and including the input number using a `for` loop. For each integer, it multiplies it by the current value of `result` and assigns the result back to `result`. This effectively calculates the factorial of the input number.
- Once the loop is finished, the function returns the final value of `result`, which is the factorial of the input number.

Here's an example usage of the function:

```javascript
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(10)); // 3628800
```

In this example, the function correctly calculates the factorial of the input number and returns the correct result.
