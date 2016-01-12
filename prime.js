var primes = (function primeModule() {

  // Simple function to test if the input is a prime number
  function isPrime(num) {
    var result = true;
    if (num < 2 || (num > 2 && num % 2 === 0)) {
      result = false;
    } else {
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          result = false;
          break;
        }
      }
    }
    return result;
  }

  // Returns an array of the first N primes
  function findPrimes(n) {
    var primes = [];
    var counter = 0;
    var current = 2;

    while (counter < n) {
      if (isPrime(current)) {
        primes.push(current);
        counter++;
      }
      current++;
    }

    return primes;
  }

  return {
    isPrime: isPrime,
    findPrimes: findPrimes
  }
  
})();