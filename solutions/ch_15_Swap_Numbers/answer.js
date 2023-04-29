// Declare a function swap that takes num_1 and num_2 as parameters.
function swap(num_1,num_2){
  // At first print the numbers before swaping
    console.log("Before swapping:\n num_1 = "+num_1+"\n num_2 = "+num_2)
  // Declare a variable temp and assigns the value of num_1 and assigns num_2 in num_1 and temp in num_2
  let temp = num_1;
      num_1 = num_2;
      num_2 = temp
  // Check the result by printing the output
    console.log("After swapping:\n num_1 = "+num_1+"\n num_2 = "+num_2)
}
