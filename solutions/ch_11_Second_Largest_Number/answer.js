function secondLargest(arr) {
  let largest = arr[0]; // initialize largest variable with first element of the array
  let secondLargest = arr[0]; // initialize secondLargest variable with first element of the array

  // iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // if current element is greater than the largest, update both largest and secondLargest
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
    // if current element is not greater than largest, but is greater than secondLargest, update secondLargest
    else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest; // return the second largest element in the array
}
