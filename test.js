var assert = require('assert');

describe('Prime Table', function() {
  
  describe('isPrime function', function () {
    
    it('should throw an error if it is not given a positive integer greater than 1', function () {
      assert.throws(isPrime, Error);
      assert.throws(function() { isPrime(0) }, Error);
      assert.throws(function() { isPrime(1) }, Error);
      assert.throws(function() { isPrime(-1) }, Error);
      assert.throws(function() { isPrime(3.1) }, Error);
      assert.throws(function() { isPrime('a') }, Error);
      assert.throws(function() { isPrime(true) }, Error);
      assert.throws(function() { isPrime(undefined) }, Error);
    });
    
    it('should be able to test primality', function {
      assert.equal(function() { isPrime(2) }, true);
      assert.equal(function() { isPrime(3) }, true);
      assert.equal(function() { isPrime(4) }, false);
      assert.equal(function() { isPrime(5) }, true);
      assert.equal(function() { isPrime(7) }, true);
      assert.equal(function() { isPrime(9) }, true);
      assert.equal(function() { isPrime(12) }, false);
      assert.equal(function() { isPrime(13) }, true);
      assert.equal(function() { isPrime(15) }, false);
      assert.equal(function() { isPrime(19) }, true);
      assert.equal(function() { isPrime(21) }, false);
      assert.equal(function() { isPrime(23) }, true);
      assert.equal(function() { isPrime(25) }, false);
    });

  });

  describe('First N primes function', function () {
    
    it('should return 10 numbers if nothing is passed in', function () {
      assert.equal(function() { findPrimes().length }, 10);
    });

    it('should return N numbers if N is passed in', function () {
      assert.equal(function() { findPrimes(12).length }, 12);
      assert.equal(function() { findPrimes(8).length }, 8);
    });

    it('should throw an error if a positive integer is not passed in', function () {
      assert.throws(function() { findPrimes(-1) }, Error);
      assert.throws(function() { findPrimes(0) }, Error);
      assert.throws(function() { findPrimes('a') }, Error);
      assert.throws(function() { findPrimes(true) }, Error);
      assert.throws(function() { findPrimes(undefined) }, Error);
    });

  });

});