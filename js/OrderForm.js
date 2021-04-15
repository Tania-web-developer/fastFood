class OrderForm {
    constructor(name) {
        this.form = document.forms[name];       
        this.inputSizeArr = this.form.querySelectorAll('.size');
        this.inputToppingArr = this.form.querySelectorAll('.topping');
        this.loginInput = this.form.login;
        this.submiBtn = this.form.submit_btn;
        this.submiBtn.onclick = () => {
            this.submit();          
            
        }; 
       
    };
    submit() {
        const body = new FormData(this.form);        
    };

    getSizeId(){
        const newArr = []; 
        this.inputSizeArr.forEach(input =>{
            if(input.checked){
                console.log(input.value);
                newArr.push(input.value);
            }
        })
        return newArr;
    }

    getToppingsId(){
        const newArr = []; 
        this.inputToppingArr.forEach(input =>{
            if(input.checked){
                console.log(input.value);
                newArr.push(input.value);
            }
        })
        return newArr;
    };



    

   

};


