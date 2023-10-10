

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
          
            .catch()
    })
}




function showCartInBasket(shopBasket){
     let tem3 = shopBasket.map((cart) => {
        const { image, title, description, price, id, category } = cart;
        return  `
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

shoppingIcon.addEventListener("click", getAllCarts)
shoppingIcon.addEventListener("click" , showCartInBasket)


// when click addButtom

function addToShoppingBasket(id){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then((addedCart) => {
        return shopBasket.push(addedCart)
    })
    .catch()
}

console.log(shopBasket);