"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(4));
        console.log(word.concat("Jithin"));
        console.log(word.slice(1, 5));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence);
        console.log(sentence.split(" ").join(" "));
    };
    StringManipulations.prototype.findVowel = function (word) {
        console.log(word);
        var vowelsCount = 0;
        for (var i = 0; i <= word.length - 1; i++) {
            if (word.charAt(i) == "a" ||
                word.charAt(i) == "e" ||
                word.charAt(i) == "i" ||
                word.charAt(i) == "o" ||
                word.charAt(i) == "u") {
                vowelsCount += 1;
            }
        }
        console.log(vowelsCount);
    };
    return StringManipulations;
}());
var StringObject = new StringManipulations();
StringObject.print("jithinsaireddy");
StringObject.printWithSpace("jithin");
StringObject.findVowel("jithinsaireddy");
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        console.log(num);
        if (num % 2 === 0) {
            console.log("The number is not a prime number");
        }
        else {
            console.log("It's a prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        console.log(num);
        if (num % 9 == 1) {
            console.log("its a magic number");
        }
        else {
            console.log("The number is not a magic number");
        }
    };
    return NumbersManipulations;
}());
var magicNumberObj = new NumbersManipulations();
magicNumberObj.findMagic(200);
magicNumberObj.findPrime(25);
