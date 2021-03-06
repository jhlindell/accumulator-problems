/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
 var string ="This Works!";
 return string;
}



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

function sum(array) {
  return array.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers(array) {
  return array.map(function(element) {
    return element * 2;
  });
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers(array, multiplicator) {
  return array.map(function(element) {
    return element * multiplicator;
  });
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters(string) {
  let array = string.split('');
  return array.map(function(element) {
    return element + element;
  }).join('');
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave(array1, array2) {
  let returnArray = [];
  array1.forEach(function(element, index, array1) {
    returnArray.push(element);
    returnArray.push(array2[index]);
  });
  return returnArray;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(number, value) {
  let returnArray = [];
  for(let i = 0; i < number; i++) {
    returnArray.push(value);
  }
  return returnArray;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array) {
  let object = {};
  array.map(function(element, index, array) {
    object[element] = index;
  });
  return object;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject(array) {
  let object = {};
  array.map(function(element, index, array) {
    object[array[index][0]] = array[index][1];
  });
  return object;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

function reverseString(string) {
  let returnString = '';
  for (let i = string.length-1; i >= 0; i--) {
    returnString += string[i];
  }
  return returnString;
}
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string) {
  let half = string.length/2;
  if (string.substring(0, half)=== string.substring(half, string.length)){
    return true;
  } else {
    return false;
  }
}
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string) {
  let returnString = '';
  for(let i = 0; i < string.length; i++) {
    if(i%2 === 0) {
      returnString += string[i];
    }
  }
  return returnString;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/

function allEqual(string) {
  for(let i = 0; i< string.length; i++) {
    for(let j = 0; j < string.length; j++) {
      if(string[i] !== string[j]){
        return false;
      }
    }
  }
  return true;
}
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/

function sumLetters(string) {
  let sum = 0;
  for(let i = 0; i < string.length; i++) {
    sum += parseInt(string[i]);
  }
  return sum;
}
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for(let i = 0; i < string.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if(string[i]=== vowels[j]){
        count++;
      }
    }
  }
  return count;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(string) {
  let returnArray = [];
  for (let i =0; i< string.length; i++) {
    returnArray.push(string[i]);
  }
  return returnArray;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string) {
  let returnArray = [];
  for (let i = 0; i< string.length; i++) {
    returnArray.push(string.codePointAt(i));
  }
  return returnArray;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(string){
  let returnObject = {};
  for(let i =0; i< string.length; i++){
    returnObject[string[i]] = i;
  }
  return returnObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string){
  let returnObject = {};
  for(let i = 0; i< string.length; i++){
    if(returnObject.hasOwnProperty(string[i])){
      returnObject[string[i]]++;
    } else {
      returnObject[string[i]] = 1;
    }
  }
  return returnObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1, num2){
  if(num1 %2 === 0){
    if((num2-num1) >= 6){
      return true;
    } else return false;
  } else {
    if((num2 - num1) >= 7){
      return true;
    } else {
      return false;
    }
  }
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, length, fillChar){
  let strLength = string.length;
  let cat = ''
  if(length > strLength){
    let diff = length - strLength;
    for(let i=0; i<diff; i++){
      cat += fillChar;
    }
    cat += string;
    return cat;
  } else {
    return string;
  }
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(number, letter = ' '){
  let string = '';
  for (let i = 0; i < number; i++) {
    string += letter;
  }
  return string;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial(number){
  let result = 1;
  for (var i = number; i > 0; i--) {
    result *= i;
  }
  return result;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(number){
  let array = [];
  for (var i = 1; i <= number ; i++) {
    array.push(i);
  }
  return array;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(num1, num2){
  if(num1 === 0 && num2 === 0){
    return {};
  }
  let returnObject = {};
  for(let i = num1; i <= num2; i++){
    if(i % 2 === 0){
      returnObject[i] = "even";
    } else {
      returnObject[i] = "odd";
    }
  }
  return returnObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(number, string){
  if(number === 0){
    return {};
  }
  let returnObject = {};
  for(let i = 1; i <= number; i++){
    let key = ''
    for(let j = 0; j < i; j++){
      key += string;
    }
    returnObject[key] = true;
  }
  return returnObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(array, value){
  if(!array.length) return true;
  for(let i = 0; i < array.length; i++){
    if(array[i] !== value){
      return false;
    }
  }
  return true;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(array, value){
  if(!array.length) return false;
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      return true;
    }
  }
  return false;
}
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(array){
  let returnString = '';
  if(!array.length){
    return returnString;
  }
  for(let i = 1; i <= array.length; i++){
    returnString += array[i-1];
    if(i < array.length-1){
      returnString += ', ';
    }
    if(i === array.length-1){
      returnString += ' and ';
    }
  }
  return returnString;
}
/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(array){
  let returnString = '';
  for(let i = 0; i< array.length; i++){
    returnString += array[i][0];
  }
  return returnString;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(array){
  if(!array.length){
    return undefined;
  }
  let min = 100000000;
  for(let i=0; i< array.length; i++){
    if(array[i]< min){
      min = array[i];
    }
  }
  return min;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index(array, prop){
  let returnObject = {};
  for(let i = 0; i < array.length; i++){
    let key = array[i][prop];
    returnObject[key] = array[i];
  }
  return returnObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(object){
  let keys = [];
  let values = [];
  let returnObject = {};
  for(key in object){
    keys.push(key);
    values.push(object[key]);
  }
  for(let i = 0; i< keys.length; i++){
    returnObject[values[i]] = keys[i];
  }
  return returnObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, object){
  if(!object){
    return {};
  }
  let returnObject = {};
  let keys = Object.keys(object);
  console.log(keys);
  let values = Object.values(object);
  console.log(values);
  for(let i = 0; i < keys.length; i++){
    // console.log(keys[i]);
    let key = keys[i] + '-signed';
    // console.log(key);
    let value = values[i] + ' - ' + name;
    returnObject[key] = value;
  }
  // console.log(returnObject);
  return returnObject;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(object){
  let returnArray = [];
  let keys = Object.keys(object);
  let values = Object.values(object);
  for(let i = 0; i < keys.length; i++){
    let string = '';
    string += keys[i] + ' - ' + values[i];
    returnArray.push(string);
  }
  return returnArray;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(object){
  let sum = 0;
  let keys = Object.keys(object);
  for(let i = 0; i< keys.length; i++){
    sum += object[keys[i]];
  }
  return sum;
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

function biggestProperty(object){
  let keys = Object.getOwnPropertyNames(object);
  let values = Object.values(object);
  let index = 0;
  let highestVal = 0;
  for(let i = 0; i< values.length; i++){
    if(values[i] > highestVal){
      index = i;
      highestVal = values[i];
    }
  }
  return keys[index];
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(object, value) {
  if(!object){
    return undefined;
  }
  let keys = Object.keys(object);
  let values = Object.values(object);
  let index = 0;
  for(let i = 0; i < values.length; i++){
    if(values[i] === value){
      index = i;
    }
  }
  return keys[index];
}

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(object, value){
  let values = Object.values(object);
  for(let i = 0; i < values.length; i++){
    if(values[i] === value){
      return true;
    }
  }
  return false;
}
