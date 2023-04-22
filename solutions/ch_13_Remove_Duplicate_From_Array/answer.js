
function removeDuplicates(arr) {
  // Create a new array to store the unique elements
  let uniqueArr = [];
  
  // Loop through the input array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is not in the unique array, add it
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  
  // Return the unique array
  return uniqueArr;
}
