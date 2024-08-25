let hamraArray = ["Asif", "Tahir", "Saood", "Tahir", "Irfan", "Tahir"];

// let a = hamraArray.includes("Saood");

let newArray = hamraArray.map(func);
let devArray = hamraArray.map(fun1);

function func(value) {
  return "Hello " + value;
}

function fun1(p) {
  return "Develpoer " + p;
}

console.log(hamraArray);
console.log(newArray);
console.log(devArray);

let DesignerArray = [];

hamraArray.forEach((element) => {
  DesignerArray.push("Designer " + element);
});

console.log(DesignerArray);
