# Challenge 14: Find the Maximum Subarray Sum (Kadane's Algorithm)
Write a function that takes an array as input and returns the  Maximum subarray sum. Subarrays are arrays inside another array which only contains contiguous elements.  For example, if the array is [-3, -4, 5, -1, 2, -4, 6, -1], the function should return 8 since  subarray [5, -1, 2, -4, 6] is the max sum contiguous subarray with sum 8.

Write a function `MaxSubArraySum` that takes an array as its parameter and returns the maximum subarray sum. 

## Answer

```javascript
function MaxSubArraySum(arr)
{
    var max = Number.MIN_VALUE
    var temp_max = 0
      
    for (var i = 0; i < arr.length; i++)
    {
        temp_max = temp_max + arr[i]
        if (max < temp_max)
            max = temp_max
 
        if (temp_max < 0)
            temp_max = 0
    }
    return max
}
```

## Answer Explanation

The function takes an array `arr` as input and returns the maximum subarray sum .First we assign a `max` variable and set it to Number.Minimum Value and then we take a temporary variable `temp_max` .Then we loop over the array and assign the value of `max` only when the `temp_max` value is greater than `max` value.In the last phase of loop , we check if the value of  temp_max is less than zero and if it is ,then we change the value of `temp_num` to zero.
Finally we return the max value to get the Maximum Subarray Sum.

Here's an example usage of the function.

```javascript
const arr = [-2, 3, -1, 2];
const max = MaxSubArraySum(arr);
console.log(max); // Output: 4
```
In this example, the `MaxSubArraySum` function correctly returns the Maximum SubArray Sum of the array. 
