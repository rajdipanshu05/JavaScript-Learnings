// ===============================
// 🔥 JAVASCRIPT NUMBERS + MATH (MASTER REVISION)
// ===============================


// *********************************
// 🔹 1. NUMBER DECLARATION
// *********************************

const score = 400
// console.log(score); // primitive number

const balance = new Number(100)
// console.log(balance); // Number object ❌ (avoid in practice)


// *********************************
// 🔹 2. NUMBER METHODS
// *********************************

// toString()
console.log(balance.toString());        // "100"
console.log(balance.toString().length); // 3

// toFixed() → decimal places
console.log(balance.toFixed(1)); // "100.0"

// toPrecision() → total digits
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // "123.9"


// *********************************
// 🔹 3. NUMBER FORMATTING
// *********************************

const hundreds = 1000000

// US format
console.log(hundreds.toLocaleString()); // "1,000,000"

// Indian format
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"


// *********************************
// 🔹 4. IMPORTANT NUMBER CONCEPTS
// *********************************

// Special values
console.log(1 / 0);      // Infinity
console.log(-1 / 0);     // -Infinity
console.log("abc" / 2);  // NaN

// NaN check
console.log(isNaN("abc")); // true

// Precision issue ⚠️
console.log(0.1 + 0.2); // 0.30000000000000004
//


// *********************************
// 🔹 5. MATH OBJECT
// *********************************

// console.log(Math); // built-in object

// Absolute
console.log(Math.abs(-4)); // 4

// Rounding
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9)); // 4

// Min / Max
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8


// *********************************
// 🔹 6. RANDOM NUMBERS (VERY IMPORTANT)
// *********************************

// Basic random
console.log(Math.random()); 
// range: 0 to <1

// 1 to 10
console.log((Math.random() * 10) + 1);

// integer 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);


// *********************************
// 🔹 7. RANGE RANDOM (INTERVIEW GOLD ⭐)
// *********************************

const min = 10
const max = 20

// formula:
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)
// 👉 range: 10 to 20 (inclusive)


// *********************************
// 🔹 8. EXTRA IMPORTANT METHODS
// *********************************

// Power
console.log(Math.pow(2, 3)); // 8

// Square root
console.log(Math.sqrt(16)); // 4

// Truncate (remove decimal)
console.log(Math.trunc(4.9)); // 4


// *********************************
// 🔹 9. CONVERSION
// *********************************

Number("123");   // 123
Number("abc");   // NaN

parseInt("123px");   // 123
parseFloat("12.5px"); // 12.5


// *********************************
// 🔹 10. BEST PRACTICES
// *********************************

// ❌ avoid:
let bad = new Number(10) // object

// ✅ use:
let good = 10 // primitive


// *********************************
// ⚡ FINAL TAKEAWAY
// *********************************

// number → single type (int + float)
// NaN → invalid number
// Infinity → division by 0
// Math → built-in object (no new)
// random → 0 to <1
// formula → range random important

// 👉 Most asked: random range, toFixed, precision issue