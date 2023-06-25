# Challenge 26: Convert Time from 12Hrs to 24Hrs Format

Write a function which can convert time from 12 hours format to 24 hours format.

Write a function called `convertTo24HrsFormat` which take `time` as parameter in `HH:MMAM` format. for example, `12:10AM`.

## Answer

```javascript
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
```

## Answer Explanation

Function `convertTo24HrsFormat` takes `time` as parameter and split it into two parts where first part will be `HH` and second part will be `MMAM` or `MMPM`. After that convert hours into Number data type and check condition using string `endsWith()` method. if condition and manipulate time hours and after that remove AM or PM and return time in 24Hrs format.
