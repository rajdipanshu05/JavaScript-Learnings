// ===============================
// 🔥 JAVASCRIPT OPERATORS + TYPE CONVERSION (MASTER REVISION)
// ===============================


// ***********************
// 🔹 1. BASIC OPERATORS
// ***********************

let value = 3
let negValue = -value
// console.log(negValue); // -3 → unary operator

// Arithmetic operators
// console.log(2 + 2);  // 4
// console.log(2 - 2);  // 0
// console.log(2 * 2);  // 4
// console.log(2 ** 3); // 8 (power)
// console.log(2 / 3);  // 0.666
// console.log(2 % 3);  // 2 (remainder)


// *********************************
// 🔹 2. STRING OPERATIONS
// *********************************

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // "hello hitesh"

// 👉 + operator works as concatenation with strings


// *********************************
// 🔹 3. TYPE COERCION (IMPORTANT ⚠️)
// *********************************

// console.log("1" + 2);     
// "12" → number converted to string

// console.log(1 + "2");     
// "12"

// console.log("1" + 2 + 2); 
// "122" → left to right → becomes string early

// console.log(1 + 2 + "2"); 
// "32" → first addition, then string

// 👉 Rule:
// + prefers string if any operand is string
// -, *, / prefer number conversion


// *********************************
// 🔹 4. OPERATOR PRECEDENCE
// *********************************

// console.log((3 + 4) * 5 % 3);
// Step:
// (3+4)=7 → 7*5=35 → 35%3=2


// *********************************
// 🔹 5. UNARY + TYPE CONVERSION
// *********************************

// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+"");   // 0

// 👉 + converts value to number


// *********************************
// 🔹 6. MULTIPLE ASSIGNMENT
// *********************************

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// All get value 4

// 👉 Assignment works right to left


// *********************************
// 🔹 7. INCREMENT / DECREMENT
// *********************************

let gameCounter = 100

++gameCounter; // pre-increment
console.log(gameCounter); // 101

// Difference:
let x = 5
console.log(++x); // 6 (increment first)

let y = 5
console.log(y++); // 5 (print first, then increment)
console.log(y);   // 6


// *********************************
// 🔹 8. COMPARISON OPERATORS
// *********************************

// console.log(2 > 1);  // true
// console.log(2 >= 2); // true
// console.log(2 < 1);  // false

// ⚠️ Type conversion happens
// console.log("2" > 1); // true

// Strict vs Loose
// console.log(2 == "2");  // true (type conversion)
// console.log(2 === "2"); // false (no conversion)


// *********************************
// 🔹 9. SPECIAL CASES (VERY IMPORTANT)
// *********************************

// console.log(null > 0);   // false
// console.log(null == 0);  // false
// console.log(null >= 0);  // true

// 👉 Comparisons convert null → 0
// 👉 Equality (==) behaves differently

// console.log(undefined > 0);  // false
// console.log(undefined == 0); // false


// *********************************
// 🔹 10. LOGICAL OPERATORS
// *********************************

// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true);         // false


// *********************************
// 🔹 11. TRUTHY / FALSY VALUES
// *********************************

// Falsy values:
// false, 0, -0, "", null, undefined, NaN

// Everything else → truthy


// *********************************
// 🔹 12. TYPE CONVERSION SUMMARY
// *********************************

// Number conversion
// console.log(Number("123")); // 123
// console.log(Number("abc")); // NaN

// Boolean conversion
// console.log(Boolean(1));  // true
// console.log(Boolean(0));  // false

// String conversion
// console.log(String(123)); // "123"


// ===============================
// ⚡ FINAL TAKEAWAYS
// ===============================

// + → string concat if any string present
// -, *, / → number conversion
// == → type conversion
// === → strict comparison
// null → tricky in comparisons
// undefined → mostly false/NaN
// ++x vs x++ → very important

// 👉 This topic = HIGHLY ASKED in interviews