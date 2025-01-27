// declare the variable BMI with its formula
// const BMI = mass/height**2;

// Declare variables for mark's height and mass
let MarkHeight = 60;
let MarkMass = 70;

// Declasre variables for john's height and mass
let JohnHeight = 65;
let JohnMass = 80;

// Calculate John's BMI
const JohnBMI = JohnMass/JohnHeight**2;
console.log(`John's BMI is ${ JohnBMI}`);

// Calculate Mark's BMI
const MarkBMI = MarkMass/MarkHeight**2;
console.log(`Mark's BMI is ${MarkBMI}`);

if (MarkBMI > JohnBMI) {
    console.log(`MarkBMI is greater than JohnBMI`)
} else {
    console.log(`Mark's BMI is lesser than John's BMI`)
};