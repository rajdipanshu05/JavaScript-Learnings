// ===============================
// 🔥 1. BASIC SYNTAX
// ===============================

let arr = [10, 20, 30];

arr.forEach(function(value) {
  console.log(value);
});

// Output:
// 10
// 20
// 30

// 👉 iterates over each element


// --------------------------------------
// 🔹 2. PARAMETERS
// --------------------------------------

arr.forEach((value, index, array) => {
  console.log(value, index);
});

// value → element
// index → position
// array → original array


// --------------------------------------
// 🔹 3. ARROW FUNCTION
// --------------------------------------

arr.forEach((val) => console.log(val));


// --------------------------------------
// 🔹 4. DOES NOT RETURN ANYTHING ⚠️
// --------------------------------------

let result = arr.forEach((val) => val * 2);

console.log(result); // undefined ❌

// 👉 forEach returns undefined


// --------------------------------------
// 🔹 5. MODIFY ARRAY
// --------------------------------------

let nums = [1, 2, 3];

nums.forEach((val, i, arr) => {
  arr[i] = val * 2;
});

console.log(nums); // [2,4,6]


// --------------------------------------
// 🔹 6. CANNOT BREAK ⚠️
// --------------------------------------

arr.forEach((val) => {
  if (val === 20) break; // ❌ error
});

// 👉 break/continue not allowed


// --------------------------------------
// 🔹 7. USE RETURN (ONLY SKIPS CURRENT)
// --------------------------------------

arr.forEach((val) => {
  if (val === 20) return;
  console.log(val);
});

// Output:
// 10
// 30

// 👉 return ≈ continue (but only inside callback)


// --------------------------------------
// 🔹 8. ASYNC TRAP ⚠️
// --------------------------------------

async function test() {
  arr.forEach(async (val) => {
    await new Promise(res => setTimeout(res, 1000));
    console.log(val);
  });
}

test();

// 👉 does NOT wait ❌


// --------------------------------------
// 🔹 9. OBJECT ARRAY
// --------------------------------------

let users = [
  { name: "A" },
  { name: "B" }
];

users.forEach(user => {
  console.log(user.name);
});


// ===============================
// 🔥 LIMITATIONS ⚠️
// ===============================

// ❌ no break / continue
// ❌ no return value
// ❌ not good for async/await
// ❌ cannot chain like map/filter


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// forEach → simple iteration
// use map → when returning new array
// use for loop → when break needed


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )