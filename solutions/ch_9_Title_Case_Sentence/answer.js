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
