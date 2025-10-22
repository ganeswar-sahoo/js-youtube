const accountId = 144553;
let accountEmail = "ganeswar@gmail.com";
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed


accountEmail = "kartik@gmail.com"
accountPassword = "21211122"
accountCity = "Bengaluru"
console.log(accountId);



/*
Prefer not to use var 
because of issue in block scope and 
functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])

console.log(accountState);
