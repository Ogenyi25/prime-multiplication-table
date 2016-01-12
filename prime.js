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

})();