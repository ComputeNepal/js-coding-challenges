# Challenge 22: Check Leap Year

Write a function that checks if a given year is a leap year.

Write a function called `isLeapYear` that takes `year` in its parameter and returns true or false.

## Answer

```javascript
// Function to check leap year
function isLeapYear(year) {
  // Gregorian calendar rule to check leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }

  return false;
}
```

## Answer Explanation

The `isLeapYear` function takes `year` as input and check condition for leap year. if condition is satisfied returns true otherwise false.
