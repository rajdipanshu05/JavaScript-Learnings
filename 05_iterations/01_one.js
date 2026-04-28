// ===============================
// 🔥 1. BASIC FOR LOOP
// ===============================

// syntax
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Output:
// 0 1 2 3 4

// 👉 initialization → condition → increment


// --------------------------------------
// 🔹 2. FLOW UNDERSTANDING
// --------------------------------------

// Step-by-step:
// 1. i = 0
// 2. check i < 5
// 3. run body
// 4. i++
// repeat


// --------------------------------------
// 🔹 3. REVERSE LOOP
// --------------------------------------

for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Output: 5 4 3 2 1


// --------------------------------------
// 🔹 4. NESTED LOOP
// --------------------------------------

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}

// Output:
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2


// --------------------------------------
// 🔥 5. BREAK (IMPORTANT)
// --------------------------------------

// break → loop ko turant stop karta hai

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Output:
// 1
// 2

// 👉 loop stops when i = 3


// --------------------------------------
// 🔥 6. CONTINUE (IMPORTANT)
// --------------------------------------

// continue → current iteration skip karta hai

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Output:
// 1
// 2
// 4
// 5

// 👉 3 skip ho gaya


// --------------------------------------
// 🔹 7. EVEN NUMBERS EXAMPLE
// --------------------------------------

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

// Output:
// 2 4 6 8 10


// --------------------------------------
// 🔹 8. INFINITE LOOP ⚠️
// --------------------------------------

for (let i = 0; i < 5; ) {
  console.log(i);
  // i++ missing → infinite loop ❌
}


// --------------------------------------
// 🔹 9. SCOPE (IMPORTANT)
// --------------------------------------

for (let i = 0; i < 3; i++) {
  // i block scope me hai
}

// console.log(i); ❌ error

// 👉 let → block scoped


// --------------------------------------
// 🔹 10. VAR VS LET ⚠️
// --------------------------------------

for (var i = 0; i < 3; i++) {}

console.log(i); // 3 ❌ (leaks outside)

// 👉 var → function scoped
// 👉 let → block scoped


// --------------------------------------
// 🔹 11. MULTIPLE VARIABLES
// --------------------------------------

for (let i = 0, j = 5; i < j; i++, j--) {
  console.log(i, j);
}


// --------------------------------------
// 🔹 12. EMPTY PARTS
// --------------------------------------

let i = 0;

for (; i < 3; ) {
  console.log(i);
  i++;
}


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// for → loop with control
// break → stop loop completely
// continue → skip current iteration
// let → block scope
// var → function scope
// infinite loop → missing condition/update