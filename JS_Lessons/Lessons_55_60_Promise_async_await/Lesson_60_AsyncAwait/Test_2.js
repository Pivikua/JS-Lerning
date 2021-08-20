// const foo = () => console.log('First');
// const bar = () => setTimeout(() => console.log('Second'));
// const baz = () => console.log('Thrid');
//
// bar(); // Second
// foo(); // First
// baz(); // Thrid

// String.prototype.giveLydiaPizza = () => {
//     return 'Just give';
// };
//
// const name = 'Lidia';
// console.log(name.giveLydiaPizza());

const person = {name: 'Lydia'};

function sayHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21)); // Lidia is 21
console.log(sayHi.bind(person, 21)); // function