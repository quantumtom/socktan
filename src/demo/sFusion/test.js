/**
 * Created by thomascornyn on 7/12/16.
 */

/**
 * At a job interview, you are challenged to write an algorithm to check
 * if a given string, s, can be formed from two other strings, part1 and part2.
 *
 * The restriction is that the characters in part1 and part2 are in the same order as in s.
 *
 * The interviewer gives you the following example and tells you to figure out
 * the rest from the given test cases.
 *
 * For example:
 * 'codewars' is a merge from 'cdw' and 'oears':
 *
 *    s:  c o d e w a r s   = codewars
 *
 *    part1:  c   d   w         = cdw
 *
 *    part2:    o   e   a r s   = oears
 */

function isMerge(s, part1, part2) {

  var subject = s.split('');
  var whole = part1.concat(part2).split('');
  var idx = 0;
  var indices = [];

  subject.sort();
  whole.sort();

  console.log(s, part1, part2);

  if (subject.length !== whole.length) {
    return false;
  }

  subject.forEach(function(c) {
    "use strict";

    if (!whole.includes(c)) {
      return false;
    }

    idx = whole.indexOf(c);

    indices = [];

    while (idx != -1) {
      indices.push(idx);
      idx = whole.indexOf(c, idx + 1);
    }

    if (indices.length > 1) {
      return false;
    }
  });

  return true;
}

var assert = require('chai').assert;

describe('Can merge', function () {
  it('Should be true', function () {
    assert.isTrue(isMerge('aabb', 'ab', 'ab'));
  });
  it('Should be true', function () {
    assert.isTrue(isMerge('codewars', 'code', 'wars'));
  });
  it('Should be true', function () {
    assert.isTrue(isMerge('codewars', 'cdw', 'oears'));
  });
  it('Should be true', function () {
    assert.isTrue(isMerge('Making progress', 'Mak pross', 'inggre'));
  });
  it('Should be false', function () {
    assert.isFalse(isMerge('codewars', 'cod', 'wars'));
  });
  it('Should be false', function () {
    assert.isFalse(isMerge('codewars', 'code', 'warss'));
  });
  it('Should be false', function () {
    assert.isFalse(isMerge('codewars', 'codes', 'wars'));
  });
});
