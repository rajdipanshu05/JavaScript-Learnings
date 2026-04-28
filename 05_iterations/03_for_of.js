// ===============================
// 🔥 1. BASIC SYNTAX
// ===============================

let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}

// Output:
// 10 20 30

// 👉 iterates over VALUES (not index)


// --------------------------------------
// 🔹 2. STRING ITERATION
// --------------------------------------

let str = "hello";

for (let ch of str) {
  console.log(ch);
}

// h e l l o


// --------------------------------------
// 🔹 3. ARRAY WITH INDEX (TRICK)
// --------------------------------------

let nums = [1, 2, 3];

for (let [index, value] of nums.entries()) {
  console.log(index, value);
}

// 0 1
// 1 2
// 2 3


// --------------------------------------
// 🔹 4. OBJECT DOES NOT WORK ⚠️
// --------------------------------------

let obj = { a: 1, b: 2 };

// ❌ ERROR
// for (let val of obj) {}

// 👉 objects are NOT iterable


// --------------------------------------
// 🔹 5. WITH MAP (IMPORTANT ⭐)
// --------------------------------------

let map = new Map();

map.set("a", 1);
map.set("b", 2);

for (let [key, value] of map) {
  console.log(key, value);
}

// a 1
// b 2


// ===============================
// 🔥 JS MAP (SHORT NOTES)
// ===============================

// Map = key-value data structure
//odered way me store krta hai
let m = new Map();

m.set("name", "Dipanshu");
m.set(1, "number key");

console.log(m.get("name")); // Dipanshu
console.log(m.has("name")); // true

// 👉 keys can be ANY type (unlike object)


// --------------------------------------
// 🔹 MAP ITERATION
// --------------------------------------

for (let [key, value] of m) {
  console.log(key, value);
}


// ===============================
// 🔥 LIMITATIONS OF for...of ⚠️
// ===============================

// ❌ does NOT work on plain objects
// ❌ no direct index access
// ❌ cannot break object properties directly
// ❌ slightly slower than traditional for loop (in some cases)

// 👉 only works on ITERABLES:
// array, string, map, set


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// for...of → values iterate
// works on iterable only
// Map → flexible key-value structure
// use Object.keys() for objects