// Write your code here...
let currentDish
fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(menuArr =>{
    
    renderMenuList(menuArr)
    loadMenuDetails(menuArr[0])
    hookUpAddToCart()

})

function renderMenuList(menuArr){
    let menuList = document.querySelector("#menu-items")
    
    menuArr.forEach( item => {
        let menuItem = document.createElement("span")
        menuItem.textContent = item.name
        menuList.appendChild(menuItem)
        menuItem.addEventListener("click", () =>{
            loadMenuDetails(item)
        })

        });

}

function loadMenuDetails(dish){
    let currentDish = dish
    let dishImg = document.querySelector("#dish-image")
    dishImg.src = dish.image 
    let dishName = document.querySelector("#dish-name")
    dishName.textContent = dish.name 
    let dishDescrip = document.querySelector("#dish-description")
    dishDescrip.textContent = dish.description
    let dishDamage = document.querySelector("#dish-price")
    dishDamage.textContent = dish.price
    let numberInCart = document.querySelector("#number-in-cart")
    numberInCart.textContent = dish.number_in_bag
    currentDish.addEventListener("click", ()=>{
        loadMenuDetails(dish)
    })
}

function hookUpAddToCart(){
    let form = document.querySelector("#cart-form")
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        currentDish.number_in_bag += parseInt(event.target["cart-amount"].value),
        loadMenuDetails(currentDish)
    })
    
    
}
