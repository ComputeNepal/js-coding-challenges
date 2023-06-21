// Function to find longest word in sentence
function findLongestWord(sentence) {
    // Split sentence words into array of words
    const words = sentence.split(' ');

    let longestWord = '';

    // Run for of loop
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
