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
  