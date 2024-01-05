// CONDITIONALS

// IF STATEMENT
let size = 24;

if (size == 24) {
  console.log("My size is 24");
}

// IF ELSE STATEMENT
if (size == 20) {
  console.log("Your size is available");
} else {
  console.log("Your size is not available");
}

// ELSE-IF STATEMENT
let day = "wednesday";

if (day == "monday") {
  console.log("Today is Monday");
} else if (day == "tuesday") {
  console.log("Today is tuesday");
} else if (day == "wednesday") {
  console.log("Today is WEDNESDAY");
} else if (day == "thursday") {
  console.log("Today is thursday");
} else {
  console.log("Today is neither days of the week");
}

//TENARY OPERATOR
let age = 24;

let canSwim =
  age > 18 ? "Yes this person can swim" : "No this person can't swim";
console.log(canSwim);

// SWITCH STATEMENT
let fav = "spagetti";

switch (fav) {
  case "eba":
    console.log("His fav is eba");
    break;
  case "beans":
    console.log("His fav is beans");
    break;
  case "semo":
    console.log("His fav is semo");
    break;
  case "yam":
    console.log("His fav is yam");
    break;
  case "fufu":
    console.log("His fav is fufu");
    break;
  case "rice":
    console.log("His fav is rice");
    break;
  default:
    console.log("His fav is rare");
    break;
}
