var assert = require('assert');
var primes = require('./prime.js');
var grid = require('./table.js')

describe('Prime Module', function () {
  
  describe('isPrime function', function () {
    
    it('should throw an error if it is not given a positive integer', function () {
      assert.throws(primes.isPrime, Error, "You must input an integer");
      assert.throws(function () { primes.isPrime(3.1) });
      assert.throws(function () { primes.isPrime('a') });
      assert.throws(function () { primes.isPrime(true) });
      assert.throws(function () { primes.isPrime(undefined) });
    });
    
    it('should be able to test primality', function () {
      assert.equal(primes.isPrime(2), true);
      assert.equal(primes.isPrime(3), true);
      assert.equal(primes.isPrime(4), false);
      assert.equal(primes.isPrime(5), true);
      assert.equal(primes.isPrime(7), true);
      assert.equal(primes.isPrime(9), false);
      assert.equal(primes.isPrime(12), false);
      assert.equal(primes.isPrime(13), true);
      assert.equal(primes.isPrime(15), false);
      assert.equal(primes.isPrime(19), true);
      assert.equal(primes.isPrime(21), false);
      assert.equal(primes.isPrime(23), true);
      assert.equal(primes.isPrime(25), false);
    });

  });

  describe('First N primes function', function () {
    
    it('should return 10 numbers if nothing is passed in', function () {
      assert.equal(primes.findPrimes().length, 10);
    });

    it('should return N numbers if N is passed in', function () {
      assert.equal(primes.findPrimes(12).length, 12);
      assert.equal(primes.findPrimes(8).length, 8);
    });

    it('should throw an error if a positive integer is not passed in', function () {
      assert.throws(function () { primes.findPrimes(-1) });
      assert.throws(function () { primes.findPrimes('a') });
      assert.throws(function () { primes.findPrimes(true) });
    });

  });

});

describe('Grid Module', function () {

  it('should display tabular data', function () {
    assert.equal(grid.drawTable([[1,10,100,],[20,200,2000,],[300,30,300]]), "  1  10  100\n 20 200 2000\n300  30  300")
  });

});
