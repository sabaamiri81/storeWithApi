

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((firstCards) => {
        return findFourCards(firstCards)
    })
    .catch()



function findFourCards(firstGroup) {
    let findFourCards = firstGroup.filter(item => item.id <= 4)
    showFirstHomeCards(findFourCards);
}

function showFirstHomeCards(products) {
    let tem1 = products.map((product) => {
        const { image, title, description, price, id, category } = product;
        return `
        <a href="#" onclick="showProduct(\`${id}\`)">
         <div class="firstHomeCards__card">
            <div class="firstHomeCards__card--img"><img class="firstHomeCards__card--img--inner" src="${image}" alt=""></div>
            <h1 class="firstHomeCards__card--title">${title}</h1>
            <h2 class="firstHomeCards__card--price">${price}$</h2>
        </div>
    </a>`
    })
    firstHomeCards.innerHTML = tem1.join("");
}