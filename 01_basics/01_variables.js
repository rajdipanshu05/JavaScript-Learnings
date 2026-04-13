// const accId = 12345
// let accEmail = "raj@gmail.com"
// var accPassword = "12345678"
// accCity = "Forbesganj"
// let accState

// accId = 2


// accEmail = "raj@google.com"
// accPassword = "12345"
// accCity = "Begaluru"

// console.log(accId);

// 
// Prefer not to use var
// because of issue in block scope and functional scope

// console.table([accId,accEmail,accPassword,accCity,accState])


{
    // ===============================
// VAR DISADVANTAGES + COMPARISON WITH LET
// ===============================


// 1. ❌ No Block Scope
if (true) {

  var x = 10;
}
console.log(x); 
// Output: 10
// Reason: var is function-scoped, not block-scoped → leaks outside { }


// --------------------------------------


// 2. ❌ Redeclaration Allowed
var a = 10;
var a = 20; 
console.log(a); 
// Output: 20
// Reason: var allows redeclaration → can overwrite variables accidentally


// --------------------------------------


// 3. ❌ Hoisting Confusion
console.log(b); // undefined
var b = 10;

// Internally JS treats it like:
// var b;
// console.log(b);
// b = 10;

// Reason: var is hoisted and initialized with undefined → confusing behavior


// --------------------------------------


// 4. ❌ Loop + Async Bug (IMPORTANT)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Output:
// 3
// 3
// 3

// Reason:
// - var creates ONE shared variable i
// - Loop runs first → i becomes 3
// - setTimeout runs later → prints final value of i


// --------------------------------------


// ✅ LET FIX (for comparison)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}

// Output:
// 0
// 1
// 2

// Reason:
// - let is block-scoped
// - Each iteration gets a NEW variable
// - Each callback remembers its own value


// --------------------------------------


// 🔹 Scope Comparison
{
  var m = 1;
  let n = 2;
}

console.log(m); // 1
console.log(n); // Error

// Reason:
// var ignores block scope
// let stays inside block


// --------------------------------------


// 🔹 Redeclaration Comparison
var p = 1;
var p = 2; // allowed

let q = 1;
// let q = 2; // Error

// Reason:
// let prevents redeclaration → safer


// --------------------------------------


// 🔹 Reassignment (both allowed)
var r = 1;
let s = 2;

r = 10;
s = 20;

console.log(r, s); // 10 20


// ===============================
// FINAL TAKEAWAY
// ===============================

// var → function-scoped, hoisted, unsafe in loops
// let → block-scoped, predictable, safer choice
}