## Challenge 15: Swap two numbers
Write a function that takes two numbers as input and swaps the numbers. For example if inputs are num_1 = 5 and num_2 = 10 the function should return num_1 = 10 and num_2 = 5

## Answer 1

```javascript
function swap(num_1,num_2){
    console.log("Before swapping:\n num_1 = "+num_1+"\n num_2="+num_2)
  var temp = num_1;
      num_1 = num_2;
      num_2 = temp
    console.log("After swapping:\n num_1 = "+num_1+"\n num_2="+num_2)
}
```

## Answer 2

```javascript
// Declare a function swap that takes num_1 and num_2 as parameters.
function swap(num_1, num_2) {
  // At first print the numbers before swaping
  console.log("Before swapping:\n num_1 = " + num_1 + "\n num_2 = " + num_2);
  num_1 = num_1 + num_2;
  num_2 = num_1 - num_2;
  num_1 = num_1 - num_2;
  // Check the result by printing the output
  console.log("After swapping:\n num_1 = " + num_1 + "\n num_2 = " + num_2);
}
```

## Answer Explanation 
### Answer 1
This function takes `num_1` and `num_2` and swaps their values. At first, the value of `num_1` is assigned to a variable `temp` then the value of `num_2` is assigned to `num_1`. Finally the value of `temp` assigned to `num_2`. The values are swapped.

Here's an example of usage of the function:
```javascript
swap(5,10)
/* 
Before swapping:
num_1 = 5
num_2 = 10
After swapping:
num_1 = 10
num_2 = 5 
*/ 
```
### Answer 2
In this case the swap function takes same number of arguments ie `num_1` & `num_2`. But instead of assigning their values to a third temporary variable,
basic maths is used.

```javascript
swap(30,20)
/*
Then num_1 =30, num_2=20.

num_1 = 30 + 20 = 50
num_2 = 50 - 20 = 30
num_1 = 50 - 30 = 20

We'll get num_1 as 20 and num_2 as 30.
*/
```
