/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable
 * format (HH:MM:SS)
 *
 *  HH = hours, padded to 2 digits, range: 00 - 99
 *  MM = minutes, padded to 2 digits, range: 00 - 59
 *  SS = seconds, padded to 2 digits, range: 00 - 59
 *
 * The maximum time never exceeds 359999 (99:59:59)
 *
 * You can find some examples in the test fixtures.
 *
 */

/**
 *
 * 359999 = (n) - 1
 * 359999 = (360000) - 1
 * 359999 = (60 * 60 * 10 * 10) - 1
 * 359999 = (60^2 * 10^2) - 1
 *
 */

var assert = require('chai').assert;

function intify(n) {
  this.value = 0;

  if (isNumber(n)) {
    this.value = parseInt(n, 10);
  }

  return this.value;
}

function lengthify(s) {
  if (!s) {
    s = '00';
  } else {
    s = '0' + this.value;
  }

  return s;
}

function stringify(n) {
  return n.toString();
}

function isNumber(n) {
  return (typeof(n) === 'number');
}

function normalize(n) {
  if (n < 10) {
    return lengthify(n);
  } else {
    return stringify(n);
  }
}

function getBase(n) {
  return Math.pow(60, n);
}

function getBases() {
  var bases = [];

  // Count back from 2 to get 60^2, 60^1, 60^0 (3600, 60, 1)
  for (var i = 2; i >= 0; i--) {
    bases.push(getBase(i));
  }

  return bases;
}

function humanReadable(n) {
  var tally;
  var bases = getBases();

  bases.forEach(function (c, i, a) {
    // Cast the quotient as an integer.
    tally = intify(n / c);

    // Adjust the remaining total time.
    n = n - (tally * c);

    // Add the result to our output.
    a[i] = normalize(tally);
  });

  return bases.join(':');
}

describe('Human readable time', function () {
  it('should be equal', function () {
    assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)');
    assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)');
    assert.equal(humanReadable(59), '00:00:59', 'humanReadable(59)');
    assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)');
    assert.equal(humanReadable(61), '00:01:01', 'humanReadable(61)');
    assert.equal(humanReadable(119), '00:01:59', 'humanReadable(119)');
    assert.equal(humanReadable(120), '00:02:00', 'humanReadable(120)');
    assert.equal(humanReadable(120000), '33:20:00', 'humanReadable(120000)');
    assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    assert.equal(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
    assert.equal(humanReadable(48668), '13:31:08', 'humanReadable(48668)');
  });
});
