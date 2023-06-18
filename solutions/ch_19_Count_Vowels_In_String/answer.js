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