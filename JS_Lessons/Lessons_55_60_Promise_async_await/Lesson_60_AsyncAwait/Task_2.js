// Перепишите, используя async/await
//
// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
//
// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {  // наследуем свой класс от Error
    constructor(response) {        // в конструктор передаем response
        super(`${response.status} for ${response.url}`);  // родительскому классу передаем строку ошибки
        this.name = 'HttpError';     // создаем имя ошибки
        this.response = response;    // и передаем внутреннему полю response
    }
}

async function loadJson(url) {  // превращаем функцию в асинхронную и передаем в неее ссылку
    let response = await fetch(url);  // получаем промис response от fetch(url)
    if (response.status == 200) { // проверяем статус ответа
        return response.json();     // если ответ 200 вовращаем json
    } else {
        throw new HttpError(response);  // иначе возвращаем ошибку с параметрами ответа
    }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    while (true) {
        let name = prompt("Введите логин?", "iliakan");
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            alert(`Полное имя: ${user.name}.`);
            return;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw err;
            }
        }
    }
}

demoGithubUser();