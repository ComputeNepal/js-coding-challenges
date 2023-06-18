// Function to check leap year
function isLeapYear(year) {
    // Gregorian calendar rule to check leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }

    return false;
}

