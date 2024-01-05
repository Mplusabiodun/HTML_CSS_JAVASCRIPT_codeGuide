//DATA TYPES
//Strings
let firstName = "Fatai";
let lastName = "Monsuru Abiodun";
let fullName = `Mr ${firstName} ${lastName}`;

console.log(fullName);

let message =
  "The person you're trying to reach is unavailable. \n Pls hold on or call again later, \n thank you!";
console.log(message);

let completeMessage = `${fullName} ${message}`;
console.log(completeMessage);
console.log(completeMessage.toUpperCase());
console.log(completeMessage.startsWith("The"));
console.log(completeMessage.startsWith('Mr'));
console.log(completeMessage.indexOf('unavailable'));
console.log(completeMessage.length);

// smilies
console.log('\u{1F60D}')
console.log('')
console.log('\u{1F60D}')
