//-------------exercise 1-------------------//
// let fullName = prompt('Enter your name;');
// let theName = fullName.split(' ');
// if (theName.length >= 2) {
//     let firstName = theName[0];
//     let lastName = theName[theName.length - 1];
//     console.log(firstName.toUpperCase(), lastName.toLowerCase());
// }

//-------------exercise 2------------------//
// let sentence = prompt('Enter a sentence:');
// let response = sentence.split(' ');
// console.log(response);

// if (response.length <= 3){
//     console.log('Short sentence!');
// } else if (response.length >= 4 && response.length <= 6){
//     console.log('Medium sentence!');
// } else {
//     console.log('Long sentence!');
// }

//-------------exercise 3------------------//
// let password = prompt("Enter password:");
// let response = password.split("");
// let valid = response.length >= 8 && response[0] === password[0].toUpperCase();
// if (valid) {
//   console.log("strong password!");
// } else {
//   console.log("weak password");
// }

//-------------exercise 4------------------//
// let time = prompt('Enter time. Format; "00 00 00"');
// let response = time.split(' ');

// var hh = response[0];
// var mm = response[1];
// var ss = response[2];

// let theTime = `It's ${hh} hours, ${mm} minutes, and ${ss} seconds.`;
// console.log(theTime);

//-------------exercise 5-----------------//
// let fullName = prompt('Enter your name;');
// let theName = fullName.split(' ');
// let firstLetter = theName[0][0].toUpperCase();
// let secondLetter = theName[theName.length - 1][0].toUpperCase();
// console.log(`Your initials are ${firstLetter}.${secondLetter}.`);

//-----------------------------------------------

// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers * 2);
// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index] * 2);
// }
// var newNumbers = []
// for (let index = 0; index < numbers.length; index++) {
//    console.log(numbers[index] * 2);
//    newNumbers.push(numbers[index] * 2);
// }

// console.log(newNumbers);

// var strings = ['good', 'bad', 'okay'];
// for (let index = 0; index < strings.length; index++) {
//     strings[index].length;
//     console.log(strings[index].length);
// }

let fruits = ["apple", "banana", "avocado", "cherry", "apricot"];
for (let index = 0; index < fruits.length; index++) {
  var currentFruit = fruits[index];
  if (currentFruit.startsWith("a")) {
    console.log(currentFruit);
  }
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let index = 0; index < numbers.length; index++) {
//     var biggerThanFive = numbers.filter(num >= num > 5);
//     console.log(biggerThanFive);
// }

let biggerThanFive = [];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > 5) {
    biggerThanFive.push(numbers[index]);
  }
}
console.log(biggerThanFive);
// let biggerThanFive = numbers.filter(num => num > 5);
// console.log(biggerThanFive);

let strings = ["to", "three", "post", "qwerty"];
// let longerThanThree = strings.filter(str => str.length > 3);
// console.log(longerThanThree);

var longerThanThree = [];

for (let index = 0; index < strings.length; index++) {
  if (strings[index].length > 3) {
    longerThanThree.push(strings[index]);
  }
}
console.log(longerThanThree);

// let average = numbers.reduce((sum, num) => sum + num) / numbers.length;
// console.log(average);

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
let average = sum / numbers.length;
console.log(average);

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
  console.log(fullNames);
}

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//   if (str.slice(i, i + 2) === " ") {
//     alert("No double spaces!");
//     break;
//   }
//   console.log(numChars);
  
// }

console.log('');
console.log('');
console.log('');


let objects = {
    name: 'jane doe',
    age: 20,
    isStudent: true,
}
console.log(objects);
console.log(objects.name);

let book = {
    title: 'JS Guide',
    pages: 100,
}
console.log(book.title);
console.log(book['pages']);

let car = {
  brand: 'Toyota',
}
car['model'] = 'Camry';
car['year'] = 2015;
car['brand'] = 'Honda';
console.log(car);

let settings = {
  darkMode: true,
  fontSize: 14,
}

var question = prompt(`darkMode or fontSize??`)
var response;
response = question;
if (response === 'darkMode') {
  console.log(settings.darkMode);
} else if (response === 'fontSize') {
  console.log(settings.fontSize);
} else {
  console.log('oops! wrong!');
}

// let list = {
//   [1,2],
//   ['a','b'],

// }

// for (let player in players){
//console.log(players[player].name.toLowerCase())
//}
