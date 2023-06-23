// Function to convert 12Hrs time to 24Hrs time.
function convertTo24HrsFormat(time) {

    let timeArray = time.split(':');
    let hour = Number(timeArray[0]); // Convert hour into number from string

    if (time.endsWith('PM')) {
        // if hour is not 12 then add 12 hour.
        hour = hour !== 12 ? hour + 12 : hour;
    } else {
        // if time is AM and if hour is 12 then subtract 12 hour.
        hour = hour === 12 ? hour - 12 : hour;
    }
    time = `${hour.toString().padStart(2, 0)}:${timeArray[1].slice(0, -2)}`;

    return time;
}