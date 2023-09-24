// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.5

const isLOggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // false

const bigNumber = 345678912n

// Datatype of null is Object



// ************************************//



// Reference (non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "anshu",
    age: 18
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// Datatype of all non-primitive type have function but functions have Object-Function
