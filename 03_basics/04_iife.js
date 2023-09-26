// Immediately Invoked Function Expressions (IIFE)

// For Interview => global scope ke pollution se problem hoti h kai bar toh us global scope ke jo bhi variables h
// jo bhi waha declaration h uske pollution ko hatane ke liye humne iife ka use kiya


(function chai(){                            
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('anshu')
