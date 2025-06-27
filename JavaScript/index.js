// Task-1 Find the most repeated character in a string
let string = "aabbbcc";

let result = [];
for (let i = 0; i < string.length; i++) {
  let count = 0;
  for (let j = i + 1; j < string.length; j++) {
    if (string[i] == string[j]) {
      count++;
    }
  }
  result.push(count);
}

let str = null;
result.forEach((i) => {
  if (i > str) {
    str = i;
  }
});
console.log(string[result.indexOf(str)]);







// Task-2  unique elements in two arrays
let a = [1, 2, 3];
let b = [2, 4, 5];

function uniqueElements(arr1, arr2) {
  var unique = [];

  for (var i = 0; i < arr1.length; i++) {
    var found = false;
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      unique.push(arr1[i]);
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    var found = false;
    for (var j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      unique.push(arr2[i]);
    }
  }

  return unique;
}

console.log(uniqueElements(a, b));








// Task-3 Find the longest word in a sentence
let sentence = "JavaScript is powerful";
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  words.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord(sentence));







//Task - 4 Curim functions

function chain(value) {
  let val = value;
  return {
    add: function (num) {
      val += num;
      return {
        subtract: function (num) {
          val -= num;
          return {
            result: function () {
              return val;
            },
          };
        },
      };
    },
  };
}
console.log(chain(5).add(2).subtract(1).result());








// Task-5  hoisting in JavaScript

console.log(beforenamed(1, 2)); // Working in named function

function beforenamed(a, b) {
  return a + b;
}

// console.log(beforearrow(1,2))   // Not Working in Arrow function
// const beforearrow = (a,b) =>{
//     return a+b
// }
