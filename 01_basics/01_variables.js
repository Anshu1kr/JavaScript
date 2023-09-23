const accountId = 12345;
let accountEmail = "anshu@gmail.com";
var accountPassword = "54321";
accountCity = "Ghazibad";

accountEmail = "kumar@gmail.com";
accountPassword = "212121";
accountCity = "Delhi";

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
