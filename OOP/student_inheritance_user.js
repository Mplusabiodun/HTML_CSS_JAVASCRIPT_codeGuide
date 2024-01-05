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

class students extends users {
  constructor(
    firstName,
    lastName,
    email,
    password,
    studentId,
    studentClass,
    subjects
  ) {
    super(firstName, lastName, email, password); // Invoke the parent constructor with the same arguments

    this.studentId = studentId || "N/A";
    this.studentClass = studentClass || "N/A";
    this.subjects = subjects || [];
  }

  getStudentId (){
    return this.studentId
  }
  getStudentClass (){
    return this.studentClass
  }
  getSubjects (){
    return this.subjects
  }
  setStudentId (studentId){
     this.studentId = studentId
  }
  setStudentClass (studentClass){
     this.studentClass = studentClass
  }
  setSubjects (subjects){
     this.subjects = subjects
  }
}

// creating some users
const student1 = new students("Fatai", "Monsuru", "fatai@gmail.com", "fatai", 456, '200L', ['Theory of structure', 'Mathematics']);
const student2 = new students("Olaoniye", "Ganiyy", "olaoniye@gmail.com", "bankz", 924, '400L', ['Accounting', 'English']);
const student3 = new students("Adeoye", "Mubaraq", "adeoye@gmail.com", "oye", 512, '300L', ['Mass comm1', 'Government']);

console.log(student1.getFullName());
console.log(student2.getStudentId());
console.log(student3.getSubjects());

console.log(student1.getEmail());
console.log(student2.getStudentClass());

student3.setSubjects(['Economics', 'Civic Education']); // Seting and updating some properties
console.log(student3.getSubjects());
