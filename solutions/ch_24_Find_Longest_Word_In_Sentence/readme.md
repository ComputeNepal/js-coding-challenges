# Challenge 24: Find Longest Word in Sentence

Write a function to find the longest word in a sentence.

Write a function called `findLongestWord` that takes string as argument `sentence` of type string and return longest word in sentence.

## Answer

```javascript
// Function to find longest word in sentence
function findLongestWord(sentence) {
  // Split sentence words into array of words
  const words = sentence.split(" ");

  let longestWord = "";

  // Run for of loop
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
```

## Answer Explanation

The function `findLongestWord` takes string as argument and convert all words of `sentence` in array of word using `split()` method and array of word called `words`. After that using for of loop for each word checking condition if any word's length is more than current `longestWord's` length assign that word in `longestWord`.
