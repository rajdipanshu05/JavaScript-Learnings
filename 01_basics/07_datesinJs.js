// ===============================
// 🔥 DATE OBJECT (WITH OUTPUTS)
// ===============================


// 🔹 Current date & time
let now = new Date();
console.log(now);
// Example Output:
// 2026-04-14T17:45:30.123Z  (ISO format in console)

// OR (browser):
// Tue Apr 14 2026 23:15:30 GMT+0530 (India Standard Time)


// --------------------------------------
// 🔹 CREATE DATE
// --------------------------------------

let d1 = new Date("2024-01-01");
console.log(d1);
// Mon Jan 01 2024 05:30:00 GMT+0530

let d2 = new Date(2024, 0, 1);
console.log(d2);
// Mon Jan 01 2024 00:00:00 GMT+0530

let d3 = new Date(1700000000000);
console.log(d3);
// Tue Nov 14 2023 22:13:20 GMT+0530


// --------------------------------------
// 🔹 GET METHODS
// --------------------------------------

let date = new Date("2026-04-14T10:30:45");

console.log(date.getFullYear()); // 2026
console.log(date.getMonth());    // 3 (April → 0-based)
console.log(date.getDate());     // 14
console.log(date.getDay());      // 2 (Tuesday)

console.log(date.getHours());    // 10
console.log(date.getMinutes());  // 30
console.log(date.getSeconds());  // 45


// --------------------------------------
// 🔹 SET METHODS
// --------------------------------------

let d = new Date("2024-01-01");

d.setFullYear(2025);
d.setMonth(5); // June
d.setDate(15);

console.log(d);
// Sun Jun 15 2025 ...


/*
Format:
Day Month Date Year Time Timezone
*/


// --------------------------------------
// 🔹 TIMESTAMP
// --------------------------------------

let timestamp = Date.now();
console.log(timestamp);
// 1713110730123 (milliseconds)

// convert date → timestamp
console.log(date.getTime());
// same type number (ms)


// --------------------------------------
// 🔹 FORMAT METHODS
// --------------------------------------

let dt = new Date("2026-04-14T10:30:45");

console.log(dt.toString());
// Tue Apr 14 2026 10:30:45 GMT+0530 (India Standard Time)

console.log(dt.toDateString());
// Tue Apr 14 2026

console.log(dt.toTimeString());
// 10:30:45 GMT+0530 (India Standard Time)

console.log(dt.toLocaleString());
// 14/4/2026, 10:30:45 am (India format)

console.log(dt.toLocaleDateString());
// 14/4/2026

console.log(dt.toLocaleTimeString());
// 10:30:45 am


// --------------------------------------
// 🔹 TIME CALCULATION
// --------------------------------------

let start = new Date("2024-01-01");
let end = new Date("2024-01-10");

let diff = end - start;

console.log(diff);
// 777600000 (milliseconds)

let days = diff / (1000 * 60 * 60 * 24);
console.log(days); // 9


// --------------------------------------
// 🔹 CUSTOM FORMAT
// --------------------------------------

let today = new Date("2026-04-14");

let formatted = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;

console.log(formatted);
// 14-4-2026


// ===============================
// 🔥 FORMAT SUMMARY (IMPORTANT)
// ===============================

// toString()          → Full readable date + time + timezone
// toDateString()      → Only date
// toTimeString()      → Only time
// toLocaleString()    → Local format (dd/mm/yyyy)
// toLocaleDateString()→ Only date (local)
// toLocaleTimeString()→ Only time (local)


// ===============================
// ⚡ FINAL TAKEAWAY
// ===============================

// Date internally = milliseconds since 1970
// Month = 0-based
// getDay() = 0 (Sun) to 6 (Sat)
// Locale methods depend on region