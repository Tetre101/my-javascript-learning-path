// let storeWall = document.createElement("h1");
// let assign = document.querySelector("div");
// storeWall.innerHTML = "H1 successfully created";
// body.appendChild(storeWall);

const { isType } = require("graphql");

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
