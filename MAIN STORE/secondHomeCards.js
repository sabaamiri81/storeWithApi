
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((secondCards) => {
        return findFourCards(secondCards)
    })
    .catch()



function findFourCards(secondGroup) {
    let findFourCards = secondGroup.filter(item => 5 <= item.id && item.id <= 8)
    showSecondHomeCards(findFourCards);
}

function showSecondHomeCards(products) {
    let tem2 = products.map((product) => {
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
    secondHomeCards.innerHTML = tem2.join("");
}