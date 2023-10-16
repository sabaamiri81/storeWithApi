

function getAllCarts() {
    fetch('https://fakestoreapi.com/carts')
        .then(res => res.json())
        .then((carts) => {
            return getCartById(carts)
        })
        .catch()
}


function getCartById(carts) {
    return carts.map((cart) => {
        fetch(`https://fakestoreapi.com/products/${cart.id}`)
            .then(res => res.json())
            .then((cartInfo) => {
                return shopBasket.push(cartInfo)
            })
            .then(() => basketCounter.innerHTML = shopBasket.length
            )

            .catch()
    })
}




function showCartInBasket() {
    let tem3 = shopBasket.map((cart) => {
        const { image, title, description, price, id, category } = cart;
        return `
        <div class="basket">
        <div class="basket__img"><img class="basket__img--inner" src="${image}" alt=""></div>
        <div class="basket__info">
           <h1 class="basket__info--title">${title}</h1>
           <h2 class="basket__info--price">${price}$</h2>
       </div>
       <button class="basket__btn" onclick="showProduct(\`${id}\`)">show details</button>
       <button class="basket__btn" onclick="removeProduct(\`${id}\`)">remove</button>
   </div>`
    })
    root.innerHTML = tem3.join("");

    root.classList.remove("rootDisplay");
    firstHomeCards__btn.classList.add("firstHomeCards__btnDisplay");
    secondHomeCards.classList.add("secondHomeCardsDisplay");
    secondSlide.classList.add("secondSlideDisplay");
    slide.classList.add("slideDisplay");
}

window.addEventListener("load", getAllCarts)
shoppingIcon.addEventListener("click", showCartInBasket)


// when click addButtom

function addToShoppingBasket(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then((addedCart) => {
            return shopBasket.push(addedCart)
        })
        .then(() => basketCounter.innerHTML = shopBasket.length
        )
        .catch()
}

console.log(shopBasket);
