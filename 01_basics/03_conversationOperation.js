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