/**
 * This is pretty neat. We can use the same JavaScript and run it
 * both through Webstorm and in the browser.
 */

try {
    var chai = require('chai');
} catch (e) {}

try {
    var requirejs = require('requirejs');
} catch (e) {}

/**
 * Here, check to see if the try worked. If not, grab the assert
 * assigned in test.html. We know both modes are mutually exclusive
 * workflows, so they criss-cross without cross-interference.
 *
 * It's a hack, but a nice one.
 *
 * @type {*|AssertStatic|number}
 */

var assert = chai.assert || window.assert;

describe('Chai Assertion Self-Test', function () {
    describe('Assert everything is ok', function () {
        it('should return everything is ok', function () {
            assert.isOk('everything', 'everything is ok');
        });
    });
    describe('Assert Everything Equal', function () {
        it('should return equal', function () {
            assert.equal('everything', 'everything');
        });
    });
});
