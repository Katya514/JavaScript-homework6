function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
const buttonRef = document.querySelector(`[type="button"]`);

buttonRef.addEventListener('click', event => {
  const color = getRandomHexColor()
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
})

