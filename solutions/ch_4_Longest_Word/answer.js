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
