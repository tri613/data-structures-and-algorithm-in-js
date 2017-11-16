function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// this would crash when num is about 50
// because it's always recalculating some same number