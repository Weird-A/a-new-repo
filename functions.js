// function sayHello() {
//     alert('hello world');
// }
// sayHello();

function greetPerson(person){
    console.log(`hello ${person}. howdy.`);   
}
// greetPerson('jane')

// let bro = 'shaun';
// greetPerson(bro);
// let personName = prompt('enter name here');
// greetPerson(personName);


function printToN(n) {
    for (let i = 2; i <= n; i+= 2) {
        console.log(i);
    }
}
printToN(8);
console.log('');

let fiveMultiples = [];
function printToFives(n) {
    for (let i = 0; i <= n; i+= 5) {
        console.log(i);
        fiveMultiples.push(i);
    }
}
printToFives(50);
console.log(fiveMultiples);

function addingMachine(x, y) {
    console.log(`${x} plus ${y} is ${x + y}`);
}
addingMachine(3, 5);

let weight_kg = 75;
console.log(`hi, i'm this. i weigh ${poundsToKg(weight_kg)} lbs`);
function poundsToKg(weight) {
    let pounds = weight * 0.45359237;

    return pounds;
}

// function isAdult(age) {
//     // return age = 18;
//     if (age >= 18){
//         return true;
//     } else {
//         return false;
//     }
// }
let isAdult = (age) => age >= 18;
console.log(isAdult(35));


// let userAge = Number.parseInt(prompt('enter age'));
// console.log(`it is ${isAdult(userAge)} that you are an adult`);

// function isEven(num) {
//     return num % 2 == 0;
// }

let isEven = (num) => num % 2 === 0;
let isMultipleOf5 = (num) => num % 5 === 0;
console.log(isMultipleOf5(5));


let rectangleArea = (length, width) => length * width;
console.log(rectangleArea(2, 4));

let toSmallLetter = (text) => text.toLowerCase();
console.log(toSmallLetter('ABASA'));

let circleArea = (pi, radius) => pi * radius ** 2
console.log(circleArea(Math.PI, 7));

let isTeenager = (age) => age > 12 && age < 20;
console.log(isTeenager(11));

let discountedPrice = (price, discount) => (price - ((discount / 100) *  price));
console.log(discountedPrice(1000, 20));

function containsValue(arr, value) {
    return arr.includes(value);
}
let someValues = containsValue([1,2,3,4,5], 2);
console.log(someValues);

// let name = [];
// name.filterEvenNumbers()
function isOdd(num) {
    return num % 2 == 1;
}



let shoppingCart = {
    bread: 1550,
    jam: 2600,
    apple: 600,
    toothbrush: 1350,
}
function totalCost(shoppingCart) {
    let total = 0;
    for (let cost of Object.values(shoppingCart)) {
        total += cost;
    }
    return total;
}
console.log(totalCost(shoppingCart));

//----------------------------------
function arrayAve(arr) {
    if (arr.length === 0) return0;
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}
console.log(arrayAve([2, 4, 5, 8, 7]));

//-----------------------------------
function evenNumSum(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(evenNumSum([2, 4, 5, 8, 1]));

//------------------------------------
function totalScore(scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total;
}
let theScore = totalScore([1, 2, 3, 4, 5]);
console.log(theScore);

//------------------------------------
function containsValue(arr, value) {
    for (let item of arr) {
        if (item === value) {
            return true;
        }
    }
    return false;
}
console.log(containsValue([1, 2, 3, 4, 5], 7));

//------------------------------------
function minValue(arr) {
    if (arr.length === 0) return null;
    let min = arr[0];
    for (let num of arr){
        if (num < min) {
            min = num
        }
    }
    return min;
}
console.log(minValue([3, 2, 6, 1, 9]));

//-------------------------------------
function oddNumSum(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            sum += num;
        }
    } 
    return sum;
}
console.log(oddNumSum([1, 2, 3, 4, 5]));

//-------------------------------------
function isObjectEmpty(obj) {
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}
console.log(isObjectEmpty({key: 1}));


