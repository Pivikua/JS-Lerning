//Перепишите, используя async/await
//
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

async function loadJson(url) {
    let prom = await fetch(url);
    if (prom.status == 200) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404