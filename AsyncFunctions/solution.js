// Task 1: Coffee Order with Callback
const orderCoffee = (callback) => {
    console.log("Ordering coffee...");
    setTimeout( () => {
        console.log("Your coffee is ready! ���")
    }, 3000)
}

orderCoffee();

 
 

// // Task 2: Pizza Order with Promises

function orderPizza() {
    return new Promise ((success, failure) => {
        console.log('Still baking Pizza');
        setTimeout(() => {
            success("Pizza is ready! ���");
        }, 5000);
    })
}



// function orderPizza() {
//     return new Promise((resolve, reject) => {
//         console.log("Baking pizza...");
//         setTimeout(() => {
//             resolve("Pizza is ready! 🍕");
//         }, 5000);
//     });
// }

// orderPizza().then((message) => {
//     document.getElementById("demo1").innerText = message;
//     console.log(message);
//     console.log("Eating the pizza now!");
// });

// // Task 3: Simulating a Multi-Step Process
// async function processData() {
//     console.log("Starting process...");
    
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log("Step 1: Data received ✅");
    
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     console.log("Step 2: Processing data...⌛");
    
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     const success = Math.random() > 0.5;
//     if (success) {
//         console.log("Step 3: Process completed successfully! 🎉");
//     } else {
//         console.log("Step 3: Process failed ❌");
//     }
// }

// processData();
