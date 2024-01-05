// grabbing the name/text inputs element and calling a focus function on it
let first = document.querySelector("input");
first.focus();

// grabbing the inputs element and looping through it to display each input name on click
let allInput = document.querySelectorAll("input");
console.log(allInput);
allInput.forEach(() => {
  for (let input of allInput) {
    input.addEventListener("click", () => {
      alert(`You're on ` + input.name.toUpperCase() + ` field`);
    });
  }
});

// preventing default of submit and assigning another functio/task to it
let form = document.querySelector("#form1");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("You tried to submit this form!, thank you");
});
