// Js Output
document.getElementById("js").innerText = "Hello Word!";
// document.write()
document.write(5 + 6);
// window.alert("Click Ok To Next Step");
console.log("Hello World!");
// JavaScript String Template
// Give Me Problem Chatgpt And I Solve it

// Problem 1
let name = "dmsrashedul";
let age = 20;

let message = `Hi, I am ${name} and I am ${age} years old`; // এখানে তোমার কোড লেখো
console.log(message);
// Problem 2

let num1 = 15;
let num2 = 30;

// Output হওয়া উচিত:
// "The sum of 15 and 30 is 45"

let result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(result);
// Problem 3
// নিচের মত একটি বহু লাইনের লেখা তৈরি করো:
// Output:
// Hello!
// This is a multi-line string.
// Using template literals is awesome!

let multiline = `
Hello!,
This is a multi-line string.
Using template literals is awesome!


`;
console.log(multiline);

// Problem 4

let name1 = "Rashedul Islam";
let course = "JavaScript";
let duration = "30 days";

// Output:
// "Hi Tanjim! Welcome to the JavaScript course. You will complete it in 30 days."

let welcomeMessage = `Hi,${name1}! Welcome to the ${course} course. You will complete it in ${duration}`;
console.log(welcomeMessage);

// Problem 5
let username = "sakib";
let domain = "example.com";

// Output:
// "Your email is: sakib@example.com"

let email = `Your email is : ${username}@${domain}`;
console.log(email);
// Js Array
let Heros = ["Osman", "2nd MD", "Khalid Bin Walid", "Alp Arslan", "Artugrul Gazi", "Salauddin Al Ayyubi"];
for (let hr = 0; hr < Heros.length; hr++) {
  console.log(Heros[hr]);
}
Heros.pop();
Heros.push("Salauddin");
// Pop Method
console.log(Heros);
