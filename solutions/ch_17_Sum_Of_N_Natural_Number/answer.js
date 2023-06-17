// Function that calculates the sum of n natural number.
function getNaturalSum(n) {
    let sum = 0;   // Declare a sum variable to store the sum

    // Running loop from 1 to n
    for (let i = 1; i <= n; i++) {
        // Adding the sum by i 
        sum += i;  // sum = sum + i;   
    }
    
    return sum; // Return the sum
}