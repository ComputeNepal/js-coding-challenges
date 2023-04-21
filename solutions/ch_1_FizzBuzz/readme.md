# Challenge 1: FizzBuzz

Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". For example, your program should print:

```javascript
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
...
```

## Answer

```javascript
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
```

## Answer Explanation

In short, the program loops over the numbers from 1 to 100, and for each number, it checks if it is divisible by 3, 5, or both. If it is divisible by 3, it prints 'Fizz', if it is divisible by 5, it prints 'Buzz', and if it is divisible by both 3 and 5, it prints 'FizzBuzz'. If it is not divisible by either 3 or 5, it simply prints the number itself.
