// click and show bars
function showBars() {
    bars.classList.toggle("showBars")
}


// show each category name
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then((categories) => {
        return barsCategory(categories)
    })
    .catch()

function barsCategory(categories) {
    let barsCategoryTemp = categories.map((category) => {
        return `   
            <p class="barsItem" onclick="findCategory(\`${category}\`)">${category}</p> `
    })
    bars.innerHTML = barsCategoryTemp.join("")
}


// show items in each category
function findCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then((data) => {
            return showAllProducts(data)
        })
        .catch()
}


barsIcon.addEventListener("click", showBars)