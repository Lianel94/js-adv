"use strict";

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => { 
                 this.goods = data;
                 this.render()
            });
    }

    _getProducts(){
      
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    totalPrice(){
        let totalSum = this.goods.reduce((sum, item) => sum += item.price, 0);
        console.log(`Общая сумма товаров: ${totalSum}`);
    }

}

class ProductItem{
    constructor(product, img = 'https://picsum.photos/200/200?random'){
        this.img = img;
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
    }
    render(){
        return `<div class="product-item">
        <img src = "${this.img}">
        <h2>${this.title}</h2>
        <p>${this.price}</p>
        <button class="buy-btn">Buy</button>
    </div>`
    }
}


let list = new ProductList();
list.totalPrice();


class Basket{
    constructor(container = '.basket-block'){
        this.container = container;
        this.goods = [];

        this._getBasketItem()
        .then(data => {
            this.goods = data.contents;
            this.render();
        });

        this._clickBtnBasket();
    }

    _getBasketItem(){
        return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods){
            const item = new BasketItem();
            block.insertAdjacentHTML("beforeend", item.render(product));
        }
    }

    _clickBtnBasket(){
        document.querySelector('.basket-btn').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('invisible');
        });
    }

}

class BasketItem{
    render(product, img = 'https://picsum.photos/50/50?random'){
        return `<div class="basket-item" data-id="${product.id_product}">
                    <div class="product-info">
                        <img src="${img}" alt="some img">
                        <div class="product-description">
                            <p class="product-title">${product.product_name}</p>
                            <p class="product-quantity">Quantity: ${product.quantity}</p>
                            <p class="one-product-price">${product.price} each</p>
                        </div>
                    </div>
                    <div class="right-side">
                        <p class="product-price>${product.price * product.quantity}$</p>
                        <button class="del-btn" data-id="${product.id_product}">X</button>
                    </div>
                </div>`
    }
}

let object = new Basket();