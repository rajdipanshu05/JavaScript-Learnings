// ===============================
// 🔥 1. BASIC SYNTAX
// ===============================

let obj = {
  name: "Dipanshu",
  age: 21
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// Output:
// name Dipanshu
// age 21

// 👉 iterates over KEYS (not values)


// --------------------------------------
// 🔹 2. ARRAY WITH for...in ⚠️
// --------------------------------------

let arr = [10, 20, 30];

for (let index in arr) {
  console.log(index, arr[index]);
}

// Output:
// 0 10
// 1 20
// 2 30

// 👉 gives index (string type)


// --------------------------------------
// 🔹 3. KEY TYPE ⚠️
// --------------------------------------

for (let index in arr) {
  console.log(typeof index);
}

// Output:
// string

// 👉 index always string


// --------------------------------------
// 🔹 4. INHERITED PROPERTIES ⚠️
// --------------------------------------

let parent = { a: 1 };

let child = Object.create(parent);
child.b = 2;

for (let key in child) {
  console.log(key);
}

// Output:
// b
// a ⚠️ (inherited)

// 👉 includes prototype properties


// --------------------------------------
// 🔹 5. FILTER OWN PROPERTIES
// --------------------------------------

for (let key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(key);
  }
}

// Output:
// b

// 👉 avoids inherited keys


// --------------------------------------
// 🔹 6. WITH OBJECT METHODS
// --------------------------------------

let user = { name: "Dipanshu", age: 21 };

for (let key in user) {
  console.log(key, user[key]);
}


// ===============================
// 🔥 LIMITATIONS OF for...in ⚠️
// ===============================

// ❌ not recommended for arrays
// ❌ index comes as string
// ❌ includes inherited properties
// ❌ order not guaranteed (especially in older JS)

// 👉 best for objects only


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// for...in → iterate keys
// works on objects
// includes prototype keys ⚠️
// use hasOwnProperty to filter

//map pr bhi iterate nhi kr skte isse