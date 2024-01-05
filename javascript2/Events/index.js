let h1 = document.querySelector("h1");
console.log(h1);
h1.ondblclick = doubleClick // there's no need of assigning the function bracket(()) otherwise the function get exccuted with fulfilling the event

function doubleClick() {
    h1.innerText = 'I changed to this because i was dbclick'
}

/* When you assign two events to an element, the second event overides
    the first one and the second one get excuted.
   You can only add two events to an element using 'addEventListener'
 */

let pG = document.querySelector('p')
pG.onclick = function change() {
    pG.innerText = 'First event'
}

pG.onclick = function change2() {
    pG.innerText = 'Second event'   // This overides the first one created
}

// But by using addEventListener
let div = document.querySelector('div')

div.addEventListener('dblclick', change3) // First event
function change3() { alert('I\'m testing the addEventListener first here')
}

div.addEventListener('dblclick', function change4() { // second event
    div.innerText = 'Second testing of addEventListener'
})













