const bars = document.querySelector(".nav__bars");
const navMenu = document.querySelector(".nav__menu");

bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  navMenu.classList.toggle("active");
})


const text = document.querySelector(".scd-text-golden");
const words = ["desenvolver", "idealizar", "construir"];
let currentWordIndex = 0;

text.addEventListener("animationiteration", () => {
  currentWordIndex = (currentWordIndex + 1) % words.length;
  text.textContent = words[currentWordIndex];
}, 4000);

text.textContent = words[currentWordIndex];