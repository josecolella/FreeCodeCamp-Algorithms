/*jslint node: true */
'use strict';

module.exports = {

    reverseString: function(str) {
        return str.split("").reverse().join("");
    },
    factorialize: function(num) {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * factorialize(num - 1);
        }
    },
    palindrome: function(str) {
        // Good luck!
        //cleanStrRegexExp = new RegExp(/[^a-zA-Z0-9]/g, 'g');
        var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        for (var i = 0, j = cleanStr.length - 1; i <= j; i++, j--) {
            if (cleanStr[i] !== cleanStr[j]) {
                console.log("I " + cleanStr[i] + " J " + cleanStr[j]);
                return false;
            }
        }
        return true;
    },
    findLongestWord: function(str) {
        var sortedStrLenList = str.split(' ').map(function(str) {
            var wordLengthHash = {
                "str": str,
                "len": str.length
            };
            return wordLengthHash;
        }).sort(function(a, b) {
            if (a.len > b.len) {
                return 1;
            }
            if (a.len < b.len) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        return sortedStrLenList[sortedStrLenList.length - 1].str;
    },
    titleCase: function(str) {
        return str.split(" ").map(function(str) {
            var upperCaseFirstWord = str[0].toUpperCase() + str.toLowerCase() + str.slice(1, str.length);
            return upperCaseFirstWord;
        }).join(" ");
    },
    largestOfFour: function(arr) {
        // You can do this!
        return arr.map(function(subArray) {
            return subArray.sort(function compareNumbers(a, b) {
                return a - b;
            }).reverse()[0];
        });
    },
    end: function(str, target) {
        // "Never give up and good luck will find you."
        // -- Falcor
        var spaceChar = " ";
        var spaceCharIndex = str.lastIndexOf(" ");
        var endWord;
        console.log(" Here");
        console.log(spaceCharIndex);
        endWord = str.split("");
        return spaceCharIndex == -1 ? endWord[str.length - 1] : endWord.join("").slice(spaceCharIndex).trim();
    },
    repeat: function(str, num) {
        // repeat after me
        var repeatStr = '';
        for (var i = 0; i < num; i++) {
            for (var j in str) {
                repeatStr += str[j];
            }
        }
        return repeatStr;
    },
    truncate: function(str, num) {
        // Clear out that junk in your trunk
        return str.length > num ? str.slice(0, num - 3) + '...' : str;
    },
    chunk: function(arr, size) {
        var chunkArray = [];
        for (var i = 0, variableSize = size; i < arr.length; i += size, variableSize += size) {
            chunkArray.push(arr.slice(i, variableSize));
        }
        return chunkArray;
    },
    slasher: function(arr, howMany) {
        // it doesn't always pay to be first
        var slashArray = [];
        if (howMany >= arr.length) {
            return slashArray;
        }
        return arr.splice(howMany);
    },
    mutation: function(arr) {
        var checkIndexArray = arr[1].toLowerCase().split("").map(function(elem, index) {
            return arr[0].toLowerCase().split("").indexOf(elem);
        });
        return checkIndexArray.indexOf(-1) === -1 ? true : false;
    },
    bouncer: function(arr) {
        // Don't show a false ID to this bouncer.
        var filterArray = arr.filter(function(elem) {
            return elem !== '' && !isNaN(elem) && elem !== false && elem !== 0 && elem !== undefined && elem !== null;
        });
        return filterArray;
    },
    destroyer: function(arr) {
        // Remove all the values
        for (var i = 1; i < arguments.length; i++) {
            var currentArgument = arguments[i];
            arr = arr.filter(function(elem) {
               return currentArgument != elem;
            });
        }
        return arr;
    },
    getIndexToIns: function(arr, num) {
        // Find my place in this sorted array.
        var index = undefined;
        var sortedArray = arr.sort(function compare(a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
        var filteredArray = sortedArray.filter(function(elem, index) {
            return elem >= num;
        });
        if (filteredArray.length > 0) {
            index = sortedArray.indexOf(filteredArray[0]);
        } else {
            index = sortedArray.length;
        }
        return index;
    },
    rot13: function(str) {
        return str.split("").map(function(elem) {
            var cipherRotation = 13;
            var letterValue = elem.charCodeAt(0);
            if (letterValue >= 65 && letterValue <= 90) {
                var cipherLetter = letterValue + cipherRotation > 90 ? String.fromCharCode(letterValue - cipherRotation) : String.fromCharCode(letterValue + 13);
                return cipherLetter;
            } else {
                return elem;
            }
        }).join("");
    }
};
