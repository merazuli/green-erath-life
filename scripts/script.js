

// store all container 
const categoryItems = document.getElementById("category-items");
const cardContainer = document.getElementById("card-container");
const cartContainer = document.getElementById("cart-container");
const cartCount = document.getElementById("cart-count");
const modalContainer = document.getElementById("modal-container");
const treeDetailsModal = document.getElementById("trees-detail-modal");

let cartItem = [];


const allPlantsDisplay = (allPlants) => {
    allPlants.forEach(plant => {
        cardContainer.innerHTML += `
                    <div class="card bg-white w-96 mx-auto  shadow-sm h-[400px]">
                        <figure>
                            <img class="" src="${plant.image}"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 onclick="treeDetailsModal.showModal();handleViewDetails(${plant.id})" class="card-title">${plant.name}</h2>
                            <p>${plant.description}</p>
                            <div class="card-actions justify-between">
                                <div class="btn">${plant.category}</div>
                                <div class="mx-10">
                                   <i class="fa-solid fa-bangladeshi-taka-sign"><span class="font-bold" id="${plant.id}">${plant.price}</span></i>
                                </div>

                            </div>
                            <button id="${plant.id}"" class="btn add-cart-btn px-6 text-[#f7f7f7] bg-[#15803D] rounded-3xl">Add To Cart</button> 
                        </div>
                    </div>      `

    });

}

const loadAllPlants = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then(res => res.json())
        .then(data => {
            allPlantsDisplay(data.plants)
        })
}
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
    cardContainer.innerHTML = ' '
    categories.forEach(category => {
        // console.log(category.id)
        categoryItems.innerHTML += `
        <li id="${category.id}"class="text-xl ml-4 hover:bg-green-500 p-2 border-yellow-500 border lg:border-none">${category.category_name}</li>
        `
    });
    categoryItems.addEventListener("click", (e) => {
        cardContainer.innerHTML = ""
        showLoading()
        const allLi = document.querySelectorAll("li");
        allLi.forEach(li => li.classList.remove("active"));
        const id = e.target.id;
        allLi.forEach(li => {
            e.target.classList.add('active')
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
                            <h2 onclick="treeDetailsModal.showModal();handleViewDetails(${card.id})" class="card-title">${title}</h2>
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
    if (e.target.innerText === "Add To Cart") {
        alert('added item to cart')
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
                            <button onclick="handleDeleteItem('${item.id}')" class="fa-solid fa-xmark "></button>
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





// show modal display 
const modalDisplay = (plants) => {
    modalContainer.innerHTML = " ";
    // console.log(plants)
    modalContainer.innerHTML += `
              <h1 class="font-bold mb-5 text-xl">${plants.name}</h1>
                <img src="${plants.image}" class="mb-5 rounded-2xl h-[300px] w-11/12 mx-auto" alt="">
                <h1><span class="text-lg font-bold">Category: </span> ${plants.category}</h1>
                <p><span class="text-lg font-bold">Price: </span>৳ ${plants.price}</p>
                <p><span class="text-lg font-bold">Description: </span>${plants.description}</p>

    
    `


}

const handleViewDetails = (id) => {
    // console.log(id)
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => {
            modalDisplay(data.plants)
        })
        .catch((err) => {
            console.log(err)
        })
}

// jevabe delete korbo cart item jaoa item ke jodi like na hoy 
const handleDeleteItem = (itemId) => {
    cartItem = cartItem.filter(cartSingleItem => cartSingleItem.id !== itemId);

    const price = document.getElementById("total-price");

    if (cartItem.length === 0) {
        price.innerText = "0";
    } else {
        let total = 0;
        for (const pr of cartItem) {
            total += Number(pr.price);
        }
        price.innerText = total;
    }

    showCartItem(cartItem);
};
const showLoading = () => {
    cardContainer.innerHTML += `<span class="loading loading-dots loading-xl text center mx-auto "></span>
    `
}


loadCategory()
loadAllPlants()
