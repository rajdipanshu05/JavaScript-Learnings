/******************** 
 1. TRUTHY vs FALSY
********************/

// Concept:
// JS conditions don't return true/false always.
// They evaluate values as truthy or falsy.

// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else → truthy

const userEmail = []

if (userEmail) {
    console.log("Got user email") // ✅ empty array is truthy
} else {
    console.log("Don't have user email")
}


/******************** 
 2. CHECK EMPTY ARRAY / OBJECT
********************/

// Concept:
// Arrays & objects are always truthy → must check length/keys

if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}


/******************** 
 3. NULLISH COALESCING (??)
********************/

// Concept:
// Returns first value that is NOT null or undefined

let val1

val1 = 5 ?? 10            // 5
val1 = null ?? 10         // 10
val1 = undefined ?? 15    // 15
val1 = null ?? 10 ?? 20   // 10

console.log("Nullish:", val1)

// Difference with ||
// || checks all falsy values
// ?? checks only null/undefined

console.log(0 || 10)   // 10 ❌ (0 treated as false)
console.log(0 ?? 10)   // 0  ✅ (valid value)


/******************** 
 4. TERNARY OPERATOR
********************/

// Concept:
// Short form of if-else for simple conditions

const iceTeaPrice = 100

iceTeaPrice <= 80 
    ? console.log("less than 80") 
    : console.log("more than 80")


/******************** 
 5. SHORT-CIRCUIT
********************/

// Concept:
// JS stops evaluation early when result is decided

// OR (||) → returns first truthy
let val2 = "" || "default"
console.log("OR:", val2)

// AND (&&) → returns last value if all truthy
let val3 = "hello" && "world"
console.log("AND:", val3)


/******************** 
 6. OPTIONAL CHAINING (?.)
********************/

// Concept:
// Prevents error when accessing properties of null/undefined

const user = null

console.log(user?.email) // undefined (safe access)


/******************** 
 7. STRICT vs LOOSE EQUALITY
********************/

// Concept:
// == does type conversion (unsafe)
// === checks type + value (safe)

console.log(0 == false)   // true ❌
console.log(0 === false)  // false ✅


/******************** 
 8. TYPE COERCION
********************/

// Concept:
// JS automatically converts types in operations

console.log("5" + 2)  // "52" (string concatenation)
console.log("5" - 2)  // 3 (number conversion)


/******************** 
 9. BONUS EDGE CASES (INTERVIEW)
********************/

// Concept:
// Some weird JS behaviors due to coercion

console.log([] == false)   // true 😵
// console.log([] === false)  // false

console.log(null == undefined)   // true
console.log(null === undefined)  // false

console.log(Boolean([]))   // true
console.log(Boolean({}))   // true


/******************** 
 🔥 FINAL TAKEAWAYS
********************/

// 1. Empty array/object → always truthy
// 2. Use === instead of ==
// 3. Use ?? when 0 or "" are valid values
// 4. Use ?. to avoid crashes
// 5. Always check length/keys for emptiness
