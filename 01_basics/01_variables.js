const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"

// accountId = 2; // 

accountEmail = "hc@hc.com";
accountPassword = 21212121;
accountCity = "Bengluru"

console.log(accountId)

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
console.table([accountId , accountEmail , accountPassword , accountCity]);