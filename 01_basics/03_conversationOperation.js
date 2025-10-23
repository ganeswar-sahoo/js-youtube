let score = 33;
let score1 = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score1);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33 
// "33abc" => NaN
// true => 1; false => 0

let isLogedIn = 1; 

let booleanIsLoggedIn = Boolean(isLogedIn);
console.log(booleanIsLoggedIn);

// "" => fals; "Ganes" => true;

// ************ Operations ************

let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello" 
let str2 = " Ganes"

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);  // 12
console.log(1 + "2"); // 12
console.log("1" + "2"); // 12
// Do not write these types of code this is a messy code not use in practical
console.log("1" + 2 + 3); // 123
console.log(1 + 2 + "3"); // 33

console.log(true); // true
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3 

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100
gameCounter++;
console.log(gameCounter);




