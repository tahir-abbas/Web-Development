let count = 0;
let countEl = document.getElementById("countEl");
let saveEl = document.getElementById("save-el");

let seats = document.querySelector(".seats");
function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " Seats Reserved";
  let li = document.createElement("li");
  li.append(countStr);
  seats.appendChild(li);
  count = 1;
  countEl.innerText = count;
}
