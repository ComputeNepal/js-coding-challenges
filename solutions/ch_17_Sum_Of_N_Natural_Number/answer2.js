// Function that calculates the sum of n natural number.
function getNaturalSum(n) {
    // Using ternary operator (?:)
    return n <= 1 ? n : n + getNaturalSum(n - 1);
}