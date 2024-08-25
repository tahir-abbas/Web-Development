let b = document.querySelector(".submit");
let pop = document.querySelector(".popup");
let ok = document.querySelector(".btn");
b.addEventListener("click", (e) => {
  pop.style.display = "flex";
});

ok.addEventListener("click", (e) => {
  pop.style.display = "none";
});
