// ===============================
// 🔥 1. BASIC SYNTAX
// ===============================

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid day");
}


// 👉 switch checks STRICT comparison (===)
// 👉 break is important to stop execution


// --------------------------------------
// 🔹 2. WITHOUT BREAK (FALL-THROUGH ⚠️)
// --------------------------------------

let num = 1;

switch (num) {
  case 1:
    console.log("One");

  case 2:
    console.log("Two");

  case 3:
    console.log("Three");
}

// Output:
// One
// Two
// Three

// 👉 Without break → all cases below execute


// --------------------------------------
// 🔹 3. DEFAULT CASE
// --------------------------------------

let value = 10;

switch (value) {
  case 1:
    console.log("One");
    break;

  default:
    console.log("No match");
}

// 👉 default runs when no case matches


// --------------------------------------
// 🔹 4. MULTIPLE CASES (GROUPING)
// --------------------------------------

let fruit = "apple";

switch (fruit) {
  case "apple":
  case "mango":
    console.log("Sweet fruit");
    break;

  case "lemon":
    console.log("Sour fruit");
    break;
}


// 👉 multiple cases → same block


// --------------------------------------
// 🔹 5. EXPRESSION IN SWITCH
// --------------------------------------

let x = 10;

switch (true) {
  case x > 5:
    console.log("Greater than 5");
    break;

  case x < 5:
    console.log("Less than 5");
    break;
}

// 👉 used like if-else


// --------------------------------------
// 🔹 6. TYPE CHECK (VERY IMPORTANT ⚠️)
// --------------------------------------

let val = "2";

switch (val) {
  case 2:
    console.log("Number 2");
    break;

  case "2":
    console.log("String 2");
    break;
}

// Output:
// String 2

// 👉 uses strict equality (===)


// --------------------------------------
// 🔹 7. EMPTY CASE
// --------------------------------------

let a = 1;

switch (a) {
  case 1:
  case 2:
    console.log("1 or 2");
    break;
}


// --------------------------------------
// 🔹 8. BLOCK SCOPE ⚠️
// --------------------------------------

switch (1) {
  case 1:
    let x = 10;
    console.log(x);
    break;
}

// 👉 each case shares same scope
// 👉 use {} if needed


// --------------------------------------
// 🔹 9. REAL USE CASE
// --------------------------------------

let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;

  case "user":
    console.log("Limited access");
    break;

  default:
    console.log("Guest");
}


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// switch uses ===
// break prevents fall-through
// default is fallback
// can group cases
// careful with types

// agar break use nhi krenge toh aage ka saara case execute ho jyega default ko chodkar