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
