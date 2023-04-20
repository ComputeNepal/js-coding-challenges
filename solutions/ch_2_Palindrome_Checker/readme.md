# Challenge 2: Palindrome Checker

Create a function that takes a string as an argument and returns `true` if it's a palindrome and `false` if it's not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For example, "racecar" is a palindrome, but "hello" is not.

## Answer Explanation

The function takes a single argument, str, which is the string to check for palindromicity. Here's what the function does:

- First, it converts the string to lowercase using the toLowerCase method. This ensures that the function will be case-insensitive when checking for palindromicity.
- Next, it removes any non-alphanumeric characters from the string using a regular expression. This step is optional, but it ensures that the function will only consider the alphanumeric characters when checking for palindromicity.
- The function then loops through the first half of the cleaned string and compares each character with the corresponding character in the second half of the string. The loop uses Math.floor(cleanStr.length / 2) to determine how many iterations are needed, since we only need to compare the first half of the string with the second half.
- If the characters at corresponding positions in the first and second halves of the string don't match, the function immediately returns false, indicating that the string is not a palindrome.
- If the function makes it through the loop without finding any non-matching characters, it returns true, indicating that the string is a palindrome.

Here's an example usage of the function:

```javascript
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
```

In this example, the function correctly identifies that "racecar" and "A man, a plan, a canal, Panama!" are palindromes, but "hello" is not.
