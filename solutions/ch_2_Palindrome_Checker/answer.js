function isPalindrome(str) {
  // Convert the string to lowercase and remove any non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Loop through the first half of the string and compare with the corresponding character in the second half
  for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      // If the characters don't match, the string is not a palindrome
      return false;
    }
  }

  // If we've made it through the loop, the string is a palindrome
  return true;
}
