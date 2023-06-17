// Function to convert decimal numbers to binary strings
function decimalToBinary(decimal) {
    let binaryString = "";  // Initialize an empty string to store the binary digits

    // Perform repeated division by 2 until the decimal number becomes 0
    while (decimal > 0) {
        // Append the remainder of division (0 or 1) to the binary string
        binaryString = (decimal % 2) + binaryString;

        // Update the decimal number by integer division (floor division) by 2
        decimal = Math.floor(decimal / 2);
    }

    // Return the binary string
    return binaryString;
}