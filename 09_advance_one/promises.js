// Promise One
// Promise Creation
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compeleted');
        resolve()
    }, 1000)
})

// promise consume
promiseOne.then(function(){
    console.log("Promise consumed");
})


// Promise Two
new Promise(function(resolve, reject){
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task 2 resolved");
})


// Promise Three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function (){
        resolve({username: "anshu", email: "anshu@google.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// Promise Four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "anshu", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// Promise Five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const respone = await promiseFive
        console.log(respone);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/Anshu1kr')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.