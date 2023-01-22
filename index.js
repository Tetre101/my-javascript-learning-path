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
