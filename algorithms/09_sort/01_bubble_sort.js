function bubbleSort(array) {
  let count = 0;
  for (let j = array.length; j > 1; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }

  return array;
}