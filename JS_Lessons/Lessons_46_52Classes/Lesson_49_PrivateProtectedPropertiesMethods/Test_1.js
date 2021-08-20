class CoffeeMachine {

    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error("Отрицательный уровень воды");
        this.#waterAmount = value;
    }
}

let machine = new CoffeeMachine();

machine.waterAmount(100);
console.log(machine.waterAmount); // Error

class MegaCoffeeMachine extends CoffeeMachine {

    method() {
        alert( waterAmount ); // Error: can only access from CoffeeMachine
    }

    set waterAmount(value){
        super.waterAmount(value);
    }

    get waterAmount() {
        super.waterAmount();
    }
}

let megaMashine = new MegaCoffeeMachine();
megaMashine.waterAmount(500);

console.log(megaMashine.waterAmount);


