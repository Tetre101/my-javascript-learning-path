// let storeWall = document.createElement("h1");
// let assign = document.querySelector("div");
// storeWall.innerHTML = "H1 successfully created";
// body.appendChild(storeWall);

// let dogs = document.querySelectorAll('.img-dog');
// for(let dog of dogs){
//   dog.remove()
// }

// The box should be yellow,
// height should be 300px and width 400px
// The text should be 60px, centred
//  and colour should be 'lightblue'

// let pck = document.querySelector('.box')
// pck.style.backgroundColor = "red"
// pck.style.height = "300px"
// pck.style.width = "400px"
// let txt = document.querySelector('.title')
// txt.style.fontSize = "60px"
// txt.style.textAlign = "center"
// txt.style.color =  "lightblue"

// 🔬 Experiment:
// In this page, there are already some small boxes, and they have a specific CSS class box.
// Create a new box element with createElement add to this element the class box and then add it to the div container-boxes.
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Parcel Sandbox</title>
//     <meta charset="UTF-8" />
//     <link rel="stylesheet" href="./src/styles.css" />
//   </head>

//   <body>
//     <div class="container-boxes">
//       <h1>Create a third box</h1>
//       <div class="box"></div>
//       <div class="box"></div>
//     </div>

//     <script src="src/index.js"></script>
//   </body>
// </html>
// let newFrame = document.querySelector('.container-boxes')
// let newEl = document.createElement('div')
// newEl.classList.add("box")
// newFrame.appendChild(newEl)

// 🔬 Experiment:
// Try to change a few things on this code :

// When the user clicks on the image, it should change the image source and the alt text
// When the user hover the title, it should change the color of the text
// When the mouse leaves the title, the color should be back to black

// let dogLocation = document.querySelector(".img-dogs");
// let textLocation = document.querySelector(".title");

// dogLocation.addEventListener("click", function () {
//   dogLocation.src = "https://placedog.net/600";
//   dogLocation.alt = "sleeping dog";
//   console.log("click", dogLocation.alt);
// });

// textLocation.addEventListener("mouseover", function () {
//   textLocation.style.color = "red";
// });
// textLocation.addEventListener("mouseleave", function () {
//   textLocation.style.color = "black";
// });

// New Task
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Parcel Sandbox</title>
//     <meta charset="UTF-8" />
//     <link rel="stylesheet" href="./src/styles.css" />
//   </head>

//   <body>
//     <h1>Todo list App</h1>
//     <form id="form">
//       <label for="todo">Todo:</label>
//       <input
//         type="text"
//         name="todo"
//         placeholder="Flight to the moon"
//         id="todoInput"
//         value=""
//       />

//       <input type="submit" value="send" />
//     </form>
//     <h2>Todo:</h2>
//     <ul id="todolist">
//       <li>Build a spaceship</li>
//     </ul>
//     <script src="src/index.js"></script>
//   </body>
// </html>

// <!-- Create variables for the form,
// the input and the todolist (ul)
// Set an anonymous function to the form onsubmit property
//  (with the event parameter)
// Inside the function, use event.preventDefault
// to prevent the page from refreshing
// Then create another variable and use createElement
//  to create a new li node
// Inside this li element set the value of the input
//  (using innerHTML and input.value)
// Add the li inside the ul the element you've created
// Clear the value of the input so that the text
// doesn't stay (input.value = "") -->

// let formLocation = document.querySelector("#form");
// let todoLocation = document.querySelector("#todolist");
// let inputLocation = document.querySelector("#todoInput");

// formLocation.onsubmit = function (event) {
//   event.preventDefault();
//   let li = document.createElement("li");
//   li.innerHTML = inputLocation.value;
//   todoLocation.appendChild(li);
//   inputLocation.value = "";
// };

// NewTask

{
  /* <head>
<title>Parcel Sandbox</title>
<meta charset="UTF-8" />
<link rel="stylesheet" href="./src/styles.css" />
</head>

<body>
<div id="app"></div>
<ul>
  <button class="dropdown-btn">Click here</button>
  <div class="dropdown-menu-content">
    <li>🐱 Link 1</li>
    <li>🐹 Link 2</li>
    <li>🦊 Link 3</li>
    <li>🐻 Link 4</li>
    <li>🐼 Link 5</li>
    <li>🐻 Link 6</li>
    <li>🐨 Link 7</li>
  </div>
</ul>
<script src="src/index.js"></script>
</body>
</html> */
}

// let dropdownMenu = document.querySelector(".dropdown-menu-content");
// let btnLocation = document.querySelector(".dropdown-btn");
// btnLocation.addEventListener("click", function () {
//   dropdownMenu.classList.toggle("visible");
// });

// NewTask
// 🔬Experiment
// Use your DOM knowledge to display and update the position of the mouse anytime the user moves the mouse on the screen.
// You need to use innerHTML and a template string to change the text of title-cursor-position.
// let cursorPositions = document.querySelector("#title-cursor-position");
// document.body.addEventListener("mousemove", function (event) {
//   cursorPositions.innerHTML = `X: ${event.clientX} Y:${event.clientY}`;
// });

// NewTask ADOPT A CAT

// cardBody: a div with the class card-body added to card
// cardTitle: a h2 with the class card-title, change the innerHTML with the title argument and add it to the cardBody
// cardButton: a button with the class card-button, the InnerHTML "Adopt Now" and add it to the cardBody
// Once you've finished, now, create a for loop, that goes through the animalsToAdopt array and create one card for every element of the array.

// const cards = document.querySelector(".cards");

// const animalsToAdopt = [
//   {
//     name: "Lucky",
//     picture: "https://placekitten.com/200/287"
//   },
//   {
//     name: "Symba",
//     picture: "https://placekitten.com/200/139"
//   },
//   {
//     name: "Léo",
//     picture: "https://placekitten.com/200/90"
//   },
//   {
//     name: "Milo",
//     picture: "https://placekitten.com/200/194"
//   },
//   {
//     name: "Charly",
//     picture: "https://placekitten.com/200/179"
//   }
// ];

// function createCard (title, imageUrl) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   cards.appendChild(card);

//   const cardHeader = document.createElement("div");
//   cardHeader.classList.add("card-header");
//   card.appendChild(cardHeader);

//   const cardImg = document.createElement("div");
//   cardImg.style.backgroundImage = `url(${imageUrl})`;
//   cardImg.classList.add("card-img");
//   cardHeader.appendChild(cardImg);

//   let cardBody = document.createElement('div')
//   cardBody.classList.add('card-body')
//   card.appendChild(cardBody)

//   let cardTitle = document.createElement('h2')
//   cardTitle.classList.add('card-title')
//   cardTitle.innerHTML = `${title}`
//   cardBody.appendChild(cardTitle)

//   let cardButton = document.createElement('button')
//   cardButton.classList.add('card-button')
//   cardButton.innerHTML = "Adopt Now"
//   cardBody.appendChild(cardButton)

// for(let i = 0; i < animalsToAdopt.length; i++){
//   createCard(animalsToAdopt[i].name,animalsToAdopt[i].picture)
// }

// Step1: Create the cardBody div,
// add the class card-body and add it to the card

// Step2: Create the cardTitle h2,
// add the class card-title,
// set the text inside the tag to the "title" parameter of this function
// and add it to the cardBody

// Step3: Create the cardButton button, add the class card-button,
// set the text inside the tag to be "Adopt Now"
// and add it to the cardBody
// }
// for(let i of animalsToAdopt){
//   createCard(i.name, i.picture)
// }
/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */

// New Task

//  Object Oriented Programming

// Create a new factory function for the heroes!

// The heroes should have a name, a level, a weapon and a function to say hello
//  that returns a sentence with their name.

// Then create two heroes calling the function.

// Write the constructor function here

// function createHero(name, level, weapon) {
//     const hero = {};
//     hero.name = name;
//     hero.level = level;
//     hero.weapon = weapon;

//     hero.greetings = function () {
//       return `Hello my name is ${this.name}`;
//     };
//     return hero;
//   }

//   const heroes = [
//     createHero("spiderman", 4, "web"),
//     createHero("Hulk", 5, "Hammer")
//   ];

//   console.log(heroes);

// Using Constructor function

// Now, create the same function for the heroes.
// function Heroes(name, level, weapon) {
//     this.name = name;
//     this.level = level;
//     this.weapon = weapon;

//     this.greetings = function () {
//       return `${this.name} says Hello`;
//     };
//   }

//   const general = new Heroes("spiderman", 4, "web");
//   console.log(general.greetings(), general);

// Classes
// 🔬 Experiment:
// Create a class for our heroes.

// class Hero {
//     constructor(name, level, weapon) {
//       this.name = name;
//       this.level = level;
//       this.weapon = weapon;
//     }

//     greetings() {
//       return `Hello to ${this.name}`;
//     }
//   }

//   const Heroes = [
//      new Hero("spiderman", 4, "web"),
//      new Hero("Batman", 3, "bat")
// ];

//   console.log(Heroes[1].greetings());

// Object Oriented Programming - Prototypes

// function Hero(name, level, weapon) {
//   this.name = name;
//   this.level = level;
//   this.weapon = weapon;
// }

// Hero.prototype.greetings = function() {
//   return `Hello to ${this.name}`;
// }

// const Heroes = [
//  new Hero("spiderman", 4, "web"),
//  new Hero("Batman", 3, "bat")
// ];

// console.log(Heroes[1]);
// understanding how js works under the hood and how to avoid calling functions multiple times but just when it is needed

// Task
// You have function with one side of the DNA, you need to get the other complementary side.
// The DNA strand may be empty if there is no DNA at all. In this case, you can simple return the empty string.

// Specification
// dnaComplement(dna)
// Parameters
// dna: String - DNA strand

// Return Value
// String - A new string generated by returning the complement of the input strand.

// Constraints
// It will always be a string, but it might be empty.

// It will never be null/nil or undefined.

// Examples
// dna	Return Value
// "A"	"T"
// "T"	"A"
// "C"	"G"
// "G"	"C"
// "ATTGC"	"TAACG"
// ""	""
// const dnaComplement = (dna) => {
//   let dnaArray = dna.split("");
// console.log(dnaArray);
// if (dna === "") return "";

// let returnedResult = [];
// for (let i = 0; i < dnaArray.length; i++) {
//   if (dnaArray[i] === "A") returnedResult.push("T");
//   if (dnaArray[i] === "T") returnedResult.push("A");
//   if (dnaArray[i] === "C") returnedResult.push("G");
//   if (dnaArray[i] === "G") returnedResult.push("C");
// }
// console.log(returnedResult)
//   newResult = returnedResult.join("");
//   return newResult;
// };

// console.log(dnaComplement("G"));
// console.log(dnaComplement("T"));
// console.log(dnaComplement("C"));
// console.log(dnaComplement(""));
// console.log (dnaComplement("TTCGGA"));
// dnaComplement(
// 	"TATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAGTATTCAAG"
// );
// dnaComplement("");

// function logArray(array = [1, 6, 8, 9]) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// logArray([5, 8, 9, 0]);

// function sum(a, b) {
//   return a + b
// }

// equivalent to
// const sum = (a, b) => { return a + b };

// also equivalent to
// const sum = (a,b) => a + b;

// variable declaration
// const leads = {
// name: "john",
// age:43,
// height:1.4,
// }

// let {name,age,height} = leads
// console.log(height);

// IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log(`second phase trials`);
// })();

// Understanding Higher order function and passing another function as an arguement to it(callback function)
// function sayHello(userName) {
//   console.log(`Hello, ${userName}`);
// }

// function sayWelcome(userName) {
//   console.log(`Welcome, ${userName}`);
// }

// function askUserName(callback) {
//   const name = prompt("Hey, what's your name?");
//   callback(name);
// }

// askUserName(sayWelcome);
// askUserName(sayHello);

// function sum (num){
// console.log(2 + num)
// }

// function multip (num){
//   console.log(2 * num)
// }

// function calculator (solve){
//   const result = 10
//   solve(result)
// }

// calculator(sum)
// calculator(multip)

// 🔬Experiment
// Create two functions:

// A function multiply that can accept two parameters a and b: the function should  return the result of a * b.
// A function sum that can accept two parameters a and b: the function should return the result of a + b.
// Then, create a higher-order function calculator that can accept three parameters: a callback function,
// and two values a and b. Your calculator function should console.log :

// "The result is" + the result of the callback function with a and b as arguments

// function sum(a, b) {
//   console.log(a + b);
// }
// function multiply(a, b) {
//   console.log(a * b);
// }

// function calculator(callback, a, b) {
//   callback(a, b);
// }

// calculator(multiply, 2, 4);

// function sum(a,b){
//   return a + b
// }
// function multiply (a,b){
//   return a * b
// }

// function calculator(callback,a,b){
//   console.log(`the result is ${callback(a,b)}`)

// }
// calculator(sum,5,7)
// calculator(multiply,4,5)

// Array Methods

// Map
// const numbers = [3, 5, 6, 9, 4];
// const double = numbers.map((el) => el * 3);
// console.log(double);

// Use map to create a new array that contains the animal's name and species as a sentence.
// const animals = [
//   { name: "Hector", species: "Beaver" },
//   { name: "Edouard", species: "Duck" },
//   { name: "José", species: "Boar" },
//   { name: "Charlotte", species: "Groundhog" },
//   { name: "Mireille", species: "Bee" },
//   { name: "Leon", species: "Hornet" },
//   { name: "Fedor", species: "Pig" }
// ];
// const fix = animals.map((e)=>{
//   return `${e.name} is a ${e.species}`
// })
// console.log(fix)

//
// const newDetails = animals.map(e=> `${e.name} is from ${e.species} specie`
// )
// console.log(newDetails)

// Using the index parameter

// const animals = [
//   { name: "Hector", species: "Beaver" },
//   { name: "Edouard", species: "Duck" },
//   { name: "José", species: "Boar" },
//   { name: "Charlotte", species: "Groundhog" },
//   { name: "Mireille", species: "Bee" },
//   { name: "Leon", species: "Hornet" },
//   { name: "Fedor", species: "Pig" },
// ];

// const sentences = animals.map(
//   (animal, index) => `${animal.name} the ${animal.species}, the number ${index}`
// );

// console.log(sentences);

// ForEach
// const numbers = [1, 2, 5, 7];
// numbers.forEach((num) => {
//   console.log(num * 2);
// });
// What's the difference with map?!?
// Map will generate a new array. ForEach is just doing an action for every array element.

// What you have
// const animals = [
//   { name: "Hector", species: "Beaver", emoji: "🦫" },
//   { name: "Edouard", species: "Duck", emoji: "🦆" },
//   { name: "José", species: "Boar", emoji: "🐗" },
//   { name: "Mireille", species: "Bee", emoji: "🐝" },
//   { name: "Fedor", species: "Pig", emoji: "🐷" }
// ];

// // Type your code here
// const list = document.querySelector('.animal-list')
// animals.forEach((e)=>{
// const newLi = document.createElement("li")
// newLi.innerHTML = `${e.emoji} - ${e.name}`
// list.appendChild(newLi)
// })
/* 
💡 HINT
- First, you need to select the list.
- Then use forEach, for each animal we want to create
a new li element 
- Then we want to set the text inside the li to 
  - animal.emoji - animal.name
= Then we want to add the element to the li. 
*/
// Notice**
// Every and foreach do not return a new array
// and are therefore implemented in a similar way.
// However, foreach returns values but every returns booleans

// Every
// The every method checks if all the arrays element matches with a condition.
//  The result of every is a boolean.
// const myArray = [12, 34, 54, 32, 54];
// console.log(myArray.every((e) => e >= 10));

// const teamOne = [
//   {
//     name: "Bob",
//     age: 19
//   },
//   {
//     name: "Pierre",
//     age: 17
//   },
//   {
//     name: "Karl",
//     age: 16
//   },
//   {
//     name: "Ryan",
//     age: 21
//   }
// ];

// const teamTwo = [
//   {
//     name: "Nadia",
//     age: 19
//   },
//   {
//     name: "Hector",
//     age: 20
//   },
//   {
//     name: "Maria",
//     age: 25
//   },
//   {
//     name: "Bryan",
//     age: 21
//   }
// ];

// function checkIfAdult(array) {
// Type your code here
//  let result = array.every(e=> e.age >= 18)
//  if(result){
//  console.log('All the player have the required age to play')
// }else{
//   console.log(`At least one of the team player doesn't have the minimum age`)
// }}

// checkIfAdult(teamOne);

// checkIfAdult(teamTwo);

// SOME
// The some method is very similar to every,
// except one element verifying the condition is enough for the method to return true.
// const myArray = [11, 34, 54, 32, 54];
// console.log(myArray.some(element => element > 30));

// Filter
// The filter method will create a new array
// with only the elements that verify a condition.

// const myArray = [3, 2, 40, 15, 20];
// const numMax = myArray.filter((e) => e >= 5);
// console.log(numMax);

// const animals = [
//   {
//     name: "Oscar",
//     species: "Dog"
//   },
//   {
//     name: "Max",
//     species: "Cat"
//   },
//   {
//     name: "Tiger",
//     species: "Cat"
//   },
//   {
//     name: "Sam",
//     species: "Dog"
//   },
//   {
//     name: "Ginger",
//     species: "Cat"
//   },
//   {
//     name: "Gizmo",
//     species: "Dog"
//   },
//   {
//     name: "Billy",
//     species: "Cat"
//   }
// ];

// // Your code here
// const catDoc = animals.filter((e) => {
//   return e.species === "Cat";
// });
// console.log(catDoc);

// Reduce
// The reduce method will reduce the array to a single value.
// const myArray = [13, 200, 404, 430, 10];
// let result = myArray.reduce((acc, e) => acc - e);
// console.log(result);
// const myArray = [13, 200, 404, 430, 10];
// let result = myArray.reduce((acc, currentVl)=>{
//   console.log(currentVl);
//   return acc + currentVl
// }, 100)
// console.log(result);

// Destructuring assignments
// 🪓 Decompose and rule
// Object Destructuring
// const product = { name: "socks", price: 5, color: "red" };
// const name = product.name;
// const price = product.price;
// const color = product.color;

// console.log(`Those ${color} ${name} cost ${price} euros`);

// Destructuring allows us to greatly reduce the amount of code :

// const product = { name: "socks", price: 5, color: "red" };
// const { name, price, color } = product;
// console.log(`Those ${color} ${name} cost ${price} euros`);
// Here, we declare variables with the same name as the keys of the object on which we extract things.

// Arrays Destructuring
// This code is way to verbose :

// const animals = ["Hubert", "Rosemary", "Paul"];
// const hamster = animals[0];
// const kiwi = animals[1];
// const guineaFowl = animals[2];

// console.log(hamster); // "Hubert"
// console.log(kiwi); // "Rosemary"
// console.log(guineaFowl); // "Paul"
// Luckily, destructuring also works with arrays ! The syntax, is a bit different :

// const animals = ["Hubert", "Rosemary", "Paul"];
// const [hamster, kiwi, guineaFowl] = animals;

// console.log(hamster); // "Hubert"
// console.log(kiwi); // "Rosemary"
// console.log(guineaFowl); // "Paul"

// const fruits = ["🍏", "🍍", "🥝", "🥑", "🍒", "🍓"];

// Write your code here
// const[apple, pineapple, kiwi, avocado,berries,strawberries] = fruits
// console.log(apple)

// Spread/Rest

// Object
// const product = { name: "socks", price: 5, color: "red" };
// const { price, ...otherProperties } = product;

// console.log(price);
// console.log(otherProperties)

// Arrays
// const animals = ["Hubert", "Rosemary", "Paul", "Pierre"];
// const [hamster, kiwi, ...others ] = animals;

// console.log(hamster); // "Hubert"
// console.log(kiwi); // "Rosemary"
// console.log(others); // ["Paul", "Pierre"];

// Experiment
// const fruits = ["🍏", "🍍", "🥝", "🥑", "🍒", "🍓"];

// Write your code here
// const[apple,pineapple, ...otherProducts] = fruits
// console.log(otherProducts)

// const people = [
//   "JoHn",
//   "ChrISTiana",
//   "anThoNY",
//   "MARia",
//   "jaMeS",
//   "MIChaEl",
//   "jeNNIFeR",
// ];
// const result = [];
// let result2 = [];
// const refactor = (names) => {
//   for (let i = 0; i < names.length; i++) {
//     let nameArray = names[i].split("");
//     for (let j = 0; j < nameArray.length; j++) {
//       if (j === 0) {
//         if (nameArray[j] != nameArray[j].toUpperCase()) {
//           const new1 = nameArray[j].toUpperCase();
//           result2.push(new1);
//         } else {
//           result2.push(nameArray[j]);
//         }
//       } else {
//         result2.push(nameArray[j].toLowerCase());
//       }
//     }
//     result.push(result2.join(""));
//     result2 = [];
//   }

//   console.log(result);
// };

// const bigDaddy = (people, callback) => {};
// refactor(people);

// const results = [];
// let results2 = [];
// const refactor2 = (names) => {
//   for (let name of names) {
//     let nameArray = name.split("");

//     for (let nameA of nameArray) {
//       if (nameArray.indexOf(nameA) === 0) {
//         nameA != nameA.toUpperCase()
//           ? results2.push(nameA.toUpperCase())
//           : results2.push(nameA);
//       } else {
//         results2.push(nameA.toLowerCase());
//       }
//     }
//     results.push(results2.join(""));
//     results2 = [];
//   }

//   console.log(results);
// };

// const bigDaddy2 = (people, callback) => {
//   callback(people);
// };
// refactor2(people);

// bigDaddy2(people, refactor2);

// const results = [];
// let results2 = [];
// const refactor2 = (names) => {
//   names.forEach((e, i) => {
//     let err = e.split("");
//     err.forEach((f, g) => {
//       if (err.indexOf(f) === 0) {
//         f !== f.toUpperCase()
//           ? results2.push(f.toUpperCase())
//           : results2.push(f);
//       } else {
//         results2.push(f.toLowerCase());
//       }
//     });
//     results.push(results2.join(""));
//     results2 = [];
//   });
// };

// const bigDaddy2 = (people, callback) => {
//   callback(people);
// };
// refactor2(people);

// bigDaddy2(people, refactor2);

// console.log(results);

// Exercise

// PART 1
// Given an array with different objects inside that contain an instructor profile with his/her name, the availability and the specialities, you need to create a new array that contains only instructors that know about Javascript and available on the weekend. Keep in mind that if their availability is all, it means that they are also available on the weekend, so they need to be included too.

// PART 2
// Iterate over that new array of instructors available and show a message per instructor saying:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class

// PART 3
// Modify the previous message checking that if an instructor also knows about Python, the message needs to be:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop

// const instructors = [
//   {
//     name: 'John',
//     availability: 'all',
//     specialities: ['Javascript', 'Python', 'C++']
//   },
//   {
//     name: 'Mary',
//     availability: 'weekend',
//     specialities: ['Javascript', 'Ruby', 'C++']
//   },
//   {
//     name: 'Chris',
//     availability: 'evenings',
//     specialities: ['Javascript']
//   },
//   {
//     name: 'Anthony',
//     availability: 'all',
//     specialities: ['Python', 'Ruby']
//   },
//   {
//     name: 'Pauline',
//     availability: 'only Mondays',
//     specialities: ['Javascript', 'Html', 'CSS']
//   },
//   {
//     name: 'Mark',
//     availability: 'all',
//     specialities: ['C#', 'C++', 'Javascript']
//   },
//   {
//     name: 'Helen',
//     availability: 'evenings',
//     specialities: ['Python', 'C++']
//   },
//   {
//     name: 'Charles',
//     availability: 'none',
//     specialities: ['Python']
//   }
// ];

// const instrArray = []

// for(let i = 0; i < instructors.length; i++){
// if(instructors[i].availability === 'all' || instructors[i].availability === 'weekend'){
//   const store1 = instructors[i].specialities
//   if(store1.includes('Javascript')){
//     instrArray.push(instructors[i])
//   }
// }

// }
// const result = instructors.filter((e)=>{
//  if(e.availability === 'all' || e.availability === 'weekend'){
//   const store1 = e.specialities
//   if(store1.includes('Javascript')){
//     return e
//   }
// }
// })

// result.forEach((e)=>{
//   const store = e.specialities
//   if(store.includes("Python")){
//    console.log(`Hi ${e.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`)
// }})

// for(let j = 0; j < instrArray.length; j++){
//   const store = instrArray[j].specialities
//   if(store.includes("Python")){
//    console.log(`Hi ${instrArray[j].name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`)
//   }

// }

//   console.log(instrArray)
// console.log(result)
// function getData() {
//   fetch("https://swapi.dev/api/people")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data.results[1].films);
//     });
// }

// setTimeout(getData, 4000);

// function fetchGitHubProfileJSON() {
//   const username = 'defunkt';
//   const url = `https://api.github.com/users/${username}`;
//   fetch(url)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(profile) {
//       const profileHtml = `
//         <p><strong>${profile.name}</strong></p>
//         <img src="${profile.avatar_url}" />
//       `;
//       document.querySelector('#github-profile').innerHTML = profileHtml;
//     });
// }

// fetchGitHubProfileJSON();

// function fetchPokemonJSON() {
//   // Feel free to download this HTML and edit it, to use another Pokemon ID
//   const pokemonId = 1;
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
//   axios
//     .get(url)
//     .then(function (response) {
//       return response.data; // response.data instead of response.json() with fetch
// })
// .then(function (pokemon) {
//   console.log("data decoded from JSON:", pokemon);

// Build a block of HTML
//       const pokemonHtml = `
//         <p><strong>${pokemon.name}</strong></p>
//         <img src="${pokemon.sprites.front_shiny}" />
//       `;
//       document.querySelector("body").innerHTML = pokemonHtml;
//     });
// }

// fetchPokemonJSON();

// async function asyncLearn() {
//   try {
//     const url = `https://api.chucknorris.io/jokes/random`;
//     const fetch = await axios.get(url)
//     const data = await fetch.json();
//     return data.value;
//   } catch (error) {
//     console.log(error);
//   }
// }
// asyncLearn();

// Async and await
// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();

// async function getResult(){
//  const answer =  await resolveAfter2Seconds();
//   console.log(answer);
// };
// getResult();

// Using an arrow function
// const getResult= async ()=>{
//   const answer = await resolveAfter2Seconds();
//   console.log(answer);
// }

// USING TRY CATCH IN ASYNC AND AWAIT
// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   try {
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//   } catch (error) {
//     console.log("error found");
//   }
// }
// asyncCall();
