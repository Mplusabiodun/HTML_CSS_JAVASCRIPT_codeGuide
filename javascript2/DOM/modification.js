/*
    Creating new element through javascript and inserting it
*/

let newH3 = document.createElement('h3');
newH3.innerText = "I'm new h3 element created by Javascript" // we've successfully created a new element

// time to add it to the Dom, grab the element you want to append or prepend the new element with, then append or prepend
let h2_element = document.querySelector('#h1_text') 


/*
    Specifying where to insert the element thats being created
*/
h2_element.append(newH3) // append means immediately after
h2_element.prepend(newH3) // prepend means immediately before

document.body.insertBefore(newH3, h2_element )

const secondTable = document.querySelectorAll('table')[1]
secondTable.insertAdjacentHTML('afterend', '<h4>This is a new h4 element</h4>') //adjacent selector, we can specify with afterend, beforebegin, beforeend and afterbegin


/*
    REMOVING ELEMENT FROM DOM
*/
let removeH1 = document.querySelector('h1')
// console.log(removeH1)
removeH1.remove()


/*
    CLONING AN ELEMENT - MOVE AN ELEMENT AN ELEMENT
*/
let simpleT = document.querySelector('#h1_text')
console.log(simpleT)
simpleT.cloneNode(true)
document.body.prepend(simpleT)

/*
*/