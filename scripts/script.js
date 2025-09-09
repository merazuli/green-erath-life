
// store all container 
const categoryItems = document.getElementById("category-items");
const cardContainer = document.getElementById("card-container");
const cartContainer = document.getElementById("cart-container");
// console.log(cartContainer)
const cartCount = document.getElementById("cart-count");

let cartItem = [];
// load category by api 

const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(data => {
            categoryDisplay(data.categories)
        })
        .catch((err) => {
            console.log(err)
        })
}

// show category on display 
const categoryDisplay = (categories) => {
    // console.log(categories)
    categories.forEach(category => {
        // console.log(category.id)
        categoryItems.innerHTML += `
        <li id="${category.id}"class="text-xl ml-4 hover:bg-white p-2">${category.category_name}</li>
        `
    });
    categoryItems.addEventListener("click", (e) => {
        const allLi = document.querySelectorAll("li");
        const id = e.target.id;
        allLi.forEach(li => {
            e.target.classList.add('bg-yellow-600')
        });
        loadCardByCategory(e.target.id)
    })

}

// load card from api 
const loadCardByCategory = (categoryId) => {
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        .then(res => res.json())
        .then(data => {
            displayCard(data.plants)
        })
        .catch((err) => {
            console.log(err)
        })


}
// card display 
const displayCard = (cards) => {
    cardContainer.innerHTML = "";
    cards.forEach(card => {
        const priceId = card.id;
        const title = card.name;
        const price = card.price;

        cardContainer.innerHTML += `
                    <div class="card bg-white w-96 mx-auto  shadow-sm h-[400px]">
                        <figure>
                            <img class="" src="${card.image}"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 onclick="my_modal_1.showModal()" class="card-title">${title}</h2>
                            <p>${card.description}</p>
                            <div class="card-actions justify-between">
                                <div class="btn">${card.category}</div>
                                <div class="mx-10">
                                   <i class="fa-solid fa-bangladeshi-taka-sign"><span class="font-bold" id="${priceId}">${price}</span></i>
                                </div>

                            </div>
                            <button id="${card.id}"" class="btn add-cart-btn px-6 text-[#f7f7f7] bg-[#15803D] rounded-3xl">Add To Cart</button> 
                        </div>
                    </div>      
`
    })
}

cardContainer.addEventListener('click', (e) => {
    // console.log(e.target)
    // console.log(e.target.innerText)

    if (e.target.innerText === "Add To Cart") {
        const price = document.getElementById("total-price");
        const priceValueNumber = Number(price.innerText);
        const cartPrice = e.target.parentNode.children[2].children[1].children[0].innerText;
        const cardPriceNumber = Number(cartPrice)
        const subtotalPrice = priceValueNumber + cardPriceNumber;
        price.innerText = subtotalPrice;
        handleCartItem(e);


    }
})
// show cart item on cart container Selection 

const showCartItem = (cartItem) => {
    cartContainer.innerHTML = "";
    cartItem.forEach(item => {
        cartContainer.innerHTML += `
                       <div class="flex mb-3 justify-between items-center pr-3 space-y-5 bg-[#DCFCE7]">
                        <div class="">
                            <h1>${item.title}</h1>
                             <p><span class="font-bold">৳  ${item.price}</span> × 1</p>
                        </div>
                        <div>
                            <button onclick="handleDeleteItem('${item.id}')" class="fa-solid fa-xmark"></button>
                        </div>
                    </div>
        `
        // cartCount.innerText = cartItem.length


    });
}



const handleCartItem = (e) => {
    const cartTitle = e.target.parentNode.children[0].innerText;
    const cartPrice = e.target.parentNode.children[2].children[1].children[0].innerText;
    const id = e.target.id;

    cartItem.push({
        title: cartTitle,
        id: id,
        price: cartPrice
    })
    showCartItem(cartItem);
    // --------
    handleViewDetails(e)
}

// jevabe delete korbo cart item jaoa item ke jodi like na hoy 

const handleDeleteItem = (itemId) => {
    const filter = cartItem.filter(cartSingleItem => cartSingleItem.id !== itemId);
    cartItem = filter;
    const price = document.getElementById("total-price");
    const priceValueNumber = Number(price.innerText);
    if (cartContainer !== Object) {
        price.innerText = "00";
    }
    for (const pr of cartItem) {
        priceValueNumber.innerText = "";
        const minusPr = Number(pr.price);
        console.log(minusPr)
        const beforePrice = Number(priceValueNumber - minusPr);
        price.innerText = beforePrice;
    }
    // console.log(priceValueNumber, arrayPrice)
    showCartItem(cartItem)
}

const handleViewDetails = (e) => {
    const id = e.target.id;
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
}


loadCardByCategory("1")

loadCategory()