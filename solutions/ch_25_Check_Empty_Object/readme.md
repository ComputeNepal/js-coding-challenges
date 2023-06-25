# Challenge 25: Check Empty Object

Write a function to check if an object is empty or not.

Write a function called `isObjEmpty` that takes an object `obj` as arguments will return true if it is empty otherwise false.

## Answer

```javascript
// Function to check whether an object is empty or not
function isObjEmpty(obj) {
  return Object.keys(obj).length === 0;
}
```

## Answer Explanation

Here is a function called `isObjEmpty` that takes an object as arguments and checking the length of `obj` keys using object `keys()` method and it will return true if length is zero otherwise false.

