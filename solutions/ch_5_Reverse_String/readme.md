# Challenge 5: Reverse a String

Write a function that takes a string as input and returns the string reversed. For example, if the input string is "hello", the function should return "olleh".

## Answer Explanation

The function takes a single argument, `str`, which is the string to be reversed. Here's what the function does:

- First, it splits the input string into an array of individual characters using the `split` method with an empty string as the delimiter.
- Next, it uses the `reverse` method to reverse the order of the characters in the array.
- The function then uses the `join` method to join the array of characters back into a single string.
- Finally, the function returns the reversed string.

Here's an example usage of the function:

```javascript
console.log(reverseString("hello")); // 'olleh'
console.log(reverseString("racecar")); // 'racecar'
```

In this example, the function correctly reverses the input strings and returns the reversed strings "olleh" and "racecar", respectively.
