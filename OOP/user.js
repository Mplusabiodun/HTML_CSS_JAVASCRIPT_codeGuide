class users {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName || "Anonymous";
    this.lastName = lastName || "Mplus";
    this.email = email || "";
    this.password = password || "defaultPassword";
    this.emailActivated = false;
  }

  // defining methods inside a class
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  IsEmailActivated() {
    return this.emailActivated;
  }
  setFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  setEmail(email) {
    this.email = email;
  }
  setPassword(password) {
    this.password = password;
  }
  activateEmail() {
    this.emailActivated = true;
  }
}

// creating some users
const user1 = new users("Fatai", "Monsuru", "fatai@gmail.com", "fatai");
const user2 = new users("Olaoniye", "Ganiyy", "olaoniye@gmail.com", "bankz");
const user3 = new users("Adeoye", "Mubaraq", "adeoye@gmail.com", "oye");

console.log(user1.getFullName());
console.log(user2.getFullName());
console.log(user3.getFullName());

console.log(user1.getEmail());
console.log(user2.getPassword());

user3.setPassword("newPassword"); // Seting and updating some properties
console.log(user3.getPassword());
