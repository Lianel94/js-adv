"use strict";

const products = [
    {id:1,title:'Laptop',price:20000,photo: "https://picsum.photos/200/200?random1"},
    {id:2,title:'Mouse',price:1000,photo: "https://picsum.photos/200/200?random2"},
    {id:3,title:'Keyboard',price:2500,photo: "https://picsum.photos/200/200?random3"},
    {id:4,title:'Phone',price:15000,photo: "https://picsum.photos/200/200?random4"},
];

const renderProduct = (item) => 
    `<div class="product-item">
        <img src = "${item.photo}">
        <h2>${item.title}</h2>
        <p>${item.price}</p>
        <button class="buy-btn">Buy</button>
    </div>`


const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join("");
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);