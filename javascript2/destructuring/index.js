// Destructuring an Array
let names = ["Fatai", "Monsuru", "Abiodun", "Adekunle", "Olasunkanmi"];
let [firstName, secondName, thirdName] = names;
console.log(firstName);
console.log(secondName);
console.log(thirdName);

let [, , , , lastName] = names; // when you want to print the lastName alone
console.log(lastName);

let [name1, ...restOfNames] = names; //...restOfNanes - when you want to assing
console.log(firstName); //the rest in an object to a variable
console.log(restOfNames);
console.log(...restOfNames);

// Destructuring an Object
let settings = { theme: "dark", fontSize: 20, displayFullScreen: true };
let { theme, fontSize } = settings; //grabbing only theme from the object
console.log(theme);
console.log(fontSize);
console.log(theme, fontSize);

let { theme: myTheme, ...restofObject } = settings; // assigning new name (theme updated to theme) and
console.log(myTheme); //  assigning others to a variable
console.log(restofObject);

// Destructuring in a function
const user = {
  name: "Adekunle",
  age: 25,
};

function getUserInfo({ name, age }) {
  // Accessing values in a function using destructuring
  console.log(name);
  console.log(age);
}
getUserInfo(user);

function getUserInfo(user) {
  // Normal accessing values in a function
  console.log(user.name);
  console.log(user.age);
}
getUserInfo(user);
