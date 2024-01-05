// WHILE LOOP
let age = 24;
while (age < 30) {
  console.log(age);
  age++;
}

// DO WHILE LOOP

let num = 10;
do {
  console.log(`the number is ${num}`);
  num++;
} while (num < 15);

//FOR LOOP
for (let myAge = 15; myAge <= 20; myAge++) {
  console.log("my age is now " + myAge);
}

// FOR....OF LOOP, works on ARRAYS, STRINGS, MAPS ETC because they're ITERABLE PROPERTIES
let school = ["SIPET", "SEET", "AGRIC", "SPS", "SLS"];
for (let program of school) {
  console.log(`this program is for ${program}`);
}

let myName = "FATAI ABIODUN";
for (const lettersOfMyName of myName) {
  console.log(`This is letter ` + lettersOfMyName);
}

// FOR....IN LOOP, works on OBJECTS only because they're ENUMERABLE PROPERTIES
let user = {
  hisName: "Adekunle",
  state: "Oyo",
  nationalty: "Nigeria",
};
for (const userKey in user) {
  console.log(`The user key is ${userKey} while the value is ${user[userKey]}`);
}
