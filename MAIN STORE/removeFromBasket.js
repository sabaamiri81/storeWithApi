function removeProduct(removeId) {
    shopBasket.forEach((cart, index) => {
        if (cart.id == removeId){
            shopBasket.splice(index, 1)
            basketCounter.innerHTML = shopBasket.length
        } 
    });

    showCartInBasket()
}