// console.log(2 > 1); 

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// The reason is that an euality check == and comparisions > < >= <= work differently. 
// Comparisons convert null to a number, treation it as 0. That's way (3) null >= 0 is true and (1) null > 0 is false.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === strit check 

console.log("2" === 2); // false bcz it check the datatype 


