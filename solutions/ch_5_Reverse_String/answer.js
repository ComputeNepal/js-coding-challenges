function reverseString(str) {
  // Split the string into an array of characters
  const chars = str.split("");

  // Reverse the array of characters
  const reversed = chars.reverse();

  // Join the array of characters back into a string
  const result = reversed.join("");

  // Return the reversed string
  return result;
}
