# Challenge 8: Sum of Digits

Write a function that takes a number as input and returns the sum of its digits. For example, if the input number is 123, the function should return 6 (1 + 2 + 3 = 6).

## Answer Explanation

The function takes a single argument `num`, which is the number to sum the digits of. Here's what the function does:

- First, it initializes a variable `sum` to 0, which will hold the running total of the digit sums.
- Next, the function converts the input number to a string using the `toString()` method. This allows us to loop over its individual digits.
- The function then loops over each digit in the string using a `for` loop. For each digit, it converts the digit back to a number using `parseInt()` and adds it to the `sum` variable.
- Once the loop is finished, the function returns the final value of `sum`.

Here's an example usage of the function:

```javascript
console.log(sumDigits(123)); // 6
console.log(sumDigits(456)); // 15
console.log(sumDigits(789)); // 24
```

In this example, the function correctly sums the digits of each input number and returns the correct result.