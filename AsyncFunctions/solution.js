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

orderPizza().then(() => {
    console.log('Eating the pizza now')
})


 

// // Task 3: Simulating a Multi-Step Process

async function processData () {
    console.log('Starting process...');

    await new Promise(success => setTimeout(success, 2000));
    console.log('Data Received')

    await new Promise(success => setTimeout(success, 2000));
    console.log('Processing data...')

    await new Promise(success => setTimeout(success, 2000));
    console.log('Data Received')

    const success = Math.random() > 0.5;

    if (success) {
        console.log('Process completed siuccessfully! ���')
    } else{
        console.log('Process failed')
    }

}


processData();