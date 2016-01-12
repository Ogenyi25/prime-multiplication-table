var assert = require('assert');

describe('Prime Module', function() {
  
  describe('isPrime function', function () {
    
    it('should throw an error if it is not given a positive integer greater than 1', function () {
      assert.throws(isPrime, Error);
      assert.throws(function() { primes.isPrime(0) }, Error);
      assert.throws(function() { primes.isPrime(1) }, Error);
      assert.throws(function() { primes.isPrime(-1) }, Error);
      assert.throws(function() { primes.isPrime(3.1) }, Error);
      assert.throws(function() { primes.isPrime('a') }, Error);
      assert.throws(function() { primes.isPrime(true) }, Error);
      assert.throws(function() { primes.isPrime(undefined) }, Error);
    });
    
    it('should be able to test primality', function () {
      assert.equal(function() { primes.isPrime(2) }, true);
      assert.equal(function() { primes.isPrime(3) }, true);
      assert.equal(function() { primes.isPrime(4) }, false);
      assert.equal(function() { primes.isPrime(5) }, true);
      assert.equal(function() { primes.isPrime(7) }, true);
      assert.equal(function() { primes.isPrime(9) }, true);
      assert.equal(function() { primes.isPrime(12) }, false);
      assert.equal(function() { primes.isPrime(13) }, true);
      assert.equal(function() { primes.isPrime(15) }, false);
      assert.equal(function() { primes.isPrime(19) }, true);
      assert.equal(function() { primes.isPrime(21) }, false);
      assert.equal(function() { primes.isPrime(23) }, true);
      assert.equal(function() { primes.isPrime(25) }, false);
    });

  });

  describe('First N primes function', function () {
    
    it('should return 10 numbers if nothing is passed in', function () {
      assert.equal(function() { primes.findPrimes().length }, 10);
    });

    it('should return N numbers if N is passed in', function () {
      assert.equal(function() { primes.findPrimes(12).length }, 12);
      assert.equal(function() { primes.findPrimes(8).length }, 8);
    });

    it('should throw an error if a positive integer is not passed in', function () {
      assert.throws(function() { primes.findPrimes(-1) }, Error);
      assert.throws(function() { primes.findPrimes(0) }, Error);
      assert.throws(function() { primes.findPrimes('a') }, Error);
      assert.throws(function() { primes.findPrimes(true) }, Error);
      assert.throws(function() { primes.findPrimes(undefined) }, Error);
    });

  });

});

describe('Grid Module', function () {

  it('should display tabular data');

});