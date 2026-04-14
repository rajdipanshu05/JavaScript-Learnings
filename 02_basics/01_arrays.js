// Method 2 (constructor ❌ avoid)
// let arr2 = new Array(1, 2, 3);

// Mixed types allowed
// let arr3 = [1, "hello", true];



// ===============================
// 🔥 1. ADD / REMOVE METHODS (MODIFY ORIGINAL)
// ===============================

let arr = [1, 2, 3];

// push → add at end
arr.push(4); 
// [1,2,3,4]

// pop → remove last
arr.pop(); 
// [1,2,3]

// unshift → add at start (slow O(n))
arr.unshift(0); 
// [0,1,2,3]

// shift → remove first (slow O(n))
arr.shift(); 
// [1,2,3]


// ===============================
// 🔥 2. splice() (MOST POWERFUL ⚠️)
// ===============================

// splice(start, deleteCount, ...items)

let a = [1, 2, 3, 4];

// remove
a.splice(1, 2); 
// removed: [2,3]
// array: [1,4]

// insert
a.splice(1, 0, 99);
// [1,99,4]

// replace
a.splice(1, 1, 100);
// [1,100,4]

// 👉 modifies original array


// ===============================
// 🔥 3. slice() (SAFE METHOD)
// ===============================

let b = [1, 2, 3, 4];

let c = b.slice(1, 3); 
// [2,3]
// original unchanged

// negative index
console.log(b.slice(-2)); // [3,4]

// 👉 end excluded
// 👉 does NOT modify original


// ===============================
// 🔥 4. concat() & spread
// ===============================

let x = [1, 2];
let y = [3, 4];

// concat
let z1 = x.concat(y); 
// [1,2,3,4]

// spread
let z2 = [...x, ...y]; 
// [1,2,3,4]

// 👉 both return new array


// ===============================
// 🔥 5. sort() (VERY IMPORTANT ⚠️)
// ===============================

let nums = [10, 2, 5];

// wrong (string compare)
nums.sort(); 
// [10,2,5]

// correct
nums.sort((a, b) => a - b);
// [2,5,10]

// descending
nums.sort((a, b) => b - a);

// 👉 modifies original


// ===============================
// 🔥 6. reverse()
// ===============================

let r = [1, 2, 3];
r.reverse(); 
// [3,2,1]

// 👉 modifies original


// ===============================
// 🔥 7. fill()
// ===============================

let f = [1, 2, 3];

f.fill(0); 
// [0,0,0]

// partial
f.fill(9, 1, 3); 
// [0,9,9]

// 👉 modifies original


// ===============================
// 🔥 8. includes() & indexOf()
// ===============================

let arr2 = [10, 20, 30];

arr2.includes(20); // true
arr2.indexOf(30);  // 2

// not found
arr2.indexOf(100); // -1


// ===============================
// 🔥 9. join() (array → string)
// ===============================

let arr3 = [1, 2, 3];

arr3.join("-"); 
// "1-2-3"


// ===============================
// 🔥 10. flat()
// ===============================

let nested = [1, [2, [3]]];

nested.flat(2); 
// [1,2,3]

// 👉 returns new array


// ===============================
// 🔥 11. Array.isArray()
// ===============================

Array.isArray([1,2]); // true
Array.isArray("abc"); // false


// ===============================
// 🔥 12. from() & of()
// ===============================

// from → iterable → array
Array.from("hello"); 
// ["h","e","l","l","o"]

// of → values → array
Array.of(1, 2, 3); 
// [1,2,3]


// ===============================
// 🔥 13. COPY BEHAVIOR ⚠️
// ===============================

let original = [1, 2];
let copy = original;

copy[0] = 100;

console.log(original); // [100,2]

// 👉 reference issue


// ===============================
// 🔥 14. SAFE COPY
// ===============================

// shallow copy
let safe = [...original];

// deep copy (basic)
let deep = JSON.parse(JSON.stringify(original));


// ===============================
// ⚡ FINAL SUMMARY
// ===============================

// 🔴 modifies original:
// push, pop, shift, unshift, splice, sort, reverse, fill

// 🟢 returns new array:
// slice, concat, spread, flat

// ⚠️ important:
// slice ≠ splice
// sort default is string
// spread = shallow copy
// arrays = reference type

// push/pop → O(1)
// shift/unshift → O(n) ⚠️
// slice → O(n)
// splice → O(n)
// sort → O(n log n)
