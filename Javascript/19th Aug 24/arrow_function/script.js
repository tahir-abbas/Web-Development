let head = document.querySelector(".head");
let btn = document.querySelector(".btn");

test = () => {
  head.innerHTML = "Tahir Khan";
};

btn.addEventListener("click", test);

ret = (name) => {
  return "Hello " + name;
};

// ab = ret("Tahir");
// if (ab == "Hello Tahir") {
//   console.log("Welcome " + ab);
// }

ab = ret("Asif");
if (ab.includes("Asif")) {
  console.log("Welcome Chiknay");
} else {
  console.log("Welcome Tahir");
}
