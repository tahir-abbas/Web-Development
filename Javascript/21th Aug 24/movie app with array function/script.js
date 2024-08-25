let movies = document.querySelector(".movies");
let movieBank = [];
let upbtn = document.querySelector(".upbtn");
let dltbtn = document.querySelector(".dltbtn");

function update() {
  let content = "";
  movieBank.forEach((v) => {
    content = content + v;
  });
  movies.innerHTML = content;
}

upbtn.addEventListener("click", () => {
  let name = document.querySelector(".uptxt").value;
  let data = `<div>
        <img src="https://picsum.photos/200/300
        " alt="movie" />
        <h3>${name}</h3>
      </div>`;
  let innerMain = movies.innerHTML;
  movies.innerHTML = data + innerMain;
  movieBank.push(data);
  update(data);
  console.log(movieBank);
});

dltbtn.addEventListener("click", () => {
  let dtext = document.querySelector(".dltxt").value;
  movieBank.forEach((value) => {
    if (value.includes(dtext)) {
      i = movieBank.indexOf(dtext);
      update();
      movieBank.splice(i, 1);
      console.log(movieBank);
    }
  });
});
