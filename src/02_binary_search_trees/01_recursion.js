function factorial(num) {
  if (num <= 1) { // base case
    return 1;
  } else { // recursion case
    return num * factorial(num - 1);
  }
}

console.log(factorial(4));