const itemsRef = document.querySelectorAll(".item");
const itemsQuantity = itemsRef.length;
console.log(`Number of categories: ${itemsQuantity}`);

itemsRef.forEach(item => {
    const title = item.querySelector("h2");
    console.log(`Category: ${title.textContent}`);

    const itemsRef = item.querySelectorAll("li")
    console.log(` Elements: ${itemsRef.length}`);
})