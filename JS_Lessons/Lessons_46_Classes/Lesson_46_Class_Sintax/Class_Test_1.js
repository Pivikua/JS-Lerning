class User {

    constructor(name) {
        // вызывает сеттер
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Имя слишком короткое.");
            return;
        }
        this._name = value;
    }

    sayName() {
        alert(`name - ${this.name}`);
    }

    say_Name() {
        alert(`_name - ${this._name}`);
    }

}

let user = new User("Иван");
alert(user.name); // Иван

//user = new User(""); // Имя слишком короткое

user.sayName();
user.say_Name();