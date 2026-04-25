// ===============================
// 🔥 1. WHAT IS "this"?
// ===============================

// 👉 "this" refers to CURRENT EXECUTION CONTEXT
// 👉 decided by HOW function is called (call-site)

// Global context

// Browser:
console.log(this); 
// 👉 window

// Node.js:
console.log(this); 
// 👉 {} (module.exports) ⚠️

// WHY:
// Node wraps code in module → not global


// --------------------------------------
// 🔹 2. "this" OUTSIDE FUNCTION (IMPORTANT)
// --------------------------------------

// Browser:
console.log(this); // window

// Node:
console.log(this); // {} ❌ not global

// 👉 Interview trap:
// Node me top-level this ≠ global


// --------------------------------------
// 🔹 3. "this" in NORMAL FUNCTION ⚠️
// --------------------------------------

function test() {
  console.log(this);
}

test();

// Browser:
// non-strict → window
// strict → undefined

// Node:
// non-strict → global
// strict → undefined


// --------------------------------------
// 🔹 4. "this" in OBJECT (IMPLICIT BINDING)
// --------------------------------------

let user = {
  name: "Dipanshu",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // Dipanshu

// 👉 this = object calling method


// --------------------------------------
// 🔹 5. BIG TRAP (NESTED FUNCTION)
// --------------------------------------

let obj2 = {
  name: "Aman",
  fn: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

obj2.fn(); // undefined ❌

// 👉 inner becomes normal function call


// --------------------------------------
// 🔹 6. FIX using arrow (LEXICAL THIS)
// --------------------------------------

let obj3 = {
  name: "Aman",
  fn: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj3.fn(); // Aman


// --------------------------------------
// 🔥 7. ARROW FUNCTION BASICS
// --------------------------------------

// normal
function add(a, b) {
  return a + b;
}

// arrow
let add2 = (a, b) => a + b;


// --------------------------------------
// 🔹 8. ARROW FUNCTION SINGLE RETURN ⭐
// --------------------------------------

// implicit return (no return keyword)
let sum = (a, b) => a + b;

console.log(sum(2, 3)); // 5

// object return (IMPORTANT ⚠️)
let getObj = () => ({ name: "Dipanshu" });

console.log(getObj()); // { name: "Dipanshu" }

// ❌ mistake:
// () => { name: "Dipanshu" }
// → undefined (because treated as block)


// --------------------------------------
// 🔹 9. ARROW FUNCTION & this ⚠️
// --------------------------------------

let obj4 = {
  name: "Dipanshu",
  greet: () => {
    console.log(this.name);
  }
};

obj4.greet(); // undefined ❌

// 👉 arrow takes this from outer scope


// --------------------------------------
// 🔹 10. LEXICAL THIS ⭐
// --------------------------------------

let obj5 = {
  name: "Raj",
  fn() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj5.fn(); // Raj


// --------------------------------------
// 🔹 11. CALL / APPLY / BIND
// --------------------------------------

function show() {
  console.log(this.name);
}

let person = { name: "Dipanshu" };

show.call(person); // Dipanshu

// 👉 manually set this


// --------------------------------------
// 🔹 12. NEW KEYWORD (CONSTRUCTOR)
// --------------------------------------

function Person(name) {
  this.name = name;
}

let p1 = new Person("Dipanshu");

console.log(p1.name);

// 👉 this = newly created object


// --------------------------------------
// 🔹 13. METHOD EXTRACTION TRAP ⚠️
// --------------------------------------

let obj6 = {
  name: "Rahul",
  greet() {
    console.log(this.name);
  }
};

let fnRef = obj6.greet;

fnRef(); // undefined ❌


// --------------------------------------
// 🔹 14. SETTIMEOUT TRAP ⚠️
// --------------------------------------

let obj7 = {
  name: "Aman",
  fn() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

obj7.fn(); // undefined ❌

// fix:
setTimeout(() => console.log(this.name), 1000);


// --------------------------------------
// 🔹 15. ARROW LIMITATIONS ⚠️
// --------------------------------------

// ❌ no own this
// ❌ no arguments
// ❌ cannot use new
// ❌ call/apply/bind doesn't work


// --------------------------------------
// 🔹 16. PRIORITY RULES ⭐
// --------------------------------------

// 1. new binding
// 2. call/apply/bind
// 3. object method
// 4. default (global/undefined)


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// this depends on call-site
// Browser global → window
// Node global → global (but top-level this = {})

// arrow → lexical this
// normal → dynamic this

// 👉 MOST IMPORTANT:
// "Who is calling the function?"

// arrow single return → no return keyword needed
// object return → wrap in ( )