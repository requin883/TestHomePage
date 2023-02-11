const mediaChange = window.matchMedia("(min-width:600px)");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const btns = Array.from(items, () => {
    return `<span class="carousel-btn"></span>`;
});
let intervalValue;
const querySlides = document.querySelectorAll(".slide");
const slides = document.getElementsByClassName("slide");
const sliders = document.querySelectorAll(".slider");
const removeItems = (arr, classToRemove) => {
    arr ? arr.forEach(item => item.classList.remove(classToRemove)) : "";
}

const activateSliders = () => {
    sliders.forEach(slider => slider.insertAdjacentHTML("beforeend", `<span class="slide-underline"></span>`))
    slides[0].classList.add('selected-slide');
}

const getSlideUnderlines = () => {
    return document.querySelectorAll(".slide-underline");
}

const slidesAnimation = () => {
    intervalValue = setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                slides[i].classList.remove('selected-slide');
                slides[0].classList.add('selected-slide');
                break;
            }
            if (slides[i].classList.contains('selected-slide')) {
                slides[i].classList.remove('selected-slide');
                slides[i + 1].classList.add("selected-slide");
                break;
            }
        }
    }, 4000);

}
//Insert Carousel Nav and buttons

carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
    ${btns.join("")}
    </div>
`);
const addedBtns = document.querySelectorAll(".carousel-btn");



const smallScreenChange = () => {
    activateSliders();
    getSlideUnderlines();
    slidesAnimation();
    removeItems(addedBtns, "hide-btn");
    addedBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            removeItems(items, "item-selected");
            removeItems(addedBtns, "btn-selected");
            items[index].classList.add("item-selected");
            addedBtns[index].classList.add("btn-selected");
        })
    })
}

const bigScreenChange = () => {
    querySlides.forEach(slide => {
        slide.classList.remove("selected-slide");
    });
    getSlideUnderlines().forEach(underline => {
        underline.classList.remove("slide-underline");
    })
    clearTimeout(intervalValue);
    removeItems(items, "item-selected");
    addedBtns.forEach(btn => btn.classList.add("hide-btn"));

}

if (window.innerWidth >= 600) {
    bigScreenChange();
} else {
    smallScreenChange();
    items[0].classList.add("item-selected");
    addedBtns[0].classList.add("btn-selected");
}

mediaChange.addEventListener("change", (e) => {
    if (e.matches) {
        bigScreenChange();
    } else {
        smallScreenChange();
        items[0].classList.add("item-selected");
        addedBtns[0].classList.add("btn-selected");
    }
})



