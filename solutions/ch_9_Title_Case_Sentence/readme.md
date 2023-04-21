# Challenge 9: Title Case a Sentence

Write a function that takes a string as input and returns the string with the first letter of each word capitalized. For example, if the input string is "the quick brown fox", the function should return "The Quick Brown Fox". Note that the function should capitalize the first letter of every word, even if it's a small word like "and" or "the".

## Answer

```javascript
function capitalizeWords(str) {
  const words = str.split(" ");

  // Loop over each word and capitalize its first letter
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0).toUpperCase();
    words[i] = firstLetter + words[i].substring(1);
  }

  // Join the capitalized words back into a single string and return it
  return words.join(" ");
}
```

## Answer Explanation

The function takes a single argument `str`, which is the string to capitalize. Here's what the function does:

- First, it splits the input string into an array of individual words using the `split()` method. The separator used is a space character, which separates each word in the string.
- The function then loops over each word in the array using a `for` loop. For each word, it extracts the first letter using the `charAt()` method and capitalizes it using the `toUpperCase()` method. It then concatenates the capitalized first letter with the rest of the word using the `substring()` method and assigns the new capitalized word back to its original position in the array.
- Once the loop is finished, the function joins the capitalized words back into a single string using the `join()` method with a space separator and returns the final result.

Here's an example usage of the function:

```javascript
console.log(capitalizeWords("the quick brown fox")); // "The Quick Brown Fox"
console.log(capitalizeWords("this is a test")); // "This Is A Test"
console.log(capitalizeWords("all lowercase words")); // "All Lowercase Words"
```

In this example, the function correctly capitalizes the first letter of each word in the input string and returns the correct result.
