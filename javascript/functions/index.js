// FUNCTION
// Global variable
let count = 2;
// Function Decleration
function addToCount() {
  let localCount = 0;

  count = count + 8; // Updating count
  localCount = localCount + 4; //updating local count
  console.log("This is the value for count ", count);
  console.log("This is the value for localCount ", localCount);
}

addToCount(); //function without parameter

// Function with parameters
function myName(firstName, lastName, age, school) {
  console.log(firstName + " " + lastName + " " + age + " " + school);
}
myName("Fatai", "Abiodun", 24, 180);
myName("Olaoniye", "Ganiy", 24, 170);

// Function with parameters and default values
function myNameDefault(firstName = "", lastName = "", age = 18, school = "") {
  console.log(firstName + " " + lastName + " " + age + " " + school);
}
myNameDefault("Fatai", "Abiodun", 24, "SIPET");
myNameDefault("Olaoniye", "Ganiy", 24, "SEET");

// Function that returns a value
function myName(firstName = "", lastName = "") {
  let fullName = firstName + " " + lastName;
  return fullName;
}

let myFullName = myName("Abiodun", "Adekunle");
console.log(myFullName);

// function to perform operations and returning values
function operation(number1 = 1, number2 = 1, operationType = "") {
  //default value passed in
  if (operationType == "add") {
    let sum = number1 + number2;
    return sum;
  } else if (operationType == "sub") {
    let diff = number1 - number2;
    return diff;
  } else {
    console.log("The operation does not EXIT");
  }
}

let finalOperation1 = operation(20, 30, "add");
console.log(finalOperation1);
let finalOperation2 = operation(50, 10, "sub");
console.log(finalOperation2);
let finalOperation3 = operation(50, 10, "multiply");
console.log(finalOperation3);

//Function Expression
let sayMyName = function (firstName = "") {
  console.log(`my name is ${firstName}`);
};
sayMyName("Fatai Monsuru Abiodun");

// Callbacks Function
function displayUser(displayType, showFullName, showUserName) {
  if (displayType == "full") {
    showFullName();
  } else {
    showUserName();
  }
}

function showFullName() {
  console.log("Fatai Ruqoyahh");
}
function showUserName() {
  console.log("Ebudola222");
}

displayUser('full', showFullName, showUserName);
displayUser('any', showFullName, showUserName);


//ARROW FUNCTION
let example = (a, b) => a + b
console.log(example(1,2)) 