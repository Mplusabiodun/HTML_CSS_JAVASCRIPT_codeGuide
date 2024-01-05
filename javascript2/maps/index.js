/* MAP data structure is useful when you've different 
types of keys and values to save. As for Obeject it 
can't take object as a key but Map will take any form 
of data types as key and value
 */

let userMap = new Map();
userMap.set(1, "number one");
userMap.set(true, "boolean type");
userMap.set(
  {
    // here is an object as a key
    firstName: "Fatai",
    secondName: "Abiodun",
    thirdName: "Adekunle",
  },
  "This is a value for a key thats object" // here is its value
);
userMap.set("school", "SIPET");
console.log(userMap);

// Display the KEYS in a map
console.log(userMap.keys());

// Display the VALUES in a map
console.log(userMap.values());

// Entries - Display the KEYS & VALUES in a map
console.log(userMap.entries());

// Display the number of items stored in a map
console.log(userMap.size);

// This check if a map has a particular key
console.log(userMap.has(2));
console.log(userMap.has(true));
console.log(userMap.has("school"));

// This remove a KEY with its VALUE from a map
userMap.delete(true);
console.log(userMap);

// Iterating over a map using the 'for of' loop
// JSON.stringify() - Converts a JavaScript key/value(object) to a JavaScript Notation (JSON) string, makes us view object.
for (const eachUser of userMap) {
  console.log(
    `This this the key "${eachUser[0]}" and this is the value "${eachUser[1]}"`
  );
  console.log(
    `This this the key "${JSON.stringify(
      eachUser[0]
    )}" and this is the value "${eachUser[1]}"`
  );
}

// Converting a MAP to an ARRAY
let mapArray = Array.from(userMap);
console.log(mapArray);

// Converting a MAP to an Object
let mapObject = Object.fromEntries(userMap);
console.log(mapObject);

