let calculator = {
    first: 0,
    second: 0,
    read() {
        this.first = +prompt("Задайте первое число", 0);
        this.second = +prompt("Задайте второе число", 0);
    },
    sum() {
        return this.first + this.second;
    },
    mul() {
        return this.first * this.second;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());