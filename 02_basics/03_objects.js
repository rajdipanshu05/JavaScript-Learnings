// ===============================
// 🔥 JAVASCRIPT OBJECTS (MASTER NOTES + POINTS)
// ===============================


// *********************************
// 🔹 1. OBJECT CREATION
// *********************************

// Object literal (MOST USED ✅)
let obj1 = {
  name: "Dipanshu",
  age: 21
};
// 👉 Fast, simple, most common

// Constructor (singleton style ⚠️)
let obj2 = new Object();
obj2.name = "Raj";
// 👉 Rarely used, but interview me puchte hain

// Object.create (PROTOTYPE BASED ⭐)
let proto = {
  greet() {
    console.log("Hello");
  }
};

let obj3 = Object.create(proto);
obj3.greet(); // Hello
// 👉 Inheritance via prototype


// *********************************
// 🔹 2. ACCESSING VALUES
// *********************************

let user = { name: "Dipanshu", age: 21 };

// dot notation
console.log(user.name);

// bracket notation (dynamic keys)
let key = "age";
console.log(user[key]);

// 👉 Interview:
// dot = static
// bracket = dynamic / variable key


// *********************************
// 🔹 3. ADD / UPDATE / DELETE
// *********************************

user.city = "Bhopal"; // add
user.age = 22;        // update
delete user.city;     // delete

// 👉 Objects are mutable


// *********************************
// 🔹 4. OBJECT METHODS
// *********************************

let o = { a: 1, b: 2 };

console.log(Object.keys(o));   // ["a","b"]
console.log(Object.values(o)); // [1,2]
console.log(Object.entries(o));// [["a",1],["b",2]]

// 👉 Used in iteration / loops


// *********************************
// 🔹 5. Object.assign() ⚠️
// *********************************

let a = { x: 1 };
let b = { y: 2 };

let merged = Object.assign(a, b);

console.log(merged); // {x:1, y:2}
console.log(a);      // {x:1, y:2} ⚠️ modified

// 👉 IMPORTANT:
// modifies target object
// shallow copy only

// safe version
let safe = Object.assign({}, a);


// *********************************
// 🔹 6. SPREAD OPERATOR
// *********************************

let objA = { a: 1 };
let objB = { b: 2 };

let objC = { ...objA, ...objB };

// 👉 cleaner than assign
// 👉 still shallow copy


// *********************************
// 🔹 7. SHALLOW COPY ⚠️
// *********************************

let original = {
  user: { name: "Dipanshu" }
};

let copy = { ...original };

copy.user.name = "Raj";

console.log(original.user.name); // "Raj"

// 👉 Nested objects shared
// 👉 BIG INTERVIEW TRAP


// *********************************
// 🔹 8. DEEP COPY (LIMITED)
// *********************************

let deep = JSON.parse(JSON.stringify(original));

// 👉 works for simple objects
// ❌ fails for functions, undefined


// *********************************
// 🔹 9. FREEZE vs SEAL
// *********************************

let test = { a: 1 };

Object.freeze(test);
// ❌ no add/update/delete

Object.seal(test);
// ✔ update allowed
// ❌ add/delete

// 👉 Used for immutability


// *********************************
// 🔹 10. THIS KEYWORD ⚠️
// *********************************

let user2 = {
  name: "Dipanshu",
  greet() {
    console.log(this.name);
  }
};

user2.greet(); // Dipanshu

// ❌ arrow function breaks this


// *********************************
// 🔹 11. OPTIONAL CHAINING
// *********************************

let data = {};

console.log(data?.user?.name); // undefined

// 👉 prevents runtime error


// *********************************
// 🔹 12. DESTRUCTURING
// *********************************

let student = { name: "Dipanshu", age: 21 };

let { name, age } = student;

// 👉 clean extraction


// *********************************
// 🔹 13. SYMBOL (VERY IMPORTANT ⭐)
// *********************************

let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // false ❌

// 👉 always unique

let objSym = {
  name: "Dipanshu",
  [sym1]: 123
};

console.log(objSym[sym1]); // 123

// hidden keys
console.log(Object.keys(objSym)); // ["name"]

console.log(Object.getOwnPropertySymbols(objSym));
// [Symbol(id)]

// 👉 Symbol = hidden + unique key


// *********************************
// 🔹 14. PROPERTY CHECK
// *********************************

let check = { a: 1 };

console.log("a" in check); // true
console.log(check.hasOwnProperty("a")); // true

// 👉 difference:
// in → checks prototype also
// hasOwnProperty → only own keys


// *********************************
// 🔹 15. PROTOTYPE CONCEPT ⭐
// *********************************

let parent = { role: "admin" };

let child = Object.create(parent);

console.log(child.role); // "admin"

// 👉 prototype chain concept


// *********************************
// 🔹 16. REFERENCE BEHAVIOR ⚠️
// *********************************

let objX = { val: 1 };
let objY = objX;

objY.val = 100;

console.log(objX.val); // 100

// 👉 both share same memory


// *********************************
// 🔹 17. EDGE CASES
// *********************************

// overwrite
let o1 = { a: 1 };
let o2 = { a: 2 };

let res = { ...o1, ...o2 };
console.log(res); // {a:2}

// 👉 last object wins

// number key becomes string
let objKey = { 1: "one" };

console.log(objKey["1"]); // "one"


// *********************************
// ⚡ FINAL TAKEAWAY
// *********************************

// Objects = key-value pairs
// Mutable + reference type
// assign → modifies target
// spread → safer but shallow
// symbol → hidden keys
// create → prototype inheritance

// 👉 MOST IMPORTANT:
// shallow vs deep copy
// reference behavior
// assign vs spread
// symbol
// this keyword