let counterValue = 0;

const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
const span = document.querySelector("#value");
decrement.addEventListener("click", event => {
    counterValue -= 1;
    span.textContent = counterValue;
});
increment.addEventListener("click", event => {
    counterValue += 1;
    span.textContent = counterValue;
});

