// "use strict";

const { application } = require("express");

// const { convertNodeHttpToRequest } = require("apollo-server-core");

// // const { canTreatArrayAsAnd } = require("sequelize/types/utils");

// // const e = require("express");

// // let hasDriversLicense = false;
// // const passTest = true;

// // if(passTest) hasDriversLicense = true;
// // if(hasDriversLicense){
// //     console.log(`i can drive`)
// // }

// // functions
// // a piece of code we can reuse similar to variable but holds chunks of codes
// // function logger (){
// // console.log(`get the fuck out`)
// // }
// // logger();
// // logger();
// // logger();

// // (
// // function fruitProcessor(apples, oranges){
// //     console.log(apples,oranges);
// //     const juice = `juice with ${apples} apples and ${oranges} oranges`
// //     return juice;
// // }
// // const applejuice = fruitProcessor(5,0);
// // console.log(applejuice)

// // function garriMachine(cassava, water){
// //     const finalResult = `final result will have ${cassava} paints of cassava and ${water} buckets of water`
// //     return finalResult
// // }
// // console.log(garriMachine("beans", "moi-moi"));
// // const farmersWill = garriMachine(8,5)
// // console.log(farmersWill)

// // Function declaration vs expression
// // the parameter is the placeholder in the function e.g cassava, water as above
// //  and the arguement is the actual value that was used to fill in the placeholder e.g 8,5 as above.
// // Function Declaration
// // function calcAge1(birthYear){
// //     const age = 2037 - birthYear
// //     return age;
// // }
// // const age1 = calcAge1(1991);
// // const age2 = calcAge1(2022)
// // console.log(age1, age2)

// // Function expression
// // const calcAge2 = function (birthYear){
// //     const age3 = 2037 - birthYear
// //     return age3;
// // or
// // return 2037 - birthYear
// // }
// // const age = calcAge2(1991)
// // console.log(age)

// // function declarations can be called before they're defined in a code
// // but that's not possible with expressions

// // Arrow Functions
// // const yearUntilRetirement =(birthYear, firstName)=>{
// // const age = 2037 - birthYear;
// // const retirement = 65 - age;
// // return `${firstName} retires in ${retirement} years
// // `;
// // }
// // console.log(yearUntilRetirement(1991,"cynthia"))
// // console.log(yearUntilRetirement(1980, "Ben"))

// // Functions calling other functions

// // const cutPieces = function(fruit){
// //     return fruit * 4 ;
// // }

// // function fruitProcessor(apples, oranges){
// //     const applePieces = cutPieces(apples);
// //     const orangePieces = cutPieces(oranges)
// //         console.log(apples,oranges);
// //         const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`
// //         return juice;
// //     }
// //     console.log (fruitProcessor(2,4))

// // Reviewing Functions

// // function calcAge (birthYear){
// //     return 2037 - birthYear;
// // }
// // const yearUntilRetirement = function(birthYear, firstName){
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0){
// //         return retirement
// //     }else {
// //         return 0
// //     }

// //     }
// //     console.log (yearUntilRetirement(1990, "john"));
// //     console.log (yearUntilRetirement(1950, "christopher"));

// // coding challenge
// // const calcAverage = (a,b,c)=>{
// // return (a + b + c) / 3
// // }
// // console.log(calcAverage(12,8,10))

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65,54,49)
// // console.log(scoreDolphins, scoreKoalas)

// // const checkWinner = function (avgDolphins, avgKoalas) {
// //     if (avgDolphins >= 2 * avgKoalas) {
// //         console.log(`Dolphins won`)
// //     } else if ( avgKoalas >= 2 * avgDolphins){
// //         console.log(`Koalas won`)
// //     }else{
// //         console.log(`No winner`)
// //     }
// // }
// // console.log(checkWinner(scoreDolphins,scoreKoalas))
// // checkWinner(scoreDolphins, scoreKoalas)

// // // Test 2
// // scoreDolphins = calcAverage(85,54,41)
// // scoreKoalas = calcAverage(23,34,27)
// // console.log(scoreDolphins,scoreKoalas)
// // checkWinner(scoreDolphins,scoreKoalas)

// // Introduction to Arrays
// // const friends = ['micheal', 'steven', 'paul'];
// // console.log(friends[0]) index of the array
// // console.log(friends.length) length of array
// // console.log(friends[friends.length - 1]) last element of the array
// // friends [2] = 'jay'  //this replaces the array on that spot with the new name
// // console.log(friends)

// // const firstName = 'johnson'
// // const johnson = [firstName, 'keeny', 2037 - 1994,'student',friends]
// // console.log(johnson)

// // function calcAge (birthYear){
// //         return 2037 - birthYear;
// //     }
// // const years = new Array(1990,1994,1995,1997,1999)
// // // console.log(years)
// // const age1 = calcAge(years[0])
// // const age2 = calcAge(years[2])
// // const age4 = calcAge(years[years.length -1 ])
// // console.log(age1, age2, age4)

// // const ages = [age1, age2, age4]
// // console.log(ages)

// // Basic Array Operators
// // const friends = ['micheal', 'steven', 'paul'];
// // adds element to end of array
// // friends.push(`jay`);
// // console.log(friends)

// // adds element at the begining of an array
// // friends.unshift(`john`)
// // console.log(friends)

// // removes last element of array
// // friends.pop()
// // console.log(friends)

// // removes first element
// // friends.shift()
// // console.log(friends)

// // find the position and returns the position number
// // console.log(friends.indexOf(`paul`))

// // looks for the element if it's in the array and returns true or false
// // console.log(friends.includes(`paul`))
// // console.log(friends.includes(`Peter`))

// // const calcTip = (bill)=>{
// // return bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.20;
// // }
// // const bill = new Array(125, 555, 44)
// // const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// // const totals = [bill[0] + tip[0],bill[1] + tip[1],bill[2] + tip[2]]
// // console.log(bill, tip, totals)

// // objects
// // const jonasArray = [
// //     'jonas',
// //     'martinez',
// //     2037-1991,
// //     'teacher',
// //     ["micheal", "john"," paul"]
// // ];

// // const jonas = {
// //     firstName: 'jonas',
// //     lastName: 'Martinez',
// //     age: 2037 -1991,
// //     job:"teacher",
// //     friends: ["micheal", "john"," paul"]
// // };
// // an object provides the opportunity of a property to define the elements of Jonas

// // retrieving and changing data in an object using dot vs bracket notation

// // const jonas = {
// //     firstName: 'jonas',
// //     lastName: 'Martinez',
// //     age: 2037 -1991,
// //     job:"teacher",
// //     friends: ["micheal", "john"," paul"]
// // };
// // console.log(jonas.lastName)
// // console.log(jonas["lastName"])

// // const nameKey = 'Name';
// // console.log(jonas['first' + nameKey])
// // console.log(jonas['last' + nameKey])
// // console.log(jonas.friends[2])
// // console.log('shitty'+ nameKey)

// // const interest = prompt(`what do you want to know about jonas ? chhose between firstName, lastName, age, job and friends`)
// // console.log(interest)
// // console.log(jonas[interest]) accessing an object using the square bracket
// // jonas.location = 'Germany';
// // jonas['twitter'] = `@tetre101`;
// // console.log(jonas)

// // let a = 4
// // let b = 4
// // let c = 4

// // if(a === b && b === c){
// //     console.log("the 3 are equal")
// // }else if(a === b ||  b === c || c === a ){
// //     console.log("2 are the same")
// // }else{
// //     console.log("all variables are different")
// // }

// // let hasDriversLicense = false;
// // const passTest = true;

// // if(passTest) hasDriversLicense = true;
// // if(hasDriversLicense){
// //     console.log(`i can drive`)
// // }

// // Write a program that asks for a name and for an age.
// //  Check if the name is "Bob" and the age is 30 years.
// //  If the data are correct, print "Welcome". Otherwise, print "Go Away".
// //   Try to optimize the prompts:
// //  don't ask for the age if the name is not the one expected.

// // const userName = prompt("what is your name ?")
// // if(userName === "Bob"){
// //     const userAge = prompt("what is users Age ?")
// //     if(userAge == 30){
// //         console.log("You are welcome")
// //     } else {
// //         console.log("Go Away")
// //     };

// // }else{
// //     console.log("Wrong Username")
// // };

// // functions
// // a piece of code we can reuse similar to variable but holds chunks of codes
// // function logger (){
// // console.log(`get the fuck out`)
// // }
// // logger();
// // logger();
// // logger();

// // (
// // function fruitProcessor(apples, oranges){
// //     console.log(apples,oranges);
// //     const juice = `juice with ${apples} apples and ${oranges} oranges`
// //     return juice;
// // }
// // const applejuice = fruitProcessor(5,0);
// // console.log(applejuice)

// // function garriMachine(cassava, water){
// //     const finalResult = `final result will have ${cassava} paints of cassava and ${water} buckets of water`
// //     return finalResult
// // }
// // console.log(garriMachine("beans", "moi-moi"));
// // const farmersWill = garriMachine(8,5)
// // console.log(farmersWill)

// // Function declaration vs expression
// // the parameter is the placeholder in the function e.g cassava, water as above
// //  and the arguement is the actual value that was used to fill in the placeholder e.g 8,5 as above.
// // Function Declaration
// // function calcAge1(birthYear){
// //     const age = 2037 - birthYear
// //     return age;
// // }
// // const age1 = calcAge1(1991);
// // const age2 = calcAge1(2022)
// // console.log(age1, age2)

// // Function expression
// // const calcAge2 = function (birthYear){
// //     const age3 = 2037 - birthYear
// //     return age3;
// // or
// // return 2037 - birthYear
// // }
// // const age = calcAge2(1991)
// // console.log(age)

// // function declarations can be called before they're defined in a code
// // but that's not possible with expressions

// // Arrow Functions
// // const yearUntilRetirement =(birthYear, firstName)=>{
// // const age = 2037 - birthYear;
// // const retirement = 65 - age;
// // return `${firstName} retires in ${retirement} years
// // `;
// // }
// // console.log(yearUntilRetirement(1991,"cynthia"))
// // console.log(yearUntilRetirement(1980, "Ben"))

// // Functions calling other functions

// // const cutPieces = function(fruit){
// //     return fruit * 4 ;
// // }

// // function fruitProcessor(apples, oranges){
// //     const applePieces = cutPieces(apples);
// //     const orangePieces = cutPieces(oranges)
// //         console.log(apples,oranges);
// //         const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`
// //         return juice;
// //     }
// //     console.log (fruitProcessor(2,4))

// // Reviewing Functions

// // function calcAge (birthYear){
// //     return 2037 - birthYear;
// // }
// // const yearUntilRetirement = function(birthYear, firstName){
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0){
// //         return retirement
// //     }else {
// //         return 0
// //     }

// //     }
// //     console.log (yearUntilRetirement(1990, "john"));
// //     console.log (yearUntilRetirement(1950, "christopher"));

// // coding challenge
// // const calcAverage = (a,b,c)=>{
// // return (a + b + c) / 3
// // }
// // console.log(calcAverage(12,8,10))

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65,54,49)
// // console.log(scoreDolphins, scoreKoalas)

// // const checkWinner = function (avgDolphins, avgKoalas) {
// //     if (avgDolphins >= 2 * avgKoalas) {
// //         console.log(`Dolphins won`)
// //     } else if ( avgKoalas >= 2 * avgDolphins){
// //         console.log(`Koalas won`)
// //     }else{
// //         console.log(`No winner`)
// //     }
// // }
// // console.log(checkWinner(scoreDolphins,scoreKoalas))
// // checkWinner(scoreDolphins, scoreKoalas)

// // // Test 2
// // scoreDolphins = calcAverage(85,54,41)
// // scoreKoalas = calcAverage(23,34,27)
// // console.log(scoreDolphins,scoreKoalas)
// // checkWinner(scoreDolphins,scoreKoalas)

// // Introduction to Arrays
// // const friends = ['micheal', 'steven', 'paul'];
// // console.log(friends[0]) index of the array
// // console.log(friends.length) length of array
// // console.log(friends[friends.length - 1]) last element of the array
// // friends [2] = 'jay'  //this replaces the array on that spot with the new name
// // console.log(friends)

// // const firstName = 'johnson'
// // const johnson = [firstName, 'keeny', 2037 - 1994,'student',friends]
// // console.log(johnson)

// // function calcAge (birthYear){
// //         return 2037 - birthYear;
// //     }
// // const years = new Array(1990,1994,1995,1997,1999)
// // // console.log(years)
// // const age1 = calcAge(years[0])
// // const age2 = calcAge(years[2])
// // const age4 = calcAge(years[years.length -1 ])
// // console.log(age1, age2, age4)

// // const ages = [age1, age2, age4]
// // console.log(ages)

// // Basic Array Operators
// // const friends = ['micheal', 'steven', 'paul'];
// // adds element to end of array
// // friends.push(`jay`);
// // console.log(friends)

// // adds element at the begining of an array
// // friends.unshift(`john`)
// // console.log(friends)

// // removes last element of array
// // friends.pop()
// // console.log(friends)

// // removes first element
// // friends.shift()
// // console.log(friends)

// // find the position and returns the position number
// // console.log(friends.indexOf(`paul`))

// // looks for the element if it's in the array and returns true or false
// // console.log(friends.includes(`paul`))
// // console.log(friends.includes(`Peter`))

// // const calcTip = (bill)=>{
// // return bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.20;
// // }
// // const bill = new Array(125, 555, 44)
// // const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
// // const totals = [bill[0] + tip[0],bill[1] + tip[1],bill[2] + tip[2]]
// // console.log(bill, tip, totals)

// // objects
// // const jonasArray = [
// //     'jonas',
// //     'martinez',
// //     2037-1991,
// //     'teacher',
// //     ["micheal", "john"," paul"]
// // ];

// // const jonas = {
// //     firstName: 'jonas',
// //     lastName: 'Martinez',
// //     age: 2037 -1991,
// //     job:"teacher",
// //     friends: ["micheal", "john"," paul"]
// // };
// // an object provides the opportunity of a property to define the elements of Jonas

// // retrieving and changing data in an object using dot vs bracket notation

// // const jonas = {
// //     firstName: 'jonas',
// //     lastName: 'Martinez',
// //     age: 2037 -1991,
// //     job:"teacher",
// //     friends: ["micheal", "john"," paul"]
// // };
// // console.log(jonas.lastName)
// // console.log(jonas["lastName"])

// // const nameKey = 'Name';
// // console.log(jonas['first' + nameKey])
// // console.log(jonas['last' + nameKey])
// // console.log(jonas.friends[2])
// // console.log('shitty'+ nameKey)

// // const interest = prompt(`what do you want to know about jonas ? chhose between firstName, lastName, age, job and friends`)
// // console.log(interest)
// // console.log(jonas[interest]) accessing an object using the square bracket
// // jonas.location = 'Germany';
// // jonas['twitter'] = `@tetre101`;
// // console.log(jonas)

// // console.log(jonas.friends[0])
// // console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)

// // calcAge : function(birthYear){
// //     return 2037 - birthYear
// //    } this function is an expression

// // function calcAge(birthYear){
// // return 2037 - birthYear
// // } this function is declaration

// // Objects methods
// // const jonas = {
// //     firstName: 'jonas',
// //     lastName: 'Martinez',
// //    birthYear:1991,
// //     job:"teacher",
// //     friends: ["micheal", "john"," paul"],
// //     hasDriversLicense : true,

// // calcAge: function(birthYear){
// //  return 2037 - birthYear
// // }
// // calcAge: function(){
// //     console.log(this.birthYear)
// //     return 2037 - this.birthYear
// //    }
// //     calcAge: function(){
// //        this.age = 2037 - this.birthYear;
// //         return this.age
// //        },

// //        getSummary:function(){
// //         return `${this.firstName} is a ${this.calcAge()}year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
// //        }
// // };
// // console.log(jonas.age)
// // console.log(jonas.calcAge())

// // console.log(jonas.getSummary())
// // console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job}, he has a drivers license`)

// // const Mark = {
// //     fullName: "Mark Miller",
// //     mass: 78,
// //     height : 1.69,
// //     calcBMI : function (){
// // this.bmi = this.mass / this.height ** 2;
// // return this.bmi
// //     }
// // };

// // const John = {
// //     fullName: "John Smith",
// //     mass: 92,
// //     height : 1.95,
// //     calcBMI : function () {
// //         this.bmi = this.mass / this.height ** 2;
// //         return this.bmi
// //     }
// // };

// // Mark.calcBMI();
// // John.calcBMI();

// // console.log(Mark.bmi)
// // console.log(John.bmi)

// // Iteration : The for loop

// // for loop keeps running while condition is true
// // for(let x = 1; x <= 10; x++){
// //     console.log(`lifting weights and counting by ${x}`)
// // }

// // Looping Arrays, Breaking and continuing

// // const jonasArray = [
// //     'jonas',
// //     'martinez',
// //     2037-1991,
// //     'teacher',
// //     ["micheal", "john"," paul"]
// // ];

// // for(let i = 0; i <= jonasArray.length; i++){
// //     console.log(jonasArray[i], typeof jonasArray[i])
// // }
// // const years = [1991,1994,1992,1997,2000];
// // const ages = [];

// // for(let i = 0; i < years.length; i++){
// //    ages.push(2037 - years[i]) ;
// // }
// // console.log(ages)

// // continue on loops
// // for(let i = 0; i < jonasArray.length; i++){
// //    if(typeof jonasArray[i] !== 'string') continue;
// //    console.log(jonasArray[i], typeof jonasArray[i])
// // }
// // Break on loops
// // for(let i = 0; i < jonasArray.length; i++){
// //     if(typeof jonasArray[i] === 'number') break;
// //     console.log(jonasArray[i], typeof jonasArray[i])
// //  }

// // Looping Backwards and loops in Loops

// // for(let i = jonasArray.length - 1; i >= 0; i--){
// //     console.log(jonasArray[i])
// // }

// // loops in loops
// // for (let exercise = 1; exercise < 4 ; exercise++){
// //     console.log(`------starting exercise ${exercise}`)

// //     for(let rep = 1; rep < 6 ; rep++){
// //         console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`)
// //     }
// // }

// // WHILE LOOP
// // for(let x = 1; x <= 10; x++){
// //     console.log(`lifting weights and counting by ${x}`)
// // }
// // "-----------------------------------------"

// // let rep = 1;
// // while( rep <= 10){
// //     console.log(`WHILE : lifting weights and counting by ${rep}`)
// //     rep++;
// // }

// // let dice = Math.trunc(Math.random() * 6 ) +1;
// // while( dice < 6){
// //     console.log(`you have rolled a ${dice}`);
// //  dice = Math.trunc(Math.random() * 6 ) + 1;
// //  if(dice === 6){
// //     console.log(`you have reached the breaking point`)
// //  }
// // }

// // checkpoint
// // const calcTip = (bill)=>{
// // return bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.20;
// // }
// // const bills = [22,295,176,440,37,105,10,1100,86,52]
// // const tips = [];
// // const totals = [];

// // for(let i = 0; i < bills.length ; i++){
// //     const tip = calcTip(bills[i]);
// //     tips.push(tip)
// //     totals.push(tip + bills[i]);

// // }
// // console.log(tips,bills, totals)

// // const calcAverage = function(arr){
// //     let sum = 0;
// // for(let x = 0; x < arr.length; x++) {
// // sum += arr[x];
// // sum = sum + arr[i]
// // }
// // return sum / arr.length;
// // }
// // console.log(calcAverage( [3, 4, 8]));
// // console.log(calcAverage(totals))
// // console.log(calcAverage(tips))

// // UNDERSTANDING HOW JS REALLY WORKS
// // HIGH LEVEL OVERVIEW OF JS
// // JS IS A HIGH LEVEL, OBJECT ORIENTED, MULTI-PARADIGM PROGRAMMING LANGUAGE.A

// // JS AS A HIGH LEVEL(we don't have to manage resources)
// // bc these languages(python and js) have abstraction that takes care of that
// // DOWNSIDE TO THIS IS THAT THE PROGRAM WON'T BE AS FAST AND OPTIMIZED

// // JS AS GARBAGE-COLLECTION
// // An algorithm inside javascript that removes old unused
// // objects from computer memory

// // JS AS AN INTERPRETED OR JUST-IN-TIME COMPILER
// // compiling machine codes/interpreting them

// // JS AS MULTI-PARADIGM LANGUAGE
// // paradigm:an approach of structuring code
// // JS USES ALL THE PARADIGMS
// // can be classified as imperative and declarative
// // 3 popular paradigms
// // procedural programming
// // object oriented programming
// // functional porgramming

// // JS AS PROTOTYPE-BASED OBJECT-ORIENTED APPROACH
// almost everything in js are objects except primitive values and integers
// using methods like push on arrays,this happens bc of prototypal inheritance
// Arrays are created from prototypes and this prototype contains methods that are called on the array

// JS AS LANGUAGE WITH FIRST-CLASS FUNCTIONS
// functions are treated as regualr variables and allows for functional programming

// JS AS DYNAMIC LANGUAGE
// data types aren't assigned to variables and are known when js engine executes our code
// variable type can be changed as variables are reassigned e.g. let x = 29; let y = 10; x = 'jonas'

// JS AS A SINGLE-THREADED
// JS runs in one single thread so it can only do one thing at a TimeRanges,
// it handles tasks concurrently.

// JS AS NON-BLOCKING EVENT LOOK
// in a situation we wnat various tasks performed like getting an application, we use
// event loop to take the long running tasks, executes them in the "background" and puts them back in the main thread
// once they're finished
