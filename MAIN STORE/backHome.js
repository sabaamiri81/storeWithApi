
function backHome() {
    firstHomeCards__btn.classList.remove("firstHomeCards__btnDisplay");
    secondHomeCards.classList.remove("secondHomeCardsDisplay");
    secondSlide.classList.remove("secondSlideDisplay");
    slide.classList.remove("slideDisplay");
    root.classList.add("rootDisplay");
}


homeIcon.addEventListener("click", backHome)