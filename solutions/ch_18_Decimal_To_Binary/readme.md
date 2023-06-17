# Challenge 18: Convert Decimal to Binary.

Write a function that takes a decimal number as input and returns binary string. For example, if the input is 12, the function should return 1100.

Write a function called `decimalToBinary` that takes a decimal number as `decimal` in its parameter and returns binary string.

## Answer 1

```javascript
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
```

## Answer 1 Explanation

In the `decimalToBinary` function, declare `binaryString` variable to store the binary string with empty string and then running a while loop until decimal is greater than one. Inside loop adding remainder in `binaryString` and dividing `decimal` itself by 2. After finishing the loop return `binaryString`.

## Answer 2 using toString()

```javascript
function decimalToBinary(decimal) {
    // Convert the decimal number to a binary string using the toString() method
    let binaryString = decimal.toString(2);

    // Return the binary string
    return binaryString;
}
```

## Answer 2 Explanation

`decimalToBinary` the built-in `toString()` method with a base argument of 2. This method directly converts the decimal number to a binary string.