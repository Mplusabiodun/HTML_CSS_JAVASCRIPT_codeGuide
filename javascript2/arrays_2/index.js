// LOOPING THROUGH AN ARRAY

let institutions = ["FUTMINNA", "FUTA", "OAU", "LAUTECH", "UNILORIN", "LASU"];

for (let institution of institutions) {
  // For of
  console.log(`${institution} is among institutions in Nigeria`);
}

for (const key in institutions) {
  // For in only gives index of values in an array
  console.log(`The index is ${key} and the value is ${institutions[key]}`);
}

// Iterating over an array using forEach - this are call backs functions because they take in another function

/* IMPORTANT NOTICE FOREACH ONLY GETS YOU THE VALUES
 BUT TO DO SOMETHING WITH THE VALUE. USE MAP OR FILTER
  IN MOST CASES I RECOMMEND MAP -(MPLUS)
  */

let lengthy = institutions.forEach((institution) => {
  console.log(institution);
});

let lengthMoreThan4 = institutions.map((institution) => {
  if (institution.length > 4) {
    return institution;
  }
});
console.log(lengthMoreThan4);

// Iterating over an array using map - this are call backs functions as well
let toSmallLetters = institutions.map((institution) => {
  const institutionToLowercase = institution.toLowerCase();
  return institutionToLowercase;
});
console.log(toSmallLetters);

let populations = [100, 200, 50, 60, 800, 90, 150, 230];

let greaterThan80 = populations.filter((population) => {
  if (population > 80) {
    return population;
  }
});
console.log(greaterThan80);

// ARRAYS OF ARRAYS
let matrix = [
  [1, 2, 3],
  [8, 6, 3],
  [10, 19, 0],
];
console.log(matrix[1]);
console.log(matrix[1][0]);
