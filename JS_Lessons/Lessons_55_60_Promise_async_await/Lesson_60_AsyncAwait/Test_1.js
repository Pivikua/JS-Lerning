function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still adult.');
    } else {
        console.log(`Hmm...`);
    }
}

checkAge({ age: 18});