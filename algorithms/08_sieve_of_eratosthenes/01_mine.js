const sieveOfEratosthenesCache = (function () {
  let cache = [true, true];

  return function (num) {
    for (let i = 0; i <= num; i++) {
      if (cache[i] !== undefined) {
        continue;
      }

      for (let j = 2; j <= Math.sqrt(num); j++) {
        if (cache[j] === true && i % j === 0 && j !== 1 && j !== i) {
          cache[i] = false;
          break;
        }
        cache[i] = true;
      }
    }

    return cache
      .map((bool, key) => ({ key, bool }))
      .filter(row => row.bool && row.key <= num)
      .map(row => row.key);
  };
})();