const sieveOfEratosthenes = function (num) {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    primes[i] = true;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; j * i <= num; j++) {
      primes[j * i] = false;
    }
  }

  return primes
    .map((bool, key) => ({ key, bool }))
    .filter(row => row.bool)
    .map(row => row.key);
};
