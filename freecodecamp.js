function reverseString(str) {
    return str.split("").reverse().join("");
}


function palindrome(str) {
    // Good luck!
    //cleanStrRegexExp = new RegExp(/[^a-zA-Z0-9]/g, 'g');
    cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(cleanStr);
    for (var i = 0, j = cleanStr.length - 1; i <= j; i++, j--) {
        if (cleanStr[i] !== cleanStr[j]) {
            console.log("I " + cleanStr[i] + " J " + cleanStr[j]);
            return false;
        }
    }
    return true;
}

function findLongestWord(str) {
    sortedStrLenList = str.split(' ').map(function(str) {
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
}

function titleCase(str) {
    return str.split(" ").map(function(str) {
        upperCaseFirstWord = str[0].toUpperCase() + str.toLowerCase() + str.slice(1, str.length);
        return upperCaseFirstWord;
    }).join(" ");
}

function largestOfFour(arr) {
    // You can do this!
    return arr.map(function(subArray) {
        return subArray.sort(function compareNumbers(a, b) {
            return a - b;
        }).reverse()[0];
    });
}

function end(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    var spaceChar = " ";
    var spaceCharIndex = str.lastIndexOf(" ");
    var endWord;
    console.log(" Here");
    console.log(spaceCharIndex);
    endWord = str.split("");
    return spaceCharIndex == -1 ? endWord[str.length - 1] : endWord.join("").slice(spaceCharIndex).trim();
}

function repeat(str, num) {
    // repeat after me
    var repeatStr = '';
    for (var i = 0; i < num; i++) {
        for (var j in str) {
            repeatStr += str[j];
        }
    }
    return repeatStr;
}

function truncate(str, num) {
    // Clear out that junk in your trunk
    return str.length > num ? str.slice(0, num - 3) + '...' : str;
}

function chunk(arr, size) {
    var chunkArray = [];
    for (var i = 0, variableSize = size; i < arr.length; i += size, variableSize += size) {
        chunkArray.push(arr.slice(i, variableSize));
    }
    return chunkArray;
}

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    var slashArray = [];
    if (howMany >= arr.length) {
        return slashArray;
    }
    return arr.splice(howMany);
}

function mutation(arr) {
    var checkIndexArray = arr[1].toLowerCase().split("").map(function(elem, index) {
        return arr[0].toLowerCase().split("").indexOf(elem);
    });
    return checkIndexArray.indexOf(-1) === -1 ? true : false;
}

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var filterArray = arr.filter(function(elem) {
        return elem !== '' && !isNaN(elem) && elem !== false && elem !== 0 && elem !== undefined && elem !== null;
    });
    return filterArray;
}

function where(collection, source) {
    var arr = [];
    var sourceKeys = Object.keys(source);
    console.log(sourceKeys);
    return collection.filter(function(elem) {
        return elem.hasOwnProperty(sourceKeys[0]) && elem[sourceKeys[0]] == source[sourceKeys[0]];
    });
    // What's in a name?
}

function destroyer(arr) {
    // Remove all the values
    for (var i = 1; i < arguments.length; i++) {
        var currentArgument = arguments[i];
        arr = arr.filter(function(elem) {
           return currentArgument != elem;
        });
    }
    return arr;

}

//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


function where(arr, num) {
    // Find my place in this sorted array.
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

    return sortedArray.indexOf(filteredArray[0]);
}


console.log(where([2,5,10], 15));
