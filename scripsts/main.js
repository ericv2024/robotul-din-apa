import images from "./images.js";
const poze = document.querySelector(".poze");
const scor = document.querySelector(".scor");
const pesteButton = document.querySelector(".peste");
const nonPesteButton = document.querySelector(".nonPeste");

let pozeAfisate = 3;

scor.innerHTML = `scorul tau este: 0 / ${images.length}`;

let pozeleMele = [...images];
const p1 = pozeleMele.pop();
const p2 = pozeleMele.pop();
const p3 = pozeleMele.pop();

poze.innerHTML = [p1, p2, p3]
  .map(
    (img, index) =>
      ` <img src="${img.src}" data-type="${img.type}" class="${
        index == 0 ? "prima" : index == 1 ? "aDoua" : "aTreia"
      }">`
  )
  .join("");

let semafor = true;
const time = 100;

pesteButton.addEventListener("click", () => {
  if (!semafor) return false;
  semafor = false;
  const aTreiaVeche = document.querySelector(".aTreia");
  const aDoua = document.querySelector(".aDoua");
  const prima = document.querySelector(".prima");

  aTreiaVeche.classList.add("inRobot");
  aDoua.classList.add("aTreia");
  aDoua.classList.remove("aDoua");

  if (prima) {
    prima.classList.add("aDoua");
    prima.classList.remove("prima");
  }

  setTimeout(() => {
    aTreiaVeche.remove();
    if (pozeleMele.length) {
      const myPoza = pozeleMele.pop();
      poze.innerHTML += `<img src="${myPoza.src}" data-type="${myPoza.type}" class="prima">`;
    }
    semafor = true;
  }, time);
});

nonPesteButton.addEventListener("click", () => {
  if (!semafor) return false;
  semafor = false;
  const aTreiaVeche = document.querySelector(".aTreia");
  const aDoua = document.querySelector(".aDoua");
  const prima = document.querySelector(".prima");

  aTreiaVeche.classList.add("gunoi");
  aDoua.classList.add("aTreia");
  aDoua.classList.remove("aDoua");

  if (prima) {
    prima.classList.add("aDoua");
    prima.classList.remove("prima");
  }

  setTimeout(() => {
    aTreiaVeche.remove();
    if (pozeleMele.length) {
      const myPoza = pozeleMele.pop();
      poze.innerHTML += `<img src="${myPoza.src}" data-type="${myPoza.type}" class="prima">`;
    }
    semafor = true;
  }, time);
});
