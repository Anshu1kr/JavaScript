
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()

function addTwoNumbers(num1, num2) {             
    console.log(num1 + num2);
}

function addTwoNumbers(num1, num2) {            
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(2,5)

// console.log("Anshu: ", result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("anshu"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))           // In this val1 get 200, val2 get 400 and arrays get [500, 2000] as output 

const user = {
    username: "anshu",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);            // In these price != prices => so, price is undefined as output
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 1000]));