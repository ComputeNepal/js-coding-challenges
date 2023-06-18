// Function to check string url
function isValidURL(url) {
    // Regular expression pattern for URL validation
    const urlPattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;

    // Test if the string matches the URL pattern
    return urlPattern.test(url);
}