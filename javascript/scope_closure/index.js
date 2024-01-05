let size = 24; // Global Variable or scope

function mySize() {
  let mySecondSize = 30; //Local variable or scope
  console.log(`This is my second size ${mySecondSize}`);
  console.log(`his is my initial size ${size}`);
}
mySize();
console.log(`This is my global size ${size}`);

// We can also use a curly bracket {} to restrict a variable
{
  let restriction = 18;
  console.log(restriction);
}

// CLOSURE - Simply the process of accessing a global variable, 
// all FUNCTIONS are closure because the can access global variables
