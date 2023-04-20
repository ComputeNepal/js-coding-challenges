function capitalizeWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
    
    // Initialize an empty array to store the capitalized words
    const capitalized = [];
    
    // Loop through the array of words and capitalize the first letter of each one
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalized.push(capitalizedWord);
    }
    
    // Join the array of capitalized words back into a single string
    const result = capitalized.join(' ');
    
    // Return the string with capitalized words
    return result;
  }
  