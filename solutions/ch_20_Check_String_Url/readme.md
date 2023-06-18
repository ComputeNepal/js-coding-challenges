# Challenge 20: Check String Url

Write a function that takes a url string as input and returns true if url is valid and false otherwise. For example, if the string is "https://www.example.com", the function should return true.

Write a function called `isValidURL` that takes a string url as `url` in its parameter and returns true or false.

## Answer

```javascript
// Function to check string url
function isValidURL(url) {
  // Regular expression pattern for URL validation
  const urlPattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;

  // Test if the string matches the URL pattern
  return urlPattern.test(url);
}
```

## Answer Explanation

The `isValidURL` function takes a string as input and uses a regular expression to check if it's a valid URL. The regular expression `^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$` is used to match the URL pattern.

The test method is then used to check if the input string matches the regular expression, if it's a valid URL function returns true otherwise false.
