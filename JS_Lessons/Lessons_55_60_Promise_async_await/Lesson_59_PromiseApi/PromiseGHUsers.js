let names = ['ilikan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
        return responses;
    })
    .then(responses => Promise.all(responses.map(respJSON => respJSON.json())))
    .then(users => users.forEach(user => console.log(user.name)))
    .catch(console.log);