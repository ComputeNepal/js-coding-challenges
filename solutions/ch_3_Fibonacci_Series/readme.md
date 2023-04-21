# Challenge 3: Fibonacci Series

Write a function that takes a number `n` as input and returns the first `n` numbers in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers. The first two numbers in the sequence are 0 and 1. For example, if `n` is 5, the function should return the array` [0, 1, 1, 2, 3]`.

## Answer

```javascript
function fibonacci(n) {
  // Create an array to store the Fibonacci sequence
  const fib = [0, 1];

  // Generate the next number in the sequence by adding the two previous numbers
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  // Return the first n numbers in the sequence
  return fib.slice(0, n);
}
```

## Answer Explanation

The function takes a single argument,` n`, which is the number of Fibonacci numbers to generate. Here's what the function does:

- First, it creates an array fib with the first two numbers in the Fibonacci sequence: 0 and 1.
- Next, it uses a for loop to generate the next n numbers in the sequence. For each iteration of the loop, the function calculates the next number in the sequence by adding the two previous numbers together. The result is stored in the fib array.
- Finally, the function uses the slice method to return an array containing the first n numbers in the sequence.

Here's an example usage of the function:

```javascript
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

In this example, the function correctly generates the first 5 and 10 numbers in the Fibonacci sequence, respectively.
