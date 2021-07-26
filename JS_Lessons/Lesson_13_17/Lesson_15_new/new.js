function User(name) {
    // this = {};  (неявно)

    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;

    // return this;  (неявно)
}

let user = new User("Vasja");


// new function() { … }

// Если в нашем коде большое количество строк, создающих один сложный объект,
// мы можем обернуть их в функцию-конструктор следующим образом:

    let user2 = new function() {
        this.name = "Вася";
        this.isAdmin = false;

        // ...другой код для создания пользователя
        // возможна любая сложная логика и выражения
        // локальные переменные и т. д.
    };

// Такой конструктор не может быть вызван дважды, так как он нигде не сохраняется,
// просто создаётся и тут же вызывается. Таким образом,
// такой метод создания позволяет инкапсулировать код,
// который создаёт отдельный объект, но без возможности его повторного использования.

function Human(name, surname, adress, sex, age){
    this.name = name;
    this.surname = surname;
    this.adr = adress;
    this.sex = sex;
    this.age = age;
}

function Adress(contry, city, street, house, appartament) {
    this.contry = contry;
    this.city = city;
    this.street = street;
    this.house = house;
    this.appartament = appartament;
}

let human = new Human("Alex", "Pivovarov", new Adress("Ukraine", "Kyiv", "Kurchatova", 21, 60), true, 45);
for (let key in human) {
    if ((typeof human[key]) === "object") {
        for (let keyAdr in human[key]) {
            alert(human[key][keyAdr]);
        }
    }
    if (!((typeof human[key]) === "object")) {
        alert(human[key]);
    }
}