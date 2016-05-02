var assert = require('chai').assert; // An assertion library for testing
var basicAlgorithms = require("../basicAlgorithms");

describe('Reverse String', function() {
    describe('#reverseString()', function() {
        it('it should return string as typeof', function() {
            assert.typeOf(basicAlgorithms.reverseString("hello"), "string");
        });
        it('it should return "olleh" as the reverse of "hello"', function() {
            assert.equal("olleh", basicAlgorithms.reverseString("hello"));
        });
        it('it should return "ydwoH" as the reverse of "Howdy"', function() {
            assert.equal("ydwoH", basicAlgorithms.reverseString("Howdy"));
        });
        it('should return "htraE morf sgniteerG" as the reverse of "Greetings from Earth"', function() {
            assert.equal("htraE morf sgniteerG", basicAlgorithms.reverseString("Greetings from Earth"));
        });
    });
});


describe('Factor a Number', function() {

});

describe('Return the lowest index at which a value should be inserted into an array', function() {
    it('Should return index 3 for the value 35 in the array [10, 20,30, 40, 50]', function() {
        assert.equal(3, basicAlgorithms.getIndexToIns([10, 20, 30, 40, 50], 35));
    });
    it('Should return index 2', function() {
        assert.equal(2, basicAlgorithms.getIndexToIns([10, 20, 30, 40, 50], 30));

    });
    it('Should return index 1', function() {
        assert.equal(1, basicAlgorithms.getIndexToIns([40, 60], 50));

    });
    it('Should return index 0', function() {
        assert.equal(0, basicAlgorithms.getIndexToIns([3, 10, 5], 3));

    });
    it('Should return index 2', function() {
        assert.equal(2, basicAlgorithms.getIndexToIns([5, 3, 20, 3], 5));

    });
    it('Should return index 2', function() {
        assert.equal(2, basicAlgorithms.getIndexToIns([2, 20, 10], 19));

    });
    it('Should return index 3', function() {
        assert.equal(3, basicAlgorithms.getIndexToIns([2, 5, 10], 15));
    });
});


describe('Caesars Cipher', function () {
    it('Should return FREE CODE CAMP for cipher SERR PBQR PNZC', function () {
        assert.equal("FREE CODE CAMP", basicAlgorithms.rot13("SERR PBQR PNZC"));
    });
});
