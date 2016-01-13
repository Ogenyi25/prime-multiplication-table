'use strict'

// Simple function to test if the input is a prime number
exports.isPrime = function(num) {

  if (typeof num !== 'number' || num % 1 !== 0) {
    throw new Error("isPrime input must be an integer")
  }

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
  n = n || 10;
  var primes = [];
  var counter = 0;
  var current = 2;

  if (typeof n !== 'number' || n <= 0 || n % 1 !== 0) {
    throw new Error("findPrimes input must be a positive integer")
  }

  while (counter < n) {
    if (exports.isPrime(current)) {
      primes.push(current);
      counter++;
    }
    current++;
  }

  return primes;
};
