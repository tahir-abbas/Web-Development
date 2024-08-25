let button = document.querySelector(".btn");
let head = document.querySelector(".head");

button.addEventListener("click", function () {
  head.style.display = "none";
});

a = 2;
function auto() {
  console.log(a);
  a = 5;
  if (a > 5) {
    console.log(a);
  }
  console.log(a);
  a = 2;
}

auto();
console.log(a);
