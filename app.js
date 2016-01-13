'use strict'

var primes = require('./prime.js');
var grid = require('./table.js')

var n = Number(process.argv[2]) || 10;

// Calculate all of the prime products
function primeProducts(primes) {
  var length = primes.length;

  var products = primes.map(function() {
    return new Array(length);
  });

  primes.forEach(function(prime, index, collection) {
    for (var i = 0; i <= index; i++) {
      products[index][i] = products[i][index] = prime * collection[i];
    }
  });

  return products;
}

function addFirstRowCol(table, primes) {
  
  // Add the prime numbers to the left most column of the table
  table.forEach(function(row, index) {
    row.unshift(primes[index]);
  });

  // Add the prime numbers to the top row of the table
  var topRow = primes.map(function(prime) {
    return prime;
  });

  // The top left cell needs to be blank to account for the prime numbers column
  topRow.unshift("");
  table.unshift(topRow);
  
  return table
}

var primeList = primes.findPrimes(n);
var products = primeProducts(primeList);
var allRowsCols = addFirstRowCol(products, primeList);

var table = grid.drawTable(allRowsCols);

process.stdout.write(table + "\n");
