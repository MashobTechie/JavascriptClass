// Callback Function
function orderPizza(callback) {
    console.log("Ordering pizza...");
    setTimeout(function () {
        console.log("Pizza is ready!");
        callback();
    }, 3000); // Wait 3 seconds before calling back
}

function eatPizza() {
    console.log("Eating the pizza now!");
}

// Order pizza and eat when it's ready // Invoke your function
orderPizza(eatPizza);


// Asynchronous Function



// Promises

async function asyncOrderPizza() {
    console.log("Ordering pizza...");
    await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds before resolving
    console.log("Pizza is ready!");
}

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (success, failure) {
    let x = false;

    // The producing code (this may take some time)

    if (x == true) {
        success("OK");
    } else {
        failure("Error");
    }
});

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);
myDisplayer()

// Async/Await

// "async and await make promises easier to write"

// async makes a function return a Promise
// await makes a function wait for a Promise

//  The keyword async before a function makes the function return a promise:
async function myFunction() {
    return "Hello";
}

myFunction().then(
    function (result) {
        console.log('Result is ' + result)
    },
    function (error) {
        console.log('Error is ' + error)
    }
)
// The await keyword can only be used inside an async function.

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Hi, your promise is here");}, 3000);
    });
    document.getElementById("demo1").innerHTML = await myPromise;
  }
  
  myDisplay();
  
  