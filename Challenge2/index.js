// Create a zero instance for the tip.
let tip = null;

// Create billValue variable
let billValue = 280 ;

// Create the ternary Operator statement
// condition ? true statement : false statement

billValue >= 50 && billValue <= 300 ? tip = 0.15 : tip = 0.2;

let finalValue = billValue + tip;

console.log(`The billValue is ${billValue} , the tip is ${tip } and the finalValue is ${finalValue}`)


