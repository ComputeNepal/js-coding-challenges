# Challenge 7: Check for Prime Numbers

Write a function that takes a number as input and returns `true` if it's a prime number and `false` if it's not. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. For example, 2, 3, 5, 7, 11, and 13 are prime numbers, but 4, 6, 8, and 9 are not.

## Answer

```javascript
function isPrime(num) {
  // Check if the number is less than 2, in which case it's not prime
  if (num < 2) {
    return false;
  }

  // Loop through all numbers from 2 up to the square root of the input number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // If the input number is evenly divisible by any number in this range, it's not prime
    if (num % i === 0) {
      return false;
    }
  }

  // If the function hasn't returned yet, the input number is prime
  return true;
}
```

## Answer Explanation

The function takes a single argument `num`, which is the number to check for primality. Here's what the function does:

- First, it checks whether the input number is less than 2, which is the smallest prime number. If it is, the function immediately returns `false`.
- Next, the function loops through all numbers from 2 up to the square root of the input number. This is because any factors of the input number that are larger than its square root must have a corresponding factor that is smaller than its square root, so we only need to check up to the square root.
- For each number in the loop, the function checks whether the input number is evenly divisible by that number. If it is, the function immediately returns `false`, since the input number is not prime.
- If the loop completes without finding any factors of the input number, the function returns `true`, indicating that the input number is prime.

Here's an example usage of the function:

```javascript
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(7)); // true
```

In this example, the function correctly identifies the prime numbers 2, 3, 5, and 7 as prime, and the non-prime numbers 4 and 6 as non-prime.
