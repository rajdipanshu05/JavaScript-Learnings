// ===============================
// 🔥 STRING: PRIMITIVE vs OBJECT
// ===============================

// 🔹 Primitive String (MOST USED)
let str1 = "hello";

// 🔹 String Object (using new keyword)
let str2 = new String("hello");

console.log(typeof str1); // "string"
console.log(typeof str2); // "object"

// 👉 Difference:
// str1 → primitive (fast, recommended)
// str2 → object (rarely used)


// --------------------------------------


// 🔹 Comparison Difference

let a = "hello";
let b = "hello";

console.log(a === b); // true (value comparison)

let c = new String("hello");
let d = new String("hello");

console.log(c === d); // false ❌ (different objects)


// --------------------------------------


// 🔹 Accessing value from String object

console.log(c[0]);        // h
console.log(c.valueOf()); // "hello"


// --------------------------------------


// 🔥 WHY NOT USE new String() ?

// ❌ Creates object → slower
// ❌ Comparison issues
// ❌ Confusing behavior

// 👉 Always prefer primitive strings



// ===============================
// 🔥 JAVASCRIPT STRING FUNCTIONS
// ===============================


// 🔹 1. STRING DECLARATION

let str3 = "hello";
let str4 = 'world';
let str5 = `hello ${str4}`; // template literal

// 👉 Backticks allow variables + multiline


// --------------------------------------


// 🔹 2. LENGTH

console.log(str1.length); // 5


// --------------------------------------


// 🔹 3. ACCESS CHARACTERS

console.log(str1[0]);        // h
console.log(str1.charAt(1)); // e


// --------------------------------------


// 🔹 4. CASE CONVERSION

console.log(str1.toUpperCase()); // HELLO
console.log(str1.toLowerCase()); // hello


// --------------------------------------


// 🔹 5. SEARCHING

let s = "hello world";

console.log(s.includes("world")); // true
console.log(s.indexOf("o"));      // 4 (first occurrence)
console.log(s.lastIndexOf("o"));  // 7


// --------------------------------------


// 🔹 6. EXTRACTING

console.log(s.slice(0, 5));   // "hello"
console.log(s.substring(0, 5)); // "hello"

// Difference:
// slice → supports negative index
console.log(s.slice(-5)); // "world"


// --------------------------------------


// 🔹 7. REPLACE

console.log(s.replace("world", "JS")); // "hello JS"

// replace all:
console.log(s.replaceAll("o", "0")); // hell0 w0rld


// --------------------------------------


// 🔹 8. TRIM (remove spaces)

let t = "   hello   ";

console.log(t.trim());      // "hello"
console.log(t.trimStart()); // "hello   "
console.log(t.trimEnd());   // "   hello"


// --------------------------------------


// 🔹 9. SPLIT

let data = "a,b,c";

console.log(data.split(",")); // ["a","b","c"]


// --------------------------------------


// 🔹 10. JOIN (array → string)

let arr = ["hello", "world"];

console.log(arr.join(" ")); // "hello world"


// --------------------------------------


// 🔹 11. REPEAT

console.log("ha".repeat(3)); // "hahaha"


// --------------------------------------


// 🔹 12. STARTS / ENDS

console.log(s.startsWith("hello")); // true
console.log(s.endsWith("world"));   // true


// ===============================
// 🔥 IMPORTANT CONCEPTS
// ===============================

// 👉 Strings are IMMUTABLE
let x = "hello";
x[0] = "H"; // ❌ no change

// ✔️ New string created instead


// --------------------------------------


// ===============================
// 🔥 CASE STUDY (REAL INTERVIEW)
// ===============================

// Problem:
// "   hello@GMAIL.com   "
// Clean + normalize email

let email = "   hello@GMAIL.com   ";

// Step 1: remove spaces
email = email.trim();

// Step 2: convert to lowercase
email = email.toLowerCase();

// Step 3: validate
let isValid = email.includes("@") && email.includes(".");

console.log(email);   // "hello@gmail.com"
console.log(isValid); // true


// --------------------------------------


// 🔥 Case Study 2: Count words

let sentence = "I love JavaScript very much";

let words = sentence.split(" ");
console.log(words.length); // 5


// --------------------------------------


// 🔥 Case Study 3: Reverse string

let str = "hello";

let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// length, slice, replace, split → most used
// strings are immutable
// use trim + toLowerCase in real apps



// ===============================
// 🔥 slice() vs substring() (COMPLETE NOTES)
// ===============================

let strr = "hello world"; // length = 11


// --------------------------------------
// 🔹 1. BASIC USAGE

console.log(strr.slice(0, 5));      // "hello"
console.log(strr.substring(0, 5));  // "hello"

// 👉 start included, end excluded


// --------------------------------------
// 🔹 2. ONLY START INDEX

console.log(strr.slice(6));      // "world"
console.log(strr.substring(6));  // "world"


// --------------------------------------
// 🔹 3. NEGATIVE INDEX (MAIN DIFFERENCE ⚠️)

// 👉 How slice handles negative:
// formula → newIndex = length + index

// Example:
console.log(strr.slice(-5)); 
// length = 11 → 11 + (-5) = 6 → slice(6)
// "world"

console.log(strr.slice(-11, -6)); 
// -11 → 11 + (-11) = 0
// -6  → 11 + (-6)  = 5
// slice(0,5) → "hello"


// 👉 substring behavior:
console.log(strr.substring(-5));  
// treated as substring(0)
// "hello world"

console.log(strr.substring(-11, -6));  
// both become 0 → substring(0,0)
// ""


// --------------------------------------
// 🔹 4. START > END CASE

console.log(strr.slice(5, 2));      
// "" (no swap)

console.log(strr.substring(5, 2));  
// "llo" (swap → substring(2,5))


// --------------------------------------
// 🔹 5. NEGATIVE + POSITIVE MIX

console.log(strr.slice(-5, 10));
// -5 → 6 → slice(6,10)
// "worl"


// --------------------------------------
// 🔹 6. IMMUTABILITY

let st = "hello";

let part1 = st.slice(0, 2);
let part2 = st.substring(0, 2);

console.log(st);      // "hello"
console.log(part1);  // "he"
console.log(part2);  // "he"

// 👉 original string unchanged


// --------------------------------------
// 🔹 7. PRACTICAL USE

let gmail = "test@gmail.com";

let domain = gmail.slice(email.indexOf("@") + 1);
console.log(domain); // "gmail.com"


// ===============================
// ⚡ FINAL SUMMARY
// ===============================

// slice():
// ✔ supports negative → length + index
// ✔ no swapping
// ✔ more flexible

// substring():
// ❌ negative → 0
// ✔ swaps start & end

// 👉 use slice in real projects


// ===============================
// 🧠 INTERVIEW ONE-LINER
// ===============================

// Negative indices in slice are converted using (length + index),
// while substring converts negative values to 0.