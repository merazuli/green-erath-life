
// store all container 
const categoryItems = document.getElementById("category-items");
const cardContainer = document.getElementById("card-container");

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
        // console.log(e.target.id)
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
    cards.forEach(card => {
        console.log(card)
        console.log(card.image)
        cardContainer.innerHTML += `
                    <div class="card bg-base-100 w-96  shadow-sm h-[400px]">
                        <figure>
                            <img class="" src="${card.image}"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">${card.name}</h2>
                            <p>${card.description}</p>
                            <div class="card-actions justify-between">
                                <div class="btn">${card.category}</div>
                                <div class="mx-10">
                                    <i class="fa-solid fa-bangladeshi-taka-sign"><span class="font-bold"></span
                                            class="">${card.price}</span></i>
                                </div>

                            </div>
                            <a class="btn px-6 text-[#f7f7f7] bg-[#15803D] rounded-3xl">Add To Cart</a>
                        </div>
                    </div>
`
    });

}

loadCategory()