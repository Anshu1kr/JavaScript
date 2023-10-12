
// let myName = "anshu     "
// let mychannel = "js      "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anshu = function(){
    console.log(`anshu is present in all objects`);
}

Array.prototype.heyAnshu = function(){
    console.log(`Anshu says hello`);
}

// heroPower.anshu()
// myHeros.anshu()

// myHeros.heyAnshu()
// heroPower.heyAnshu()                                 // Error: Because we only give the power to Array not function or string



// inheritance 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport                              // this is updated code for inheritance
}

Teacher.__proto__ = User                                    // this is updated code for inheritance


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JavaScript     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"anshu".trueLength()
"iceTea".trueLength()