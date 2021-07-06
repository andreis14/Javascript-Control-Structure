//1. The numbers from 1 to 20 (do not use arrays)

function numbers() {
  let numere = '';

  for (let i = 1; i <= 20; i++) {
    numere = numere + i + ' ';
  }
  return numere;
}
console.log('Numerele sunt: ' + numbers());

//2. The odd numbers from 1 to 20 (do not use arrays) (check divisibility using the modulo operator %, see example below (under fizzbuzz))

function oddNumbers() {
  let numbers = '';

  for (let i = 1; i <= 20; i += 2) {
    numbers = numbers + i + ' ';
  }
  return numbers;
}
console.log('Numerele impari sunt: ' + oddNumbers());

//1.The sum of all the elements in an array (array is received as input!)

function sumArray(arrayNr) {
  let sum = 0;
  for (let i = 0; i < arrayNr.length; i++) {
    sum = sum + arrayNr[i];
  }
  return sum;
}

console.log('Suma numerelor este: ' + sumArray([5, 2, 3]));

//4. How many times a certain element appears in an array (both the array and the looked up elements should be inputs!)

function myFunction(arrayNr, n) {
  let count = 0;
  for (let i = 0; i < arrayNr.length; i++) {
    if (arrayNr[i] == n) {
      count++;
    }
  }
  return count;
}
const array = [1, 1, 3, 3, 4, 343];

const n = 3;
console.log('Numerele se repeta de: ' + myFunction(array, n) + ' ori.');

// Challange 1

function nestedFor(nr) {
  let string = ' ';
  for (let i = 0; i < nr; i++) {
    for (let j = 0; j < nr; j++) {
      if ((i + j) % 2 == 0) {
        string += '0 ';
      } else {
        string += '1 ';
      }
    }
    string += '\n';
  }
  return string;
}
console.log(nestedFor(4));

//Challange 2

function reverseString(stringToReverse) {
  let stringArray = stringToReverse.split('');
  let stringReverse = '';
  for (let i = stringArray.length - 1; i >= 0; i--) {
    stringReverse = stringReverse + stringArray[i];
  }

  return stringReverse;
}

console.log(reverseString('12345'));

//Palindrome
function palindrome(stringPalindrom) {
  let reversePalindrome = reverseString(stringPalindrom);
  if (stringPalindrom == reversePalindrome) return true;
  else {
    return false;
  }
}
console.log(palindrome('abba'));

//Challange 3 Fizzbuzz

function fizzBuzz(n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      result = result + i + ' ';
    }
    if (i % 3 == 0 && i % 5 == 0) {
      result = result + 'fizzbuzz ';
    } else {
      if (i % 3 == 0) result = result + 'fizz ';
      if (i % 5 == 0) result = result + 'buzz ';
    }
  }
  return result;
}

console.log(fizzBuzz(16));
