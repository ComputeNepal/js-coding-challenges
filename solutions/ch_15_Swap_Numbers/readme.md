## Challenge 15: Swap two numbers
Write a function that takes two numbers as input and swaps the numbers. For example if inputs are num_1 = 5 and num_2 = 10 the function should return num_1 = 10 and num_2 = 5

## Answer

```javascript
function swap(num_1,num_2){
    console.log("Before swapping:\n num_1 = "+num_1+"\n num_2="+num_2)
  var temp = num_1;
      num_1 = num_2;
      num_2 = temp
    console.log("After swapping:\n num_1 = "+num_1+"\n num_2="+num_2)
}
```

## Answer Explanation 

This function takes `num_1` and `num_2` and swaps their values. At first, the value of `num_1` is assigned to a variable `temp` then the value of `num_2` is assigned to `num_1`. Finally the value of `temp` assigned to `num_2`. The values are swapped.

Here's an example of usage of the function:
```javascript
swap(5,10)
/* 
Before swapping:
num_1 = 5
num_2=10
After swapping:
num_1 = 10
num_2=5 
*/ 
```
