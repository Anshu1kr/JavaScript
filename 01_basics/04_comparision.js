console.log(2 > 1); 
console.log((2 >= 1));
console.log(2 < 1);
console.log(2 == 1);
console.log( 2 != 1);

console.log("2" > 1);
console.log("02" > 1);

// Avoid these type of conversion

console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

console.log(undefined == 0);  // false
console.log(undefined > 0);  // false 
console.log(undefined < 0);  // false

// ===

console.log("2" === 2);