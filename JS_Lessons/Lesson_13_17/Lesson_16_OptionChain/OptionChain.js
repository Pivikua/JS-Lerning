"use strict";
let user = {
    name: "Alex",
    surname: "Pivovarov",
    adress: {
        street: "Kurchatova",
        build: 27,
        apartament: 3,
    },
    shout() {
        alert("Say shout " + this.name + " " + this.surname);
    },
};

user.shout();