// let movie = [
//   "dil to pagal hay",
//   "Andheri rat may dia tere hat may ",
//   "latakta khanjar",
//   "To jhuk may loagon",
// ];

// let main = document.querySelector(".main");

// let mainHtml = main.innerHTML;

// for (let i = 0; i < movie.length; i++) {
//   let content = `<div class="movie">
//         <div class="caption">
//           <img src="https://picsum.photos/200/30${i}" alt="" />
//         </div>
//         <h3>${movie[i]}</h3>
//       </div>`;

//   mainHtml = main.innerHTML;

//   main.innerHTML = mainHtml + content;
// }

let movie = [
  "Gang of wasipur",
  "Anchal",
  "Nikah",
  "Arjun padit",
  "Border",
  "Muna bhai MBBS",
  "Man Of Steel",
];

let container = document.querySelector(".main");

//console.log(inHtml + data);

for (let i = 0; i < movie.length; i++) {
  let data = `<div class="movie">
    <div class="caption">
      <img src="https://picsum.photos/200/30${i}" alt="" />
    </div>
    <h3>${movie[i]}</h3>
  </div>`;

  let inHtml = container.innerHTML;
  container.innerHTML = data + inHtml;
}
