// singleton
// Object.create

// object literals

const mySym = Symbol("key1")  // Symbol declaration


const JsUser = {
    name: "Anshu",
    "full name": "Anshu Kushwaha",
    [mySym]: "mykey1",
    age: 18,
    location: "Delhi",
    email: "anshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)            // this is use every where but it doesn't working for full name 
// console.log(JsUser["email"])         // this is correct 
// console.log(JsUser["full name"])     // we does not access this with .full name
// console.log(JsUser[mySym])           // this is use for symbol

JsUser.email = "anshu@chatgpt.com"
// Object.freeze(JsUser)                           // if we freeze the object we doesn't change in it
JsUser.email = "anshu@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());