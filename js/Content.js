"use strict";

const data = [
    {
        id: 'cheese',
        price: 10,
        calories: 20,
    },
    {
        id: 'salad',
        price: 20,
        calories: 5,
    },
    {
        id: 'potato',
        price: 15,
        calories: 10,
    },
    {
        id: 'mayonnaise',
        price: 20,
        calories: 5,
    },
    {
        id: 'spices',
        price: 15,
        calories: 0,
    },
];
const sizes = [
    {
        id: 'big',
        price: 100,
        calories: 40,
    },
    {
        id: 'small',
        price: 50,
        calories: 20,
    },
];

class Content {
    static init(element) {
        this.element = element;
        this.totalPriceElem = element.querySelector('#total_price');
        this.totalCaloriesElem = element.querySelector('#total_calories');
        this.totalPriceElem.innerHTML = `Total: $${sizes[0].price + data[1].price}`;
        this.totalCaloriesElem.innerHTML = `Calories: $${sizes[0].calories + data[1].calories}`;
        this.hamburger = new Hamburger();
        this.orderForm = new OrderForm("order_form");
        document.addEventListener("input", (e) => {
            let target = e.target;
            this.hamburger.setToppings(this.orderForm.getToppingsId());
            this.hamburger.setSize(this.orderForm.getSizeId());
            this.updateTotal();
        });
    };

    static updateTotal() {
        let total = this.hamburger.getTotalPrice(sizes, data);        
        this.totalPriceElem.innerHTML = `Total: $${total.price}`;
        this.totalCaloriesElem.innerHTML = `Calories: ${total.calories}`;
    };

};















