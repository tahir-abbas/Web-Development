function percentage(obtainMarks, totalMarks = 500) {
  let result = (obtainMarks * 100) / totalMarks;
  return result;
}

let displayResult = percentage(400);
if (displayResult > 70) {
  displayResult = "A grade";
} else if (displayResult > 60) {
  displayResult = "Good";
} else if (displayResult > 50) {
  displayResult = "Nice";
} else {
  displayResult = "Fail";
}

console.log(displayResult);

//function with return////////////////////////////////////////////
function hello(person) {
  return "Hello " + person;
}
let display = hello("Tahir");
console.log(display);
//function without return///////////////////////////////////////

function hi(person) {
  console.log("Hi " + person);
}
hi("Asif");
/////////////////////////////////////////////////////////////

// function canUpload(filepath) {
//     if UserActivation.atasa
//     return true
// }

let name;

function test() {
  name = "Asif";
}
test();
console.log(name);

/// defualt prameter in function

function defPra(text = "No text here") {
  console.log(text);
}
defPra("This my text");
