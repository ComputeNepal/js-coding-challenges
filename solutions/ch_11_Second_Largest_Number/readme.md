# Challenge 11: Find the Second Largest Number

Write a function that takes an array of numbers as input and returns the second largest number in the array. For example, if the input array is [5, 10, 7, 2, 1], the function should return 7.

Write a function called `secondLargest` that takes an array of numbers as its parameter and returns the second largest number in the array.

## Answer

```javascript
function secondLargest(arr) {
  let largest = arr[0]; // initialize largest variable with first element of the array
  let secondLargest = arr[0]; // initialize secondLargest variable with first element of the array

  // iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // if current element is greater than the largest, update both largest and secondLargest
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    // if current element is not greater than largest, but is greater than secondLargest, update secondLargest
    else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest; // return the second largest element in the array
}
```

## Answer Explanation

The function first initializes two variables `largest` and `secondLargest` with the first element of the array. It then iterates through the rest of the array and updates these variables as necessary.

If the current element is greater than the `largest` variable, it updates both `largest` and `secondLargest`. If the current element is not greater than `largest`, but is greater than `secondLargest`, it updates only `secondLargest`.

Finally, the function returns the `secondLargest` variable, which should contain the second largest number in the array.

For example:

```javascript
console.log(secondLargest([5, 10, 7, 2, 1])); // Output: 7
console.log(secondLargest([20, 10, 30, 40, 50])); // Output: 40
console.log(secondLargest([-10, -5, -20, -30, 0])); // Output: -5
```

In the first example, the input array is [5, 10, 7, 2, 1], and the function returns the second largest number, which is 7.

In the second example, the input array is [20, 10, 30, 40, 50], and the function returns the second largest number, which is 40.

In the third example, the input array is [-10, -5, -20, -30, 0], and the function returns the second largest number, which is -5.
