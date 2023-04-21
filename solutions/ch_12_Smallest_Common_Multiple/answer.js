function smallestCommonMultiple(num1, num2) {
  // Find the larger and smaller numbers
  const larger = Math.max(num1, num2);
  const smaller = Math.min(num1, num2);

  // Start with the larger number and check if it's divisible by the smaller number
  let current = larger;
  while (current % smaller !== 0) {
    current += larger;
  }

  return current;
}
