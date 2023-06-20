// Function to sum array elements
function sumArray(array) {
    let sum = 0;

    // Use array forEach method
    array.forEach(element => {
        // Add element to sum
        sum += element; // sum = sum + element;
    });

    return sum;
}