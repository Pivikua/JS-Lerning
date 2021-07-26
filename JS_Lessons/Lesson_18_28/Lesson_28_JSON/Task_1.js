// Преобразуйте объект в JSON, а затем обратно в обычный объект
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let userSeril = JSON.stringify(user);

let userRecieved = JSON.parse(userSeril);

console.log("name - " + userRecieved.name);
console.log("age - " + userRecieved.age);