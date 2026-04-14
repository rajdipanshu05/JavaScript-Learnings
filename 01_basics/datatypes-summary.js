// ===============================
// 🔥 JAVASCRIPT DATA TYPES SUMMARY
// ===============================


// 🔹 1. PRIMITIVE (IMMUTABLE → copy by value)
let num = 10;            // number → typeof "number"
let str = "hello";       // string → "string"
let bool = true;         // boolean → "boolean"
let undef;               // undefined → "undefined"
let nul = null;          // null → "object" ⚠️ bug
let big = 10n;           // bigint → "bigint"
let sym = Symbol("id");  // symbol → "symbol"

// 👉 Immutable → value cannot change (new value created)


// --------------------------------------


// 🔹 2. NON-PRIMITIVE (MUTABLE → copy by reference)
let obj = { a: 1 };      // object → "object"
let arr = [1, 2];        // array → "object" ⚠️
function fn() {}         // function → "function"

// 👉 Mutable → can modify original value


// --------------------------------------


// 🔹 3. TYPEOF IMPORTANT
console.log(typeof num);  // number
console.log(typeof nul);  // object ⚠️
console.log(typeof arr);  // object ⚠️
console.log(typeof fn);   // function


// --------------------------------------


// 🔹 4. COPY BEHAVIOR

// Primitive → copy by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10

// Reference → copy by address
let o1 = { x: 10 };
let o2 = o1;
o2.x = 20;
console.log(o1.x); // 20


// --------------------------------------


// 🔹 5. TYPE CONVERSION

// Implicit
console.log("5" + 2); // "52" → string
console.log("5" - 2); // 3 → number

// Explicit
Number("123");   // 123
String(123);     // "123"
Boolean(0);      // false


// --------------------------------------


// 🔹 6. SPECIAL VALUES

console.log(null + 1);        // 1
console.log(undefined + 1);   // NaN

console.log(null == undefined); // true
console.log(null === undefined); // false


// --------------------------------------


// 🔹 7. TRUTHY / FALSY

// falsy → false, 0, "", null, undefined, NaN
// truthy → everything else


// --------------------------------------


// 🔹 8. SYMBOL (UNIQUE KEY)
let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 === s2); // false (always unique)


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// Primitive → immutable, value copy
// Object → mutable, reference copy
// typeof null → object (bug)
// + → string concat, others → number
// JS → dynamically typed



// ===============================
// 🔥 STACK vs HEAP MEMORY
// ===============================


// 🔹 STACK (Primitive Data Types)

// Stores: number, string, boolean, null, undefined, bigint, symbol
// 👉 Works on COPY BY VALUE

let x = 10;
let y = x;

y = 20;

console.log(x); // 10
console.log(y); // 20

// Explanation:
// - x = 10 stored in stack
// - y gets COPY of x
// - changing x does NOT affect x


// --------------------------------------


// 🔹 HEAP (Non-Primitive Data Types)

// Stores: object, array, function
// 👉 Works on REFERENCE (address)

let obj1 = { value: 10 };
let obj2 = obj1;

obj2.value = 20;

console.log(obj1.value); // 20
console.log(obj2.value); // 20

// Explanation:
// - object stored in heap
// - obj1 stores reference (address)
// - obj2 gets SAME reference
// - change reflects everywhere