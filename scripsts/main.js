import images from "./images.js";
const poze = document.querySelector(".poze");

let pozeAfisate = 3

const pozeleMele = images.slice(images.length - pozeAfisate)

poze.innerHTML = pozeleMele.map(
  (img) => ` <img src="${img.src}">`
).join();
