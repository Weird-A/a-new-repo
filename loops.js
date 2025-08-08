//--------exercise 1------------
// let thyName = prompt('Enter your name');
// let thyAge = prompt('Enter your age');
// // let output = `Hello ${thyName.toUpperCase}, you are ${thyAge} years old.`;
// console.log(`Hello ${thyName}, you are ${thyAge} years old.\n Hello ${thyName.toUpperCase}, you are ${thyAge} years old.`);
// // console.log(output);

//---------exercise 2-----------
// let password = prompt('Enter your password');
// let valid = password.length >= 8 && password[0] === password[0].toUpperCase();
// if (valid){
//     console.log('Password valid');
// } else{
//     console.log('Password invalid');
// }

//---------exercise 3-----------
// let Sentence = prompt('Enter sentence');
// let trimmed = Sentence.trim();
// let newSentence = trimmed.replace(/\s+/g, ' ');
// console.log(newSentence);

//---------exercise 4-----------
// let poem = '\t Roses are red,\n\t Violets are blue,\n\t I like food,\n\t And so do you too.'
// console.log(poem);

//---------exercise 5'Enter email here');
// let [userID, domain] -----------
// let email = prompt(= email.split('@');
// let firstThree = userID.slice(0,3);
// let maskedName = firstThree + '*'.repeat(userID.length - 3);
// let maskedEmail = `${maskedName}@${domain}`;
// console.log(maskedEmail);

let nums = [3, 4, 5, 8, 0, 6];
let names = ["Nwaneri", "Tsimikas", "Bradley", "Savinho", "Khivcha"];
console.log(names[2] + " " + nums[3] + nums[5]);
console.log(names.length);
console.log(names.indexOf("Tsimikas"));
names.push("Jota");
console.log(names);
// yourName = prompt('Enter your name');
// names.push(yourName)

// var threeLetteredWord = ['sea'];
// var word = prompt('Enter word');
// if (word.length === 3) {
//     threeLetteredWord.push(word)
// } else{
//     console.log('Invalid word');
// }
// console.log(threeLetteredWord);

// var players = ['Diogo', 'Goncalo', 'Barcola', 'Kvaratskhelia'];
// let player = prompt('Enter player');
// if (player === players[0]){
//     console.log('you are right');
// } else {
//     console.log('you are so wrong');
// }

// var fullNames = ["Aribisala Ojo", "Bukayo Tomori", "Lewis Skelly"];
// let yourFullName = prompt("Enter full name here");
// yourFullName = yourFullName.trim();
// fullNames.push(yourFullName);
// console.log(fullNames);

// var colours = ['red', 'blue', 'yellow','green', 'purple'];
// console.log(colours[1] + ' ' + colours[3]);

// var numbers = [10, 20, 30];
// number = prompt('Enter a number:');
// numbers.push(number);
// console.log(numbers);

// let sentence = prompt('Enter a sentence');
// let response;
// response = sentence;
// response.split(' ').length;
// console.log(response);



// let friends = ['tegbe', 'peteru', 'omoade'];
// let aFriend = prompt('Enter a name;');
// friends.unshift(aFriend);
// console.log(friends);

// console.log(friends.indexOf(aFriend));

for (let counter = 0; counter < 20; counter += 3) {
    console.log(counter);
}
// for (let counter = 0; counter < 100; counter += 5){
//     console.log(counter);
// }

for (let counter = 24; counter > 2; counter -= 6) {
    console.log(counter);
}

let secret = Math.floor(Math.random() * 6 + 1);
// console.log(secret);

// let attempts = 3;
// while (attempts > 0) {
//     console.log(`Attempts left: ${attempts}`);
    
//     let userGuess = Number.parseInt(prompt('Guess a number'));
//     // if (userGuess >= 1 && userGuess <= 6) {
//         if (userGuess === secret) {
//             console.log('correct');
//             break;
//         } else {
//             console.log('wrong!');
//             attempts--;

//             if(attempts == 0){
//                 console.log('Game over');
//                 break;
//             }
//         }
// }


for (let i = 1; i <= 3; i++){
    for(let j = 1; j< 13; j++){
        console.log(`${i} * ${j} = ${i * j}`);    
    }
    console.log('\n');
}

var x = 2;
do {
    console.log(x);
    x += 2;
} while (x <= 20);


let book = {
    title: 'trials of john doe',
    author: 'john doe',
    year: 2012,
} 
console.log(book.author);

book['publisher'] = 'oxford university press'
console.log(book.publisher);

book['year'] = 2019;
console.log(book.year);

delete book['author']
console.log(book.author);

let person = {
    nom: 'jane doe',
    age: 23,
}
if ('age' in person){
    console.log(true);
} else {
    console.log(false);
}

person['city'] = 'new york';
person['country'] = 'U.S.A';




// let user = {};
// user['name'] = prompt('enter your name');
// user['age'] = Number.parseInt(prompt('enter your age'));
// user['D.O.B'] = prompt('enter your D.O.B');
// console.log(user);
// console.log(`in 10 years time you'll be ${user.age + 10} years old`);

let Jin = {
    name: 'Jin',
    age: 10,
    scores: [4, 6, 1, 7]
}
let Chris = {
    name: 'Chris',
    age: 12,
    scores: [3, 6, 3, 6]
}

let school = {
    name: 'XYZ schools',
    students: [Jin, Chris],
    principal: {
        name: 'Mr. Lee'
    }
}
console.log(school.principal.name);
console.log(school.students[0].age + school.students.at(1).age);

// let sum = 0;
// for (let index = 0; index < school.students.at(1).scores.length; index++) {
//     sum += school.students.at(1).scores[index];  
// }
// sum = sum * 1;

let sum = 0;
for( let score of school.students[1].scores){
    sum += score;
}
console.log(sum);


let hueySum = 0;
for( let score of school.students[0].scores){
    hueySum += score;
}
console.log(hueySum / school.students[0].scores.length);













/*
deletion:
pop for last
shift for first

addition:
push for last
unshift for first
*/
