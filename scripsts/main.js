import images from "./images.js";
const poze = document.querySelector(".poze");
const scor = document.querySelector(".scor");

let pozeAfisate = 3;

scor.innerHTML = `scorul tau este: 0 / ${images.length}`

const pozeleMele = images.slice(images.length - pozeAfisate);

poze.innerHTML = pozeleMele
  .map(
    (img, index) =>
      ` <img src="${img.src}" data-type="${img.type}" class="${
        index == 0 ? "prima" : index == 1 ? "aDoua" : "aTreia"
      }">`
  )
  .join();
