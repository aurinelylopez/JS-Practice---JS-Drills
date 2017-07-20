/********************************
*
* DO YOUR ASSIGNMENT IN THIS FILE
*
*********************************/

// After each step, git add . AND git commit -m "completed part PART-LETTER-HERE"
// Complete all steps specified below and console.log() the result.


// STEP 1: Pythagorean Theorem

const a = 1;
const b = 2;
let c;

// Answer:
function paTherom(a,b,c){
let b = Math.Pow(a,2)
let a = Math.Pow(b,2)
let c = Math.Pow(a + b, .5)
	return c;
}
console.log (paTherom (1,2))


// STEP 2: Basic Conversion

const pounds = 155;
let kilograms;

// Answer:
 let kilograms = 0.453592

 let conversion = kilograms * pounds
 console.log(conversion);


// STEP 3: Old Modems

// Answer:

const sizeInGB = 25;

let timeToDownload = (sizeInGB * 8 * 100000/56;
	console.log(timeToDownload);
// s * 1hr/3600s

let hours = timeToDownload/3600
console.log(hours)

// STEP 4: Killer Caffeine
// Answer:
//It's estimated that 6 grams per hundred pounds of body weight can cause death! 
//Given an 8oz cup of coffee has 95mg of caffeine, calculate how many cups it takes 
//to kill YOU (use whatever weight you want).

let weight; 100;
let coffeeDeathperlb = 1000;
let killagrams = (6000/100)/95
console.log(killagrams)

let coffeeDeathperlb = 95 * 63.16; 
console.log(coffeeDeathperlb) 
// I got super stuck in this one.. I know this isn't the right but this what I got. The amount of cups is 63.16. I am sorry 
// STEP 5: Instructors

let instructors = ['Patrick Andre', 'Joe Keohan', 'Jon Zachary', 'Matt Kersner', 'dominic farquharson'];

// Answer:
1-
var instructors = ['Patrick Andre', 'Joe Keohan', 'Jon Zachary', 'Matt Kersner', 'dominic farquharson']
console.log(instructors)

2-
var instructors = ['Patrick Andre', 'Joe Keohan', 'Jon Zachary', 'Matt Kersner', 'dominic farquharson'];
document.getElementById().innerHTML = instructors;

function pushInstructor() {
    instructors.push('John Carmack');
    document.getElementById.innerHTML = instructors;
}

3-var instructors = ['Patrick Andre', 'Joe Keohan', 'Jon Zachary', 'Matt Kersner', 'dominic farquharson', 'John Carmack'];
document.getElementById.innerHTML = instructors;

function myFunction() {
    instructors.pop();
    document.getElementById.innerHTML = instructors;
}




// STEP 6: I'm gonna have to see some ID

let age = 19;

function(getAge)(age){
if (age >= 21) {
    console.log = ("OK, you can have a drink");
} else {
    console.log = ("Get lost kid! We don't server minors here!!");
}
getAge(age)