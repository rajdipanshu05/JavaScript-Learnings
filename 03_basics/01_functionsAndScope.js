// ===============================
// 🔥 1. FUNCTION DECLARATION
// ===============================

// basic syntax
function greet() {
  console.log("Hello");
}

greet(); // calling function


// 👉 Points:
// function keyword used
// can be called anywhere (hoisting)


// --------------------------------------
// 🔹 2. PARAMETERS & ARGUMENTS
// --------------------------------------

function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // 5

// 👉 a, b → parameters
// 👉 2, 3 → arguments


// --------------------------------------
// 🔹 3. RETURN STATEMENT
// --------------------------------------

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 4)); // 8

// 👉 return stops function execution


// --------------------------------------
// 🔹 4. DEFAULT PARAMETERS
// --------------------------------------

function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser();       // Hello Guest
greetUser("Raj");  // Hello Raj


// --------------------------------------
// 🔹 5. FUNCTION HOISTING ⚠️
// --------------------------------------

sayHi(); // works

function sayHi() {
  console.log("Hi");
}

// 👉 function declaration is hoisted


// --------------------------------------
// 🔹 6. FUNCTION EXPRESSION (NOT HOISTED)
// --------------------------------------

let fn = function () {
  console.log("Hello");
};

// fn(); works only after declaration


// --------------------------------------
// 🔹 7. SCOPE (IMPORTANT)
// --------------------------------------

function test() {
  let x = 10;
  console.log(x);
}

// console.log(x); ❌ error (outside scope)


// 🔥 LOCAL vs GLOBAL SCOPE

let globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local";

  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}

scopeTest();

// console.log(localVar); ❌ not accessible outside


// --------------------------------------
// 🔹 8. NESTED FUNCTION
// --------------------------------------

function outer() {
  function inner() {
    console.log("Inner function");
  }
  inner();
}

outer();


// --------------------------------------
// 🔹 9. FUNCTION AS VALUE
// --------------------------------------

function sayHello() {
  return "Hello";
}

let msg = sayHello; // function assigned

console.log(msg()); // Hello


// --------------------------------------
// 🔹 10. ARGUMENTS OBJECT ⚠️
// --------------------------------------

function show() {
  console.log(arguments);
}

show(1, 2, 3);
// [1,2,3]

// 👉 old way to handle multiple arguments


// --------------------------------------
// 🔹 11. REST OPERATOR (IMPORTANT ⭐)
// --------------------------------------

// modern way to handle indefinite arguments

function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 👉 ...nums collects all arguments into array


// --------------------------------------
// 🔹 12. SPREAD OPERATOR
// --------------------------------------

let arr = [1, 2, 3];

// spread → expands values
console.log(...arr); // 1 2 3

// use case
let newArr = [...arr, 4, 5];
console.log(newArr); // [1,2,3,4,5]


// --------------------------------------
// 🔹 13. REST vs SPREAD DIFFERENCE ⚠️
// --------------------------------------

// REST → collects values
function demo(...args) {
  console.log(args); // array
}

// SPREAD → expands values
let nums = [1, 2, 3];
console.log(...nums);

// 👉 same syntax (...) but different use


// --------------------------------------
// 🔹 14. EARLY RETURN
// --------------------------------------

function check(num) {
  if (num < 0) return "Negative";
  return "Positive";
}


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// function keyword → declaration
// hoisted → can call before definition
// return → stops execution
// parameters vs arguments important
// rest → multiple arguments handling
// spread → expand values
// local vs global scope important
// functions = first-class citizens