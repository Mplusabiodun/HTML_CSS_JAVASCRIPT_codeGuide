/* MATH WITH NO CONSTRUCTOR
*/



class mathHelper {
  // defining methods inside a class
  add(n1, n2) {
    // add method
    return n1 + n2;
  }
  sub(n1, n2) {
    // subtration method
    return n1 - n2;
  }
  div(n1, n2) {
    // division method
    return n1 / n2;
  }
  mult(n1, n2) {
    // multiplying method
    return n1 * n2;
  }
  mod(n1, n2) {
    // reminder/modulus method
    return n1 % n2;
  }
  expo(n1, n2) {
    // exponential method
    return n1 ** n2;
  }
}

// creating an instance from the class created
let helper = new mathHelper();

const addNum = helper.add(20, 45);
const subNum = helper.sub(20, 16);
const divNum = helper.div(20, 4);
const multNum = helper.mult(5, 4);
const modNum = helper.mod(20, 6);
const expNum = helper.expo(20, 2);

console.log(addNum)
console.log(subNum)
console.log(divNum)
console.log(multNum)
console.log(modNum)
console.log(expNum)