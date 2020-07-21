// isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false

function isInside(array, ele) {
    let indexArray = array.indexOf(ele)

    if(indexArray != -1) {
        return true
    } else {
        return false
    }
}

console.log(isInside(["this", "is", "an", "array"], "array"))

//console.log(isInside(['taylor', 'rome', 'pete'], 'rome'))

// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'

function reverseStr(str) {
    return str.split("").reverse().join("")
}

console.log(reverseStr("General Assembly"));

// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]

function luckySevens(max) {
    let luckyArray = []

    for (let i = 1; i <= max; i++) {
        if(i % 7 == 0) {
            luckyArray.push(i)
        }
    }

    return luckyArray
}

console.log(luckySevens(52))

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]


function copyMachine(element, num) {
    let newArray = []
    let i = 1;

    while(i <= num) {
        newArray.push(element)

        i++
    }

    return newArray
}

//copyMachine('candy', 2)
console.log(copyMachine('candy', 3))

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]

function everyOtherWord(sentence) {

    let splitSentence = sentence.split(" ")

    let everyOtherWordArray = []

    for(let i = 0; i < splitSentence.length; i++) {

        if (!(i % 2)) {
            everyOtherWordArray.push(splitSentence[i])
        }

    }

    return everyOtherWordArray
}

console.log(everyOtherWord("This should work I think"))

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true

function wordYeller(sentence) {
    let splitSentence = sentence.split(" ")

    let newLoudSentenceArray = []

    splitSentence.forEach(function(word) {
        let lengthOfWord = word.length - 1
        
        let lastCharInWord = word[lengthOfWord]  

        if (lastCharInWord === "!" || lastCharInWord === "," || lastCharInWord === "." || lastCharInWord === "?") {
            newLoudSentenceArray.push(word) 
        } else {
            let loudWord = word + "!"

            //console.log(loudWord)

            newLoudSentenceArray.push(loudWord) 
        }
    })

    let newLoundSentence = newLoudSentenceArray.join(" ")

    return newLoundSentence

}

console.log(wordYeller("This, is? a string! you. think pal"))