/*  EVENT OBJECTS - 
    This is simply event addest to an element inorder 
    to get all activities attached or running background 
    within that element when an event is executed on it
*/

let h2 = document.querySelector('h2')
h2.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target.id)
    console.log(event.target.innerText)
})








