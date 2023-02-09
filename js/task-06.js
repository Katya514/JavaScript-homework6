const inputRef = document.querySelector("#validation-input");

const validLength = Number(inputRef.dataset.length);
inputRef.addEventListener("blur", event => {
    inputRef.classList.remove("valid", "invalid");
    validLength === inputRef.value.length ? inputRef.classList.add("valid") : inputRef.classList.add("invalid");
})
