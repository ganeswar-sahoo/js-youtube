//  Primitve  (Call by Value)

// 7 types : String, Number, Boolean, null (ek dum khali), undefined (value is not known),  Symbol, BigInt, 

// js is dynamic typed 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 347907390872973290329n;



// Reference (Non Primitive)

// Array, Objects, Functions datetype is object of all 

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Ganes",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
// for more details go and check ecma js



// ++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Ganeswardotcom";
let anothername = myYoutubeName;
anothername = "chaiaurcode";

console.log(myYoutubeName);
console.log(anothername);

