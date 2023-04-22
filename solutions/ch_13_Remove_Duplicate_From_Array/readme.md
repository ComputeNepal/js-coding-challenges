# Challenge 13: Remove Duplicates from an Array
Write a function that takes an array as input and returns a new array with all duplicate elements removed. For example, if the input array is [1, 2, 2, 3, 4, 4, 5], the function should return [1, 2, 3, 4, 5].

Write a function called `removeDuplicates` that takes an array as its parameter and returns a new array with all duplicate elements removed.

## Answer

```javascript
function removeDuplicates(arr) {
  // Create a new array to store the unique elements
  let uniqueArr = [];
  
  // Loop through the input array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not in the unique array, add it
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  
  // Return the unique array
  return uniqueArr;
}
```

## Answer Explanation

The function takes an array `arr` as input and creates a new array `uniqueArr` to store the unique elements. It then loops through the input array and checks if the current element is already in the `uniqueArr`. If it is not, the current element is added to the `uniqueArr`. Finally, the function returns the `uniqueArr`.

Here's an example usage of the function.

```javascript
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
```
In this example, the `removeDuplicates` function correctly removes the duplicates from the input array and returns a new array with only the unique elements.
