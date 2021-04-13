"use strict";

class Content {
    static Init(element) {
        this.element = element;        
        this.orderForm = new orderForm("order_login");
    }
}

class orderForm {
    constructor(name) {
        this.form = document.forms[name];        
        this.inputs = this.form.querySelectorAll('.validated');
        this.loginInput = this.form.login;
        this.submiBtn = this.form.submit_btn;       
        this.submiBtn.onclick = () => {
            this.submit();
        }
    }
    submit() {
        let body = new FormData(this.form);
        RequestMaker.makeRequest(this.form.method, this.form.action, true, body)
            .then((resultObj) => {
                Cookies.addCookies("auth", "true", 1);
                Cookies.addCookies("role", resultObj.role, 1);
                Cookies.addCookies("login", resultObj.login, 1);
                window.location.replace("content.html");
            })
            .catch((error) => {
                console.log(error.status);
                switch (error.status) {                    
                    default:
                        this.screenError.showScreenError(error.message);
                        break;
                }
            })
    }
}

class Hamburger {
    constructor(size, stuffing) {


    }
    addTopping(topping) { }   // Добавить добавку }
    removeTopping(topping) { }
    // Убрать добавку }
    getToppings(topping) { }   // Получить список добавок }
    getSize() { }             // Узнать размер гамбургера }
    getStuffing() { }         // Узнать начинку гамбургера }
    calculatePrice() { }       // Узнать цену }
    calculateCalories() { }   // Узнать калорийность }
}

class Order {
    constructor(

    )
}





// window.addEventListener('load', () => shop.init());








