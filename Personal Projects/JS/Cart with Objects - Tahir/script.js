let cartToggle = document.querySelector(".cartIcon");
let cart = document.querySelector(".cart");
let counter = document.querySelector(".counter");
let dimmer = document.querySelector(".dimmer");

// function addProduct(name, price, detail, qty) {
//   return {
//     name,
//     price,
//     qty,
//     get totalPrice() {
//       return this.price * this.qty;
//     },
//   };
// }

//#region  Cart Toggle Management
let toggle = false;
cartToggle.addEventListener("click", handleToggle);
function handleToggle() {
  if (!toggle) {
    cart.style.right = "0px";
    dimmer.style.display = "block";
  } else {
    cart.style.right = "-400px";
    dimmer.style.display = "none";
  }
  toggle = !toggle;
}
dimmer.addEventListener("click", (e) => {
  cart.style.right = "-400px";
  dimmer.style.display = "none";
  toggle = !toggle;
});
//#endregion

let cartItems = [];

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "add") {
    addToCart(e);
  } else if (e.target.classList[0] == "rem") {
    removeFromCart(e);
  }
});

function addToCart(el) {
  let item = el.target.parentNode.parentNode.parentNode.classList[1];
  let price = document.querySelector("." + item + " .price").innerHTML;
  let img = document.querySelector("." + item + " img").getAttribute("src");
  let name = document.querySelector("." + item + " .name").innerHTML;
  let qty = document.querySelector("." + item + " .qty").value;
  let id = Math.random().toString(36).substring(2, 7);
  cartItems.push({
    id,
    img,
    name,
    price,
    qty,
  });
  updateCart();
  localStorage["items"] = JSON.stringify(cartItems);
  document.querySelector("." + item + " .qty").value = 1;
}

function removeFromCart(el) {
  let id = el.target.dataset.id;
  cartItems.forEach((e, i) => {
    if (e.id == id) {
      cartItems.splice(i, 1);
    }
  });
  updateCart();
  localStorage["items"] = JSON.stringify(cartItems);
}

function updateCart() {
  counter.innerHTML = cartItems.length;
  let content = "";
  let grandtotal = 0;
  cartItems.forEach((i) => {
    let total = parseInt(i.price.replace("$", "")) * parseInt(i.qty);
    grandtotal += total;
    content += `<div class="cartItem"">
        <img src="${i.img}" alt="" srcset="" />
        <div class="itemDetails">
          <h2>${i.name}</h2>
          <h3>Total:$ ${total}</h3>
          <p>Qty: ${i.qty}</p>
        </div>
         <button class="rem"  data-id="${i.id}">Remove</button>
      </div>`;
  });
  head = `
      <br /><hr />
      <div class="total">
        <h3 class="grandTotal">Grand Total ($ ${grandtotal})</h3>
      </div>
      <hr />`;
  cart.innerHTML = head + content;
  counterVisibilty();
}

window.addEventListener("load", function () {
  let items = JSON.parse(localStorage["items"]);
  if (items) {
    cartItems = items;
    updateCart();
  }
});

function counterVisibilty() {
  counter.classList.remove("animate");

  if (cartItems.length > 0) {
    counter.style.display = "block";
  } else {
    counter.style.display = "none";
  }
  void counter.offsetWidth;
  counter.classList.add("animate");
}
