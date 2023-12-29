const freeShip = document.querySelector("#freeship")
const searchIcon = document.querySelector("#search-icon")
const cartIcon = document.querySelector("#cart-icon")
const highlighter = document.getElementsByClassName(".company-name")

//---Free Shipping Hover Effect---
const freeShipEffect = (event) => {
    freeShip.style.color='rgb(92, 255, 74)';
}
const onMouseOut = (event) => {
    freeShip.style.color='rgb(175, 239, 253)';
}

freeShip.addEventListener("mouseover", freeShipEffect)
freeShip.addEventListener("mouseout", onMouseOut)


// ---Search Icon Hover Effect----
const searchIconHover = (event) => {
    searchIcon.style.color='rgb(255, 191, 0)';
}
const searchIconMouseOut = (event) => {
    searchIcon.style.color='white';
}


searchIcon.addEventListener('mouseover', searchIconHover)
searchIcon.addEventListener("mouseout", searchIconMouseOut)


// ---Cart Icon Hover Effect---
const cartIconHover = (event) => {
    cartIcon.style.color='rgb(255, 191, 0)';
}
const cartIconMouseOut = (event) => {
    cartIcon.style.color='white';
}


cartIcon.addEventListener('mouseover', cartIconHover)
cartIcon.addEventListener("mouseout", cartIconMouseOut)


// ---Yellow Highlights---
const highlightEffect = (event) => {
    highlighter.style.background="red";
}

highlighter.addEventListener('click', highlightEffect)

