// ===============================
// 🔥 1. WHILE LOOP (BASIC)
// ===============================

// syntax
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// Output:
// 0 1 2 3 4

// 👉 condition pehle check hoti hai
// 👉 agar false → loop run hi nahi hoga


// --------------------------------------
// 🔹 2. FLOW UNDERSTANDING
// --------------------------------------

// Step-by-step:
// 1. check condition (i < 5)
// 2. run block
// 3. update (i++)
// repeat


// --------------------------------------
// 🔥 3. DO...WHILE LOOP
// --------------------------------------

// syntax
let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);

// Output:
// 0 1 2 3 4

// 👉 pehle run → baad me condition check


// --------------------------------------
// 🔥 4. MAIN DIFFERENCE ⚠️
// --------------------------------------

let x = 10;

// while
while (x < 5) {
  console.log("while loop");
}
// ❌ no output

// do...while
do {
  console.log("do while loop");
} while (x < 5);

// Output:
// do while loop ✅

// 👉 do...while runs at least once


// --------------------------------------
// 🔹 5. INFINITE LOOP ⚠️
// --------------------------------------

let k = 0;

while (k < 5) {
  console.log(k);
  // k++ missing ❌ infinite loop
}


// --------------------------------------
// 🔹 6. BREAK IN WHILE
// --------------------------------------

let n = 1;

while (n <= 5) {
  if (n === 3) break;
  console.log(n);
  n++;
}

// Output:
// 1
// 2


// --------------------------------------
// 🔹 7. CONTINUE IN WHILE
// --------------------------------------

let m = 0;

while (m < 5) {
  m++;

  if (m === 3) continue;

  console.log(m);
}

// Output:
// 1
// 2
// 4
// 5


// --------------------------------------
// 🔹 8. REAL USE CASE
// --------------------------------------

// unknown iterations (user input type case)

let count = 0;

while (count < 3) {
  console.log("Retry...");
  count++;
}


// --------------------------------------
// 🔹 9. SCOPE NOTE
// --------------------------------------

let a = 0;

while (a < 2) {
  let temp = a;
  a++;
}

// console.log(temp); ❌ block scoped


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// while → condition first check
// do...while → run first, check later
// break → stop loop
// continue → skip iteration
// always update variable → avoid infinite loop