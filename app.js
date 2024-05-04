// Get user input for age
let userAge = prompt("Enter your age:");
// Check if user is 18 or older
if (userAge >= 18) {
 console.log("You are old enough to drive.");
} else {
 let yearsLeft = 18 - userAge;
 console.log("You are left with " + yearsLeft + " years to drive.");
}
// Compare ages
let myAge = 25; // Assume my age is 25
let yourAge = prompt("Enter your age:");
if (myAge > yourAge) {
 console.log("I am " + (myAge - yourAge) + " years older than you.");
} else if (myAge < yourAge) {
 console.log("You are " + (yourAge - myAge) + " years older than
me.");
} else {
 console.log("We are the same age.");
}
// Using if...else and ternary operator to compare values
let a = 4;
let b = 3;
if (a > b) {
 console.log("a is greater than b");
} else {
 console.log("a is less than b");
}
// Using ternary operator
console.log(a > b ? "a is greater than b" : "a is less than b");
// Check if a number is even or odd
let num = prompt("Enter a number:");
if (num % 2 === 0) {
 console.log(num + " is an even number");
} else {
 console.log(num + " is an odd number");
}
// Grades for students
let score = prompt("Enter your score:");
if (score >= 80 && score <= 100) {
 console.log("A");
} else if (score >= 70 && score <= 89) {
 console.log("B");
} else if (score >= 60 && score <= 69) {
    console.log("C");
} else if (score >= 50 && score <= 59) {
 console.log("D");
} else if (score >= 0 && score <= 49) {
 console.log("F");
} else {
 console.log("Invalid score");
}
// Check the season
let month = prompt("Enter a month:");
month = month.toLowerCase();
switch (month) {
 case "september":
 case "october":
 case "november":
 console.log("Autumn");
 break;
 case "december":
 case "january":
 case "february":
 console.log("Winter");
 break;
 case "march":
 case "april":
 case "may":
 console.log("Spring");
 break;
 case "june":
 case "july":
 case "august":
 console.log("Summer");
 break;
 default:
 console.log("Invalid month");
}
// Check if day is a weekend or working day
let day = prompt("What is the day today?");
day = day.toLowerCase();
if (day === "saturday" || day === "sunday") {
 console.log(day + " is a weekend.");
} else if (day === "monday" || day === "tuesday" || day === "wednesday"
|| day === "thursday" || day === "friday") {
 console.log(day + " is a working day.");
} else {
 console.log("Invalid day");
}