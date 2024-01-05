const userDatabase = {
  'mplus123': {
    firstName: 'Mplus',
    lastName: 'Abiodun',
    email: 'mplus@gmail.com',
    'account activated': true,
    password: 'mpluspass123'
  },
  'baybanks456': {
    firstName: 'Bay',
    lastName: 'Olaoniye',
    email: 'bay@gmail.com',
    'account activated': false,
    password: 'baybankspass456'
  },
  'oye123': {
    firstName: 'Oye',
    lastName: 'Adeoye',
    email: 'oye@gmail.com',
    'account activated': true,
    password: 'oyepass123'
  },
  'adelord1': {
    firstName: 'Adelord',
    lastName: 'Adelodun',
    email: 'adelord@gmail.com',
    'account activated': true,
    password: 'adelordpass1'
  },
};



function displayUserDetails() {
  // Enter your username
  let username = prompt("Enter your username");

  while (validateUsername(username) == false) {
    username = prompt("Username is incorrect, Enter a valid username");
  }
  if (username == null) {
    return;
  }

  // Enter your Password
  let password = prompt("Enter your password");

  while (validatePassword(password) == false) {
    password = prompt("Password is incorrect, Enter password again!");
  }
  if (password == null) {
    return;
  }

  // Confirm Password
  let confirmPassword = prompt("Confirm your password");

  while (confirmPassword !== password) {
    confirmPassword = prompt("Password doesn't match, confirm password again!");
  }
  if (confirmPassword == null) {
    // this particular IF STATEMENT isn't working
    return;
  }

  // Checking database if the username entered is correct
  const user = userDatabase[username]
  console.log(`user details `, user, username, password, confirmPassword)

  if (user == undefined){
    alert('Account not found, Pls register!')
  }
 
  alert(`This is the user details
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Email: ${user.email}
        Account activated: ${user['account activated']}

  `)
}
displayUserDetails();
alert("Everything is valid, you're here");
// alert("You've come to the end of this program, Goodbye?");

function validateUsername(username) {
  if (username == null) {
    return true;
  }
  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}
function validatePassword(password) {
  if (password == null) {
    return true;
  }
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}

