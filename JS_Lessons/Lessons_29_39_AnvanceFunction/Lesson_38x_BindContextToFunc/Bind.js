let user = {
    firstName: "Вася",
    sayHi(phrase) {
        alert(`${phrase}, ${this.firstName}!`);
    }
};

// let f = user.sayHi(); // создается новый объект user.sayHi()
// setTimeout(f, 1000);

// setTimeout(user., 1000);

// setTimeout(function() {   // создается замыкание
//     user.sayHi("Привет"); // Привет, Вася!
// }, 1000);

// или

// setTimeout(() => user.sayHi(), 1000); // Привет, Вася!

let say = user.sayHi.bind(user);

say("Привет");
say("Пока");


