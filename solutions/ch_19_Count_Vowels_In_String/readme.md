# Challenge 19: Count Vowels in a String

Write a function that takes a string as input and returns number of vowels in string. For example, if the string is "Hello World!", the function should return 3.

Write a function called `countVowels` that takes a string as `str` in its parameter and returns number of vowels in string.

## Answer

```javascript
// Function to count vowels in the string
function countVowels(str) {

    str = str.toLowerCase(); // Convert string to lower case

    const vowels = ['a', 'e', 'i', 'o', 'u']; // List of vowels
    let count = 0; // Declare variable to count number of vowels

    for (let i = 0; i < str.length; i++) {
        // Checking if vowels include the character at str[i]
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count; // Return the total number of vowels
}
```

## Answer Explanation

In the `countVowels` function, first convert `str` string to lowercase. Declare `count` variable to store number of vowels in `str` and declare `vowels` array of vowels and run a loop for every character in `str`. Inside the loop check if str[index] contains vowels character if yes increase count variable by one. After the loop finished return `count`, total number of vowels.
