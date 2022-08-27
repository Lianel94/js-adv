"use strict";
class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }

    _fetchProducts(){
        this.goods = [
            {id:1,title:'Laptop',price:20000,img: "https://picsum.photos/200/200?random1"},
            {id:2,title:'Mouse',price:1000,img: "https://picsum.photos/200/200?random2"},
            {id:3,title:'Keyboard',price:2500,img: "https://picsum.photos/200/200?random3"},
            {id:4,title:'Phone',price:15000,img: "https://picsum.photos/200/200?random4"},
        ];
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

/*     еще варианты для вычисления суммы:
    totalPrice(){
        let totalSum = 0;
        for (let item of this.goods){
            totalSum += item.price;
        }
        console.log(`Общая сумма товаров: ${totalSum}`);
    } 

    totalPrice(){
        let totalSum =  0;
        this.goods.forEach(item => totalSum += item.price);
        console.log(`Общая сумма товаров: ${totalSum}`);
    } */
}

class ProductItem{
    constructor(product){
        this.img = product.img;
        this.id = product.id;
        this.title = product.title;
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
    addGoods(){

    }

    removeGoods(){

    }

    render(){

    }
}

class BasketItem{
    render(){
        
    }
}
