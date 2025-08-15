var name = "Mola";
var sentence = "a sentence is written";

let nameOfStudent = "Shaba Mola";

console.log(nameOfStudent);
//var age = 25;
//age = 26;

//console.log(45 * 2);
//console.log(age);

//console.log(typeof age);
console.log(typeof nameOfStudent);

let year = 2022;

let status = false;

const g = 9.98;

console.log(typeof g);

let isHungry = true;
isHungry = false;

console.log(typeof isHungry);

let switchStatus = "True";

//addition
let num1 = 5;
let num2 = 4;

let result = num1 + num2;

console.log(result);

//subtraction

let currentYear = 2025;
let currentAge = 15;

let yearOfBirth = currentYear - currentAge - 0;
console.log(yearOfBirth);

//multiplication

var num = 7;
let product = num * 9;
console.log(product);
let numb = 4;
let numa = 6;
let answer = numb * numa;
console.log(answer);

//division

let average = (15 + 3 + 4) / 3;
console.log(average);

/* 
if (condition){
    do stuff;
}
*/

if (2 > 0) {
  console.log("Hello World");
}
num = -3;
if (num > 0) {
  console.log("All is well");
} else {
  console.log("Nah");
}

//grade checker
let score = 24;
if (score > 69) {
  console.log("A");
} else if (59 < score && score < 70) {
  console.log("B");
} else if (49 < score && score < 60) {
  console.log("C");
} else if (39 < score && score < 50) {
  console.log("D");
} else {
  console.log("F");
}

//even number checker
num = 7;
if (num % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

//thermometer
let temp = 19;
if (temp >= 30) {
  console.log("Temperature is hot");
} else if (temp >= 20 && temp < 30) {
  console.log("Temperature is normal");
} else {
  console.log("Temperature is cold");
}

//amusement park age checker
// let age = 1;
// if (age <= 13) {
//   console.log("Fee is 100");
// } else if (13 < age && age <= 18) {
//   console.log("Fee is 150");
// } else if (age <= 65 && age > 18) {
//   console.log("Fee is 250");
// } else {
//   console.log("Fee is 50");
// }

// var price = 100;
// // var discountPercentage = 0;
// // var discountedPrice = 0
// let age = 12;
// if (age < 13) {
//     discountPercentage = 20 / 100
//     discountedPrice = price - (discountPercentage * price);
// } else if (age > 13 && age < 18){
//     discountPercentage = 15 / 100
//     discountedPrice = price - (discountPercentage * price);
// } else if (age >= 18 && age <= 65){
//     discountPercentage = 10 / 100
//     discountedPrice = price - (discountPercentage * price);
// } else {
//     discountPercentage = 40 / 100
//     discountedPrice = price - (discountPercentage * price)
// }

//discount price checker
var price = 100;
let age = 87;
if (age < 13) {
  discountPercentage = 20 / 100;
  newPrice = price - discountPercentage * price;
} else if (age > 13 && age < 18) {
  discountPercentage = 15 / 100;
  newPrice = price - discountPercentage * price;
} else if (age >= 18 && age <= 65) {
  discountPercentage = 10 / 100;
  newPrice = price - discountPercentage * price;
} else {
  discountPercentage = 40 / 100;
  newPrice = price - discountPercentage * price;
}
console.log(newPrice);

//days of the week
var day = 8;
if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday");
} else if (day === 4) {
  console.log("Thursday");
} else if (day === 5) {
  console.log("Friday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Invalid day");
}

//shipping cost calculator
var weight = 14;
if (weight <= 2) {
  console.log("Shipping Cost = #500");
} else if (weight > 2 && weight <= 5) {
  console.log("Shipping Cost = #1000");
} else if (weight > 5 && weight <= 10) {
  console.log("Shipping Cost = #1500");
} else {
  console.log("Shipping Cost = #2000");
}

//rain probability checker
var cloudLevel = 0;
if (cloudLevel <= 2 && cloudLevel >= 1) {
  console.log("low chance of rain");
} else if (cloudLevel > 2 && cloudLevel <= 6) {
  console.log("fair chance of rain");
} else if (cloudLevel > 6 && cloudLevel <= 9) {
  console.log("high chance of rain");
} else {
  console.log("no chance of rain");
}

//decision control flow
//switch-case expression

var month = 2;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Non-first quarter month");
    break;
}

//traffic lights
var light = "green";
switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Light");
    break;
}

//fruits' prices
var fruit = "guava";
switch (fruit) {
  case "apple":
    console.log("Price is #1400");
    break;
  case "banana":
    console.log("Price is #500");
    break;
  case "orange":
    console.log("Price is #200");
    break;
  case "watermelon":
    console.log("Price is #600");
    break;
  default:
    console.log("Fruit is not available");
    break;
}

//weather forecast
var weather = "rainy";
switch (weather) {
  case "sunny":
    console.log("The weather is hot");
    break;
  case "cloudy":
    console.log("The weather is cool");
    break;
  case "rainy":
    console.log("The weather is cold");
    break;
  case "snowy":
    console.log("The weather is chilly");
    break;
  default:
    console.log("the weather feels normal");
    break;
}

//Game level
var level = "medium";
switch (level) {
  case "easy":
    console.log("Easy Level: you may defeat me");
    break;
  case "medium":
    console.log("Medium Level: good luck defeating me");
    break;
  case "hard":
    console.log("Hard Level: I am undefeatable");
    break;

  default:
    break;
}

//Areas of shapes
var shape = "triangle";

let R = 7;
const pi = 3.14;
let areaCircle = 2 * pi * R;
let length = 2;
let breadth = 4;
let areaRectangle = length * breadth;
let base = 8;
let height = 10;
let areaTriangle = 0.5 * base * height;

switch (shape) {
  case "circle":
    console.log(areaCircle);
    break;
  case "rectangle":
    console.log(areaRectangle);
    break;
  case "triangle":
    console.log(areaTriangle);
    break;
  default:
    console.log("Area not available");
    break;
}

//Language Translator
var language = "en";
switch (language) {
  case "en":
    console.log("Good Morning");
    break;
  case "es":
    console.log("Buenos Dias");
    break;
  case "fr":
    console.log("Bonjour");
    break;
  case "de":
    console.log("Guten Morgen");
    break;
  default:
    console.log("Language not available");
    break;
}

// let userInput = prompt("Enter President's Name");
// let response = "moi";
// console.log(response.length);
// if (userInput === response) {
//   console.log("You Are Correct!!!!");
// } else {
//   console.log("Nah! totally wrong!!");
// }

let userName = 'Mykolenko';
console.log(userName[0]);
console.log(userName[userName.length - 1]);

// let profileName = prompt('Enter Name')
// console.log(userName);

// let firstname = prompt('Enter Firstname');
// let lastname = prompt('Enter Lastname');
// let fullname = firstname + ' ' + lastname;
// console.log(fullname);

var path = 'C:/Users/User/Desktop/WEB/FIRST HTML/Peaky Blinders.jpg'
let backwardSlash = "/";
let forwardSlash = "*";
console.log(`before replace: ${path}`);

path = path.replaceAll(backwardSlash, forwardSlash);
console.log(`after replace: ${path}`);

var phoneNumber = '+2348149963099'
let extension = '+234';
let singleNumber = '0';
console.log(phoneNumber);

phoneNumber = phoneNumber.replace(extension, singleNumber);
console.log(phoneNumber);

// let thyName = prompt('Enter your name');
// let thyAge = prompt('Enter your age');
// console.log(`Hello ${thyName}, you are ${thyAge} years old`);

// thyName = thyName.toUpperCase;
// console.log(`Hello ${thyName}, you are ${thyAge} years old`);

// console.log(`Hello ${thyName.toUpperCase}, you are ${thyAge} years old`);




// let thyName = prompt('Enter thy name:');
// let thyAge = prompt('Enter thy age');
// let thyGreeting = `Hello ${thyName}, you are ${thyAge} years old`
// console.log(thyGreeting);
// thyName = (thyName.toUpperCase)
// console.log(thyName);

// let firstName = prompt('Enter Name')
// console.log(fullname);

// var gender = 'Male';
// let statement =  `mike is ${gender}`
// console.log(statement);

//PROMPT ASSIGNMENTS

// greeting message using prompt
// let nom = prompt("What is your Name?");
// let greeting = `Hello, ${nom}!`
// console.log(greeting);

//-----------------------------------

// age calculator using prompt
// let Age = prompt("What is your age?")
// var response;
// response = Age;
// let calculatedAge;
// if (response < 13){
//   calculatedAge = `${Age}, you are a still a child`
// } else if (response >= 13 && response < 17){
//   calculatedAge = `${Age}, you are a teenager`
// } else if (response >= 17 && response < 20){
//   calculatedAge = `${Age}, you are a young adult`
// } else if (response >= 20 && response < 40 ){
//   calculatedAge = `${Age}, you are a grown-up`
// } else if (response >= 40 && response < 60){
//   calculatedAge = `${Age}, you are middle-aged`
// } else if(response >= 60 && response < 71){
//   calculatedAge = `${Age}, you are getting old`
// } else{
//   calculatedAge = `${Age}, you are an aged person`
// }
// console.log(calculatedAge);


//-----------------------------------

// weather report using prompt
// let Weather = prompt("What's the weather like?");
// var response;
//  response = Weather;
// if (response === "hot"){
//   console.log("wear something light");  
// } else if(response === "cold"){
//   console.log("wear something thick");
// } else{
//   console.log("wear something comfortable");  
// }

//--------------------------------------------

//order summary using prompt
// let Name = prompt("What is your name?");
// let orderItem = prompt("What item are you ordering?");
// let quantity = prompt("How many do you want?");
// let orderSummary = `your name is ${Name}, you want ${quantity} of ${orderItem}`;
// console.log(orderSummary);

//--------------------------------------------

//score report using prompts
// let Score = prompt("What is your score in %?");
// var response;
// response = Score;
// let scorePrompt;
// if (response >= 70){
//     scorePrompt = `you scored ${response}%, you got an A`     
// } else if(response >= 65 && response < 70){
//     scorePrompt = `you scored ${response}%, you got an B`
// } else if (response >= 60 && response < 65){
//    scorePrompt = `you scored ${response}%, you got an C` 
// } else if(response >= 55 && response < 60){
//    scorePrompt = `you scored ${response}%, you got an D`
// } else if(response >= 50 && response < 55){
//    scorePrompt = `you scored ${response}%, you got an E`
// } else{
//    scorePrompt = `you scored ${response}%, you got an F`
// }
// console.log(scorePrompt);



/*
write a program that takes a name and age as input and logs a greeting message using string interpolation
a program that calculates the area of a rectangle usimg string interpolation. prompts user for length and width and logs the area of the rectangle
*/
