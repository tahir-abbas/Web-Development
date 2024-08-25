let movieBank = [];
let container = document.querySelector(".container");

let upbtn = document.querySelector(".upbtn").addEventListener("click", () => {
  let name = document.querySelector(".uptxt").value;
  movieBank.push(name);
  update();
});

let delbtn = document.querySelector(".delbtn").addEventListener("click", () => {
  let name = document.querySelector(".deltxt").value;
  remove(name);
});

let update = () => {
  let data = "";
  movieBank.forEach((name) => {
    data += `<div>
           <img src="https://picsum.photos/200/200
           " alt="">
               <h3>${name}</h3>
         </div>`;
  });
  container.innerHTML = data;
};

update();

let remove = (name) => {
  let i = movieBank.indexOf(name);
  if (i != -1) {
    movieBank.splice(i, 1);
    update();
  }
};
