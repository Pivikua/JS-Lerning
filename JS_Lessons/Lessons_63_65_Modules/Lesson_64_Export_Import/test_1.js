import User from './test_2.js';
import name from './test_3.js';
import month from './test_4.js';

let user = new User("Vasja");

name("Andey");

console.log(user.name);

for(let mon of month){
    console.log(`Месяц ${mon}`)
}