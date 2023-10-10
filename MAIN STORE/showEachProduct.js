

function showProduct(Id){
    fetch(`https://fakestoreapi.com/products/${Id}`)
    .then(res => res.json())
    .then((selectedCart) => {
        return showEachCart(selectedCart)
    })
    .catch()

}

function showEachCart(selectedCart) {
    let tem = ` 
    <div class="selected">
    <img class="selected__img" src="${selectedCart.image}" alt="product image">
    <div class="selected__data">
        <h1 class="selected__data--title">${selectedCart.title}</h1>
        <p class="selected__data--description"> ${selectedCart.description}</p>
        <h2 class="selected__data--price">price : ${selectedCart.price} $</h2>
        <button class="selected__data--btn" onclick="addToShoppingBasket(${selectedCart.id})">buy now</button>
    </div>
</div>`
    
    root.innerHTML = tem;

    firstHomeCards__btn.classList.add("firstHomeCards__btnDisplay");
    secondHomeCards.classList.add("secondHomeCardsDisplay");
    secondSlide.classList.add("secondSlideDisplay");
    slide.classList.add("slideDisplay");
}