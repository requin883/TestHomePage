const mediaChange = window.matchMedia("(min-width:600px)");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const btns = Array.from(items, () => {
    return `<span class="carousel-btn"></span>`;
})

carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
    ${btns.join("")}
    </div>
`);
const addedBtns = document.querySelectorAll(".carousel-btn");

const removeItems = (arr, classToRemove) => {
    arr ? arr.forEach(item => item.classList.remove(classToRemove)) : "";
}
const bigScreenChange = () => {
    removeItems(items, "item-selected");
    addedBtns.forEach(btn => btn.classList.add("hide-btn"));
    console.log("Nobotones");
}

if (window.innerWidth >= 600) {
    bigScreenChange();
}

mediaChange.addEventListener("change", (e) => {
    if (e.matches) {
        bigScreenChange();
    } else {
        removeItems(addedBtns, "hide-btn");
        addedBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                removeItems(items, "item-selected");
                removeItems(addedBtns, "btn-selected");
                items[index].classList.add("item-selected");
                addedBtns[index].classList.add("btn-selected");
            })
        })
        items[0].classList.add("item-selected");
        addedBtns[0].classList.add("btn-selected");
    }
})



