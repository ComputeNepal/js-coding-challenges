# Challenge 6: Capitalize the First Letter of Each Word

Write a function that takes a string as input and returns the string with the first letter of each word capitalized. For example, if the input string is "the quick brown fox", the function should return "The Quick Brown Fox".

## Answer

```javascript
function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Initialize an empty array to store the capitalized words
  const capitalized = [];

  // Loop through the array of words and capitalize the first letter of each one
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized.push(capitalizedWord);
  }

  // Join the array of capitalized words back into a single string
  const result = capitalized.join(" ");

  // Return the string with capitalized words
  return result;
}
```

## Answer Explanation

The function takes a single argument, `str`, which is the string to capitalize. Here's what the function does:

- First, it splits the input string into an array of individual words using the `split` method with a space as the delimiter.
- Next, it initializes an empty array `capitalized` to store the capitalized words.
- The function then loops through the array of words using a `for` loop. For each word in the array, it capitalizes the first letter of the word using the `toUpperCase` method and the slice method to extract the rest of the word. It then pushes the capitalized word to the `capitalized` array.
- Finally, the function uses the join method to `join` the array of capitalized words back into a single string, separated by spaces.

Here's an example usage of the function:

```javascript
console.log(capitalizeWords("the quick brown fox")); // 'The Quick Brown Fox'
console.log(capitalizeWords("hello world")); // 'Hello World'
```

In this example, the function correctly capitalizes the first letter of each word in the input strings and returns the capitalized strings "The Quick Brown Fox" and "Hello World", respectively.
