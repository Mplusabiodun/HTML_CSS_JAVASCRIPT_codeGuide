let userId = new Set();

userId.add({ firstName: "FATAI", secondName: "OLA", thirdName: "ADEKUNLE" });
userId.add(20);
userId.add("school");

console.log(userId);
userId.add(20); // won't get added again
console.log(userId);

console.log(userId.size); // check the size of the set
console.log(userId.has("school")); // check if set has a key passed in

//  userId.delete('school')   // check if set has a key passed in after deleting it
// console.log(userId.has('school'))

// using 'for of'
for (const eachId of userId) {
  console.log(`This user ID is ${JSON.stringify(eachId)}`); // So as to display the object
}

// Converting set to an Array
let setArray = Array.from(userId);
console.log(setArray);
