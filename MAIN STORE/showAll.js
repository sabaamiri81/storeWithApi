function clickForAll() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((allProduct) => {
            return showAllProducts(allProduct)
        })
        .catch()
}


function showAllProducts(products) {
    let tem3 = products.map((product) => {
        const { image, title, description, price, id, category } = product;
        return `
        <a href="#" onclick="showProduct(\`${id}\`)">
         <div class="secondHomeCards__card">
            <div class="secondHomeCards__card--img"><img class="secondHomeCards__card--img--inner" src="${image}" alt=""></div>
            <h1 class="secondHomeCards__card--title">${title}</h1>
            <h2 class="secondHomeCards__card--price">${price}$</h2>
        </div>
    </a>`
    })
    root.innerHTML = tem3.join("");


    firstHomeCards__btn.classList.add("firstHomeCards__btnDisplay");
    secondHomeCards.classList.add("secondHomeCardsDisplay");
    secondSlide.classList.add("secondSlideDisplay");
    slide.classList.add("slideDisplay");
}


firstHomeCards__btn.addEventListener("click", clickForAll)