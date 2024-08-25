let txt = document.querySelector(".txt");
let add = document.querySelector(".add");
let search = document.querySelector(".search");
let del = document.querySelector(".del");
let helper = document.querySelector(".helper");
let sort = document.querySelector("#sort");
let MovieParent = document.querySelector(".movies");
let moviesCount = document.querySelector(".mainTitle");

let movies = [
  "Sholay",
  "Mughal-E-Azam",
  "Mother India",
  "Deewar",
  "Pyaasa",
  "Guide",
  "Anand",
  "Chalti Ka Naam Gaadi",
  "Kabhi Kabhie",
  "Amar Akbar Anthony",
  "Pakeezah",
  "Kati Patang",
  "Awara",
  "Chaudhvin Ka Chand",
  "Sahib Bibi Aur Ghulam",
  "Seeta Aur Geeta",
  "Aradhana",
  "Dilwale Dulhania Le Jayenge",
  "Bobby",
  "Junglee",
  "Waqt",
  "Gol Maal",
  "Satyam Shivam Sundaram",
  "Mera Naam Joker",
  "Kashmir Ki Kali",
  "Shree 420",
  "Silsila",
  "Kaagaz Ke Phool",
  "Ganga Jamuna",
  "Do Bigha Zamin",
];

let update = (param = movies) => {
  let content = "";
  param.forEach((m) => {
    if (!m) return;
    content += `<div class="movie">
        <img src="./img.jpg" alt="" />
        <h3 class="mName">${m}</h3>
      </div>`;
  });
  MovieParent.innerHTML = content;
  moviesCount.innerHTML = `All The Movies(${param.length})`;
};

update();

add.addEventListener("click", (e) => {
  if (!txt.value) return;
  sorted();
  movies.push(txt.value);
  update();
  helper.textContent = "Added!";
});

del.addEventListener("click", (e) => {
  i = movies.indexOf(txt.value);
  if (i === -1) return;
  movies.splice(i, 1);
  update();
  helper.textContent = "Removed!";
});

sort.addEventListener("change", (e) => {
  sorted();
});

let sorted = () => {
  if (sort.value === "asc") {
    movies.sort();
    update();
  } else if (sort.value === "dsc") {
    movies.reverse();
    update();
  }
};

search.addEventListener("input", (e) => {
  console.log("Search Text: " + search.value);
  results = movies.map((el) => {
    if (el.toLowerCase().includes(search.value)) {
      // console.log(el);
      if (el) return el;
    }
  });
  console.log(results);
  update(results);
});
