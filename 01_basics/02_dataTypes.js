// ===============================
// DATA TYPES + IMMUTABLE/MUTABLE + TYPEOF
// ===============================


// 🔹 PRIMITIVE TYPES (IMMUTABLE)
// Cannot be modified → new value is created


// 1. Number
let num = 10;
console.log(typeof num); // "number"
// ✔️ Includes integers & floats
// ✔️ Special values: NaN, Infinity


// -------------------------------


// 2. String
let str = "hello";
console.log(typeof str); // "string"
// ✔️ Immutable (cannot change characters directly)
// ✔️ Methods return new string


// -------------------------------


// 3. Boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"
// ✔️ Only true / false
// ✔️ Used in conditions


// -------------------------------


// 4. Undefined
let x;
console.log(typeof x); // "undefined"
// ✔️ Default value when not assigned


// -------------------------------


// 5. Null
let y = null;
console.log(typeof y); // "object" ⚠️ BUG
// ✔️ Intentional absence of value
// ⚠️ JS bug: typeof null returns "object"


// -------------------------------


// 6. BigInt
let big = 12345678901234567890n;
console.log(typeof big); // "bigint"
// ✔️ For very large integers
// ✔️ Cannot mix directly with number


// -------------------------------


// 7. Symbol
let sym = Symbol("id");
console.log(typeof sym); // "symbol"
// ✔️ Always unique
// ✔️ Used as object keys



// ===============================
// 🔹 NON-PRIMITIVE (MUTABLE)
// ===============================


// 1. Object
let obj = { a: 1 };
console.log(typeof obj); // "object"
// ✔️ Mutable → can modify properties
// ✔️ Stored by reference


// -------------------------------


// 2. Array
let arr = [1, 2, 3];
console.log(typeof arr); // "object" ⚠️
// ✔️ Arrays are objects internally
// ✔️ Use Array.isArray(arr) → true


// -------------------------------


// 3. Function
function greet() {}
console.log(typeof greet); // "function"
// ✔️ Functions are special objects



// ===============================
// 🔥 IMMUTABLE vs MUTABLE
// ===============================

// Primitive (copy by value)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10


// Reference (copy by reference)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20



// ===============================
// 🔥 YOUR QUESTION
// ===============================

// Case 1:
let p = 1;
p = 2;
// ✔️ Allowed → reassignment


// Case 2:
let q = 1;
q = "a";
// ✔️ Allowed → dynamic typing
// ✔️ typeof changes at runtime

console.log(typeof q); // "string"



// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// typeof outputs:
// number, string, boolean, undefined, object(null), bigint, symbol, function

// Primitive → immutable
// Objects → mutable
// JS → dynamically typed