// Two methods of creating an array
let arr = new Array(); //Class method of creating and array
let arr2 = [];

let users = ["Biodun", "Oyetunde", "Opeyemi", "Adebayo"];
console.log(users);
console.log(users.length);

//Updating an array
users[2] = "Temitope";
console.log(users);

arr[0] = "Adedayo";
arr[1] = "Olaoniye";
arr[2] = "Fatai";
arr[3] = "Adeoye";
console.log(arr);

// You can store any data type in an array
let bio = [
  "Adekunle",
  "SIPET",
  22,
  24.5,
  true,
  { department: "civil", level: 200, course: "EET221" },
];
console.log(bio);

// ARRAY METHODS
let animals = ["lion", "pig", "goat", "sheep"];
let institutions = ["FUTMINNA", "FUTA", "OAU", "LAUTECH", "UNILORIN", "LASU"];

animals.push("dog"); // this will ADD value:dog to the end of an array
console.log(animals);

institutions.pop(); //this will REMOVE a value from the end of an array
console.log(institutions);

institutions.shift(); // this will REMOVE a value from the beginning of an array
console.log(institutions);

institutions.unshift("FUTMINNA2"); // this will ADD a value to the beginning of an array
console.log(institutions);

console.log(institutions.indexOf('OAU')) // Get index of a value
console.log(institutions.slice(0, 3)) // Cut a value from the starting specified and end at value specified -1
console.log(institutions.slice(2)) // This will cut  values from the starting from 2 till the end of the array
 let duplicate = institutions.slice() // This will copy all array in institution to the new variable duplicate
console.log(duplicate)
console.log(animals.reverse()) // reverse the elements in aminal
console.log(animals.sort()) // Sort the array in alphabetical order



