# Challenge 21: Validate Username

Write a function that checks if a given string is a valid username. A valid username should contain only alphanumeric characters and underscores, and should be between 4 and 16 characters long.

Write a function called `isValidUsername` that takes a string `username` in its parameter and returns true or false.

## Answer

```javascript
// Function to validate username
function isValidUsername(username) {
    // Regular expression pattern for username validation
    const regex = /^[a-zA-Z0-9_]{4,16}$/;

    // Test if the string matches the username pattern
    return regex.test(username);
}
```

## Answer Explanation

The `isValidUsername` function takes a string as input and uses a regular expression to check if it's a valid username. The regular expression `^[a-zA-Z0-9_]{4,16}$` is used to match the username pattern.

The test method is then used to check if the input string matches the regular expression, if it's a valid username function returns true otherwise false.
