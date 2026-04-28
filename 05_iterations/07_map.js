// ===============================
// 🔥 1. BASIC SYNTAX
// ===============================

let arr = [1, 2, 3, 4];

let result = arr.map(function (val) {
  return val * 2;
});

console.log(result);
// Output: [2, 4, 6, 8]

// 👉 transforms each element
// 👉 returns new array


// --------------------------------------
// 🔹 2. ARROW FUNCTION
// --------------------------------------

let res = arr.map(val => val * 3);

console.log(res);
// Output: [3, 6, 9, 12]


// --------------------------------------
// 🔹 3. PARAMETERS
// --------------------------------------

arr.map((value, index, array) => {
  console.log(value, index);
});

// Output:
// 1 0
// 2 1
// 3 2
// 4 3

// 👉 value = element
// 👉 index = position


// --------------------------------------
// 🔹 4. DOES NOT MODIFY ORIGINAL
// --------------------------------------

let nums = [1, 2, 3];

let doubled = nums.map(val => val * 2);

console.log(nums);     
// Output: [1, 2, 3]

console.log(doubled);  
// Output: [2, 4, 6]

// 👉 original safe


// --------------------------------------
// 🔹 5. OBJECT ARRAY ⭐
// --------------------------------------

let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 }
];

// extract names
let names = users.map(user => user.name);

console.log(names);
// Output: ["A", "B"]


// --------------------------------------
// 🔹 6. RETURN OBJECT ⚠️
// --------------------------------------

let newUsers = users.map(user => ({
  name: user.name,
  age: user.age + 1
}));

console.log(newUsers);
// Output:
// [
//   { name: "A", age: 21 },
//   { name: "B", age: 26 }
// ]

// 👉 wrap object in ()
// 👉 otherwise undefined milega


// --------------------------------------
// 🔹 7. COMMON MISTAKE ⚠️
// --------------------------------------

let wrong = arr.map(val => {
  val * 2; // ❌ no return
});

console.log(wrong);
// Output: [undefined, undefined, undefined, undefined]

// 👉 must return value


// --------------------------------------
// 🔹 8. CHAINING ⭐ (VERY IMPORTANT)
// --------------------------------------

let result2 = arr
  .map(val => val * 2)   // step 1
  .filter(val => val > 4); // step 2

console.log(result2);
// Output: [6, 8]


// 🔥 Step-by-step breakdown:

// Step 1 (map):
// [1,2,3,4] → [2,4,6,8]

// Step 2 (filter):
// [2,4,6,8] → [6,8]

// 👉 chaining = multiple operations in one flow


// --------------------------------------
// 🔹 9. MAP VS forEach ⚠️
// --------------------------------------

// map → returns new array
// forEach → returns undefined


// --------------------------------------
// 🔹 10. ASYNC NOTE ⚠️
// --------------------------------------

// map + async returns array of promises ❗


// ===============================
// 🔥 LIMITATIONS ⚠️
// ===============================

// ❌ must return value
// ❌ cannot break early
// ❌ not for filtering (use filter)


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// map → transform data
// returns new array
// original unchanged
// best for modifying elements

// chaining → combine map + filter + reduce
// very important for clean code


// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);

