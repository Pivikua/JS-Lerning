let user = {};

user.name = "John";
user.surname = "Smith";

for (let prop in user) {
    alert(user[prop]);
}

alert("User.name prop delete.")
user.name = "Pete";
delete user.name;

for (let prop in user) {
    alert(user[prop]);
}