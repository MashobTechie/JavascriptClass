// Callback Function
function orderPizza(callback) {
    console.log("Ordering pizza...");
    setTimeout(function() {
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



// Async/Await