const accountId=144551
let accountEmail="Krishna@google.com"
var accountPassword="1234"
accountCity="Jaipur"
let accountState

// accountId=2 //Not allowed
accountEmail="fadsad.com"
accountCity="Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
Js gives undefined for unintialized variables
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])




