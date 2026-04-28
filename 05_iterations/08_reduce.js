// ===============================
// 🔥 1. BASIC SYNTAX
// ===============================

// arr.reduce((accumulator, current) => {}, initialValue)

let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
// Output: 10

// 👉 acc = accumulated value
// 👉 curr = current element
// 👉 0 = initial value


// --------------------------------------
// 🔹 2. STEP-BY-STEP FLOW ⭐
// --------------------------------------

// iteration 1: acc = 0, curr = 1 → acc = 1
// iteration 2: acc = 1, curr = 2 → acc = 3
// iteration 3: acc = 3, curr = 3 → acc = 6
// iteration 4: acc = 6, curr = 4 → acc = 10


// --------------------------------------
// 🔹 3. WITHOUT INITIAL VALUE ⚠️
// --------------------------------------

let sum2 = arr.reduce((acc, curr) => acc + curr);

console.log(sum2);
// Output: 10

// 👉 acc starts from first element
// 👉 curr starts from second element

// ⚠️ empty array → error


// --------------------------------------
// 🔹 4. FIND MAX VALUE
// --------------------------------------

let max = arr.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, arr[0]);

console.log(max);
// Output: 4


// --------------------------------------
// 🔹 5. OBJECT ARRAY ⭐
// --------------------------------------

let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];

let totalAge = users.reduce((acc, user) => acc + user.age, 0);

console.log(totalAge);
// Output: 45


// --------------------------------------
// 🔹 6. COUNT OCCURRENCES
// --------------------------------------

let nums = [1, 2, 2, 3, 3, 3];

let count = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(count);
// Output: {1:1, 2:2, 3:3}


// --------------------------------------
// 🔹 7. FLATTEN ARRAY
// --------------------------------------

let nested = [[1, 2], [3, 4]];

let flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
// Output: [1,2,3,4]


// --------------------------------------
// 🔹 8. CHAINING ⭐
// --------------------------------------

let result = arr
  .map(val => val * 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);
// Output: 20

// Step 1: [1,2,3,4] → [2,4,6,8]
// Step 2: sum = 20


// --------------------------------------
// 🔹 9. COMMON MISTAKE ⚠️
// --------------------------------------

let wrong = arr.reduce((acc, curr) => {
  acc + curr; // ❌ no return
}, 0);

console.log(wrong);
// Output: undefined


// ===============================
// 🔥 LIMITATIONS ⚠️
// ===============================

// ❌ confusing for beginners
// ❌ must return accumulator
// ❌ harder to read sometimes


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// reduce → reduce array to single value
// can return number, object, array, anything
// most powerful array method