# Challenge 17: Calculate the Factorial of a Number.

Write a function that takes a number as input and returns sum from 1 to `n`. For example, if the input is 10, the function should return 55.

Write a function called `getNaturalSum` that takes a number `n` as its parameter and returns sum of natural number.

## Answer 1

```javascript
// Function that calculates the sum of n natural number.
function getNaturalSum(n) {
  let sum = 0; // Declare a sum variable to store the sum

  // Running loop from 1 to n
  for (let i = 1; i <= n; i++) {
    // Adding the sum by i
    sum += i; // sum = sum + i;
  }

  return sum; // Return the sum
}
```

## Answer 1 Explanation

In the `getNaturalSum` function, declare `sum` variable to store the sum and initializing with 0 and then running a loop from 1 to `n` and adding the `sum` with all the numbers from 1 to `num`. After finishing the loop return the `sum`.

## Answer 2 using Recursion

```javascript
// Function that calculates the sum of n natural number.
function getNaturalSum(n) {
    // Using ternary operator (?:)
    return n <= 1 ? n : n + getNaturalSum(n - 1);
}
```

## Answer 2 Explanation

In the `getNaturalSum` function, checking value of `n` if `n` is more than 1 then adding `n` and return value of `getNaturalSum` with less than 1 `n` value. if value is less than or equal to 1 then it will return n, that value, and recursive function will return sum.

Here is example how recursive function calculate factorial of 5:

```JavaScript
function getFactorial(num) {
return 5 + getFactorial(4);
            4 + getFactorial(3);
                3 + getFactorial(2);
                    2 + getFactorial(1);
                        return 1;
}
```
