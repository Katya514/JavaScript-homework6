const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", event => {
    event.preventDefault();
    if (!formRef.elements.email.value || !formRef.elements.password.value) {
        alert("Enter all fields")
    } else { console.log({ email: formRef.elements.email.value }, { password: formRef.elements.password.value }); formRef.reset() };
})