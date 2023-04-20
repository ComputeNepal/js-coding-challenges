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
