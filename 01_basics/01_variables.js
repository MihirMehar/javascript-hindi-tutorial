// we are learning about variable concept in javascript

const accountId = "123456"
var accountName = "Mihir"
let accountEmail = "Mihir@google.com"
accountCity ="Mumbai"
let accountState;

// in js if we declare variable using const means its values can't be changed

// accountId ="1316498" we got error like Assignment to constant variable.
// console.log(accountId);

accountName ="Shivam"
accountEmail = "Shivam@gmail.com"
accountCity = "Chandigarh"

/* that mean value can be changed while using let or var but var varibale
is not recommended because of block and functional Scope
*/
console.table([accountId,accountName,accountEmail,accountCity,accountState])