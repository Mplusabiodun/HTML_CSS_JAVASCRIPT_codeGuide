/* 
CAPTURING MOUSE EVENTS
*/
     let button = document.querySelector("#btn");

    /* button.addEventListener("mouseenter", () => {
     //mouseenter, mouseleave, mouseover
     alert("You've entered the button!");
     }); */

// contextmenu event - deals with right click
button.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // this prevents the default by browser when an element is been right clicked
  console.log('You just right clicked on the button')
});


// KEYBOARD EVENTS
document.body.addEventListener('keydown', (e) =>{
    console.log('You pressed the key ' + e.key +' on the keyboard' ) // this will log to the console any key pressed 
})

document.body.addEventListener("copy", (event) => {
    event.preventDefault(); // this prevents the default by browser when an element is been right clicked
   alert('You can not copy from this page')
  });
  