// understanding of document.getElementById

let el = document.getElementById("head");
el.style.color = "red";
el.style.fontSize = "30px";

// understanding of querySelector

let el1 = document.querySelector("#head2");
el1.style.color = "green";
el1.style.fontFamily = "Arial";

// Understanding QuerySelectorAll
let li = document.querySelectorAll(".item");

li.forEach((i) => {
  i.style.color = "red";
});

// let c = document.querySelector(".change");

// if (c.innerHTML.includes("ipsum")) {
//   c.innerHTML = c.innerHTML.replace("ipsum", "Tahir");
// }

let c = document.querySelector(".change");
c.innerHTML = "<span style='color:blue;'>Asif</span>" + c.innerHTML;
