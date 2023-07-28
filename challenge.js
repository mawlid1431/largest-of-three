// Step 1: Create 3 variables and assign numbers to them
let number1 = 12;
let number2 = 27;
let number3 = 6;

// Step 2: Compare the numbers using an if statement
if (number1 > number2 && number1 > number3) {
  console.log(`The largest number out of the three numbers is ${number1}.`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`The largest number out of the three numbers is ${number2}.`);
} else if (number3 > number1 && number3 > number2) {
  console.log(`The largest number out of the three numbers is ${number3}.`);
} else {
  console.log("Two or more numbers are equal and the largest.");
}

