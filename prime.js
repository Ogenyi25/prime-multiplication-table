// Simple function to test if the input is a prime number
exports.isPrime = function(num) {
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
};

// Returns an array of the first N primes
exports.findPrimes = function(n) {
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
};