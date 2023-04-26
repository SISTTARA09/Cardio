
let cl = console.log

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  console.log(str.split("").reverse().join(''));
}
reverseString('hello')
// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
    reversedStr == str ? cl(true) : false;
}
isPalindrome('racecar')
// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  console.log(int.toString().split("").reverse().join(''))
}
reverseInt(521)


// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let done = str.split(' ').map(e => e[0].toUpperCase() + e.slice(1, e.length)).join(' ');
  console.log(done)
}
capitalizeLetters('i love javascript')


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let charObj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  let maxNum = 0;
  let maxChar = '';
  for (let char in charObj) {
    if (charObj[char] > maxNum) {
      maxNum = charObj[char];
      maxChar = char;
    }
  }
  cl(maxChar)
}
maxCharacter('javascript')

// let hamza = 'hamza'

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++)
// (i % 5 == 0 && i % 3 == 0) ? cl('FizzBuzz') :(i % 5 == 0) ? cl('Fuzz') : (i % 3 == 0) ? cl('Buzz') : cl(i);
// }
// fizzBuzz()
