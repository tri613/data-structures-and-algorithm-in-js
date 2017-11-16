const fibMemo = (function () {
  let cache = [];
  return function (num) {
    if (cache[num]) {
      return cache[num];
    } else {
      if (num <= 2) {
        return 1;
      } else {
        cache[num] = fibMemo(num - 1) + fibMemo(num - 2);
        return cache[num];
      }
    }
  }
})();

// this is now super fast & can call up to 1000!
// the power of memorization and caching!