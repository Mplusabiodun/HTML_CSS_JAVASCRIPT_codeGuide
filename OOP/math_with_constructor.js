/* MATH WITH CONSTRUCTOR
 */
class mathHelper {
  constructor(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error("Arguments must be number");
    }
    this.num1 = num1; // the "this" keyword is used to make reference to the instance and to specify the parameter/argument
    this.num2 = num2;
  }

  // defining methods inside a class
  add() {
    // add method
    return this.num1 + this.num2;
  }
  sub() {
    // subtration method
    return this.num1 - this.num2;
  }
  div() {
    // division method
    return this.num1 / this.num2;
  }
  mult() {
    // multiplying method
    return this.num1 * this.num2;
  }
  mod() {
    // reminder/modulus method
    return this.num1 % this.num2;
  }
  expo() {
    // exponential method
    return this.num1 ** this.num2;
  }
}

const helperMath = new mathHelper(20, 5);

console.log(helperMath.add());
console.log(helperMath.sub());
console.log(helperMath.div());
console.log(helperMath.mult());
console.log(helperMath.mod());
console.log(helperMath.expo());
