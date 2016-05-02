var assert = require('chai').assert; // An assertion library for testing
var basicAlgorithms = require("../basicAlgorithms");

describe('Reverse String', function () {
    describe('#reverseString()', function() {
       it('it should return string as typeof', function() {
           assert.equal("string", typeof(basicAlgorithms.reverseString("hello")));
       });
       it('it should return "olleh" as the reverse of "hello"', function () {
           assert.equal("olleh", basicAlgorithms.reverseString("hello"));
       });
       it('it should return "ydwoH" as the reverse of "Howdy"', function () {
           assert.equal("ydwoH", basicAlgorithms.reverseString("Howdy"));
       });
       it('should return "htraE morf sgniteerG" as the reverse of "Greetings from Earth"', function () {
           assert.equal("htraE morf sgniteerG", basicAlgorithms.reverseString("Greetings from Earth"));
       });
   });
});

