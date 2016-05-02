"use strict";

module.exports = {
     where: function(collection, source) {
        var arr = [];
        var sourceKeys = Object.keys(source);
        console.log(sourceKeys);
        return collection.filter(function(elem) {
            return elem.hasOwnProperty(sourceKeys[0]) && elem[sourceKeys[0]] == source[sourceKeys[0]];
        });
        // What's in a name?
    },
    /
};
