// Iterate from 1 to 100
for (let i = 1; i <= 100; i++) {
  // If the number is divisible by both 3 and 5, print 'FizzBuzz'
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  // If the number is divisible by 3, print 'Fizz'
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  // If the number is divisible by 5, print 'Buzz'
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  // Otherwise, print the number itself
  else {
    console.log(i);
  }
}
