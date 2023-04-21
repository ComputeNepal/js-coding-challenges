# Challenge 4: Find the Longest Word

Write a function that takes a string and returns the longest word in the string. If there are two or more words that are of the same length, return the first one that appears in the string. For example, if the input string is "The quick brown fox jumps over the lazy dog", the function should return "quick".

## Answer

```javascript
function longestWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Initialize a variable to keep track of the longest word
  let longest = "";

  // Loop through the array of words and update the longest variable as needed
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  // Return the longest word
  return longest;
}
```

## Answer Explanation

The function takes a single argument, `str`, which is the string to search for the longest word. Here's what the function does:

- First, it splits the input string into an array of words using the `split` method with a space as the delimiter.
- Next, it initializes a variable `longest` to an empty string. This variable will be used to keep track of the longest word found so far.
- The function then loops through the array of words using a `for` loop. For each word in the array, it checks if the length of the word is greater than the length of the current `longest` word. If it is, it updates the `longest` variable to be the current word.
- Finally, the function returns the `longest` variable, which contains the longest word found in the input string.

Here's an example usage of the function:

```javascript
console.log(longestWord("The quick brown fox jumps over the lazy dog")); // 'quick'
console.log(longestWord("This is a test string")); // 'string'
```

In this example, the function correctly identifies "quick" as the longest word in the first input string and "string" as the longest word in the second input string.
