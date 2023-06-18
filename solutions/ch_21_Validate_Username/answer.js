// Function to validate username
function isValidUsername(username) {
    // Regular expression pattern for username validation
    const regex = /^[a-zA-Z0-9_]{4,16}$/;

    // Test if the string matches the username pattern
    return regex.test(username);
}