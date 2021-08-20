export default class User {
    constructor(name){
        this.name = name;
    }
}

export function sayHi(user) {
    console.log(`Hello, ${user}`);
}