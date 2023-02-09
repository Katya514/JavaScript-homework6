const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", event => {
   span.textContent = input.value === "" ? "Anonymous" : input.value;
});

