class Hamburger {
    constructor() {
        this.size;
        this.calories;
        this.toppings;
    };
    getTotalPrice(sizesData, data) {
        let total = {
            price: 0,
            calories: 0,
        };
        this.size.forEach(i => {
            total.price += sizesData[i].price;
            total.calories += sizesData[i].calories;            
        });       
        this.toppings.forEach(i => {
            total.price += data[i].price;
            total.calories += data[i].calories;            
        });        
        return total;
    };
    setToppings(toppings) {
        this.toppings = toppings;
    };
    setSize(size) {
        console.log(size);
        this.size = size;
    };
    setCalories(calories) {
        this.calories = calories;
    };

};
