// List all child nodes in the body tag including text(spaces between the tags)
console.log(document.body.childNodes);

// List all children in the body tag without text(spaces between the tags)
console.log(document.body.children);

console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);
console.log(document.body.hasChildNodes());

for (i = 0; i < document.body.children.length; i++) {
  console.log(document.body.children[i]);
}

console.log(document.body.previousSibling); // Get previous sibling of the body tag but will return text
console.log(document.body.previousElementSibling); // Get previous sibling of the body tag
console.log(document.head.nextElementSibling); // Get the next sibling of the head tag
console.log(document.body.parentNode); // Get parent node of the body tag
console.log(document.body.parentElement); // Get parent element of the body tag
