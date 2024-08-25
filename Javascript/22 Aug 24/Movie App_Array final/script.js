// Define array and movie container variable
let movieBank = [];
let container = document.querySelector(".container");

// code for stor movie in array and update site
let upbtn = document.querySelector(".upbtn").addEventListener("click", () => {
  let name = document.querySelector(".uptxt").value;
  if (!name) return;
  predata = container.innerHTML;
  let data = `<div>
           <img src="https://picsum.photos/200/200
           " alt="">
               <h3>${name}</h3>
           </img>
         </div>`;
  movieBank.push(data);
  let c = "";
  for (let i = 0; i < movieBank.length; i++) {
    c += movieBank[i];
  }
  container.innerHTML = c;
  console.log(movieBank);
  //alert("Movie " + `${name}` + " has been successfully uploaded");
});

// code for delete movie from array and update on site
let delbtn = document.querySelector(".delbtn").addEventListener("click", () => {
  let name = document.querySelector(".deltxt").value;
  if (!name) return;
  //console.log(name);
  movieBank.forEach((value) => {
    if (value.includes(name)) {
      i = movieBank.indexOf(value);
      if (i != -1) {
        console.log("From Remove: " + name);
        movieBank.splice(i, 1);
        console.log(movieBank);
        let c = "";
        for (let i = 0; i < movieBank.length; i++) {
          c += movieBank[i];
        }
        container.innerHTML = c;
      }
    }
  });
});
