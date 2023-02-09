function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", event => {
  const amount = inputRef.value;
   let markup = "";
  for (let index = 1; index <= amount; index++) {
    const box = `<div style="width:${20+index*10}px; height:${20+index*10}px; background-color:${getRandomHexColor()};"></div> `;
    markup += box;
  }
  divBoxes.insertAdjacentHTML("afterbegin", markup);
})

buttonDestroy.addEventListener("click", event => {
  divBoxes.innerHTML = "";
  inputRef.value = 0;
})
