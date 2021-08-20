//Async/await
//
// Существует специальный синтаксис для работы с промисами, который называется «async/await». Он удивительно прост для понимания и использования.
// Асинхронные функции
//
// Начнём с ключевого слова async. Оно ставится перед функцией, вот так:
//
// async function f() {
//   return 1;
// }
//
// У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.
//
// Например, эта функция возвратит выполненный промис с результатом 1:
//
// async function f() {
//   return 1;
// }
//
// f().then(alert); // 1
//
// Можно и явно вернуть промис, результат будет одинаковым:
//
// async function f() {
//   return Promise.resolve(1);
// }
//
// f().then(alert); // 1
//
// Так что ключевое слово async перед функцией гарантирует, что эта функция в любом случае вернёт промис. Согласитесь, достаточно просто? Но это ещё не всё. Есть другое ключевое слово – await, которое можно использовать только внутри async-функций.
// Await
//
// Синтаксис:
//
// // работает только внутри async–функций
// let value = await promise;
//
// Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
//
// В этом примере промис успешно выполнится через 1 секунду:
//
// async function f() {
//
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000)
//   });
//
//   let result = await promise; // будет ждать, пока промис не выполнится (*)
//
//   alert(result); // "готово!"
// }
//
// f();
//
// В данном примере выполнение функции остановится на строке (*) до тех пор, пока промис не выполнится. Это произойдёт через секунду после запуска функции. После чего в переменную result будет записан результат выполнения промиса, и браузер отобразит alert-окно «готово!».
//
// Обратите внимание, хотя await и заставляет JavaScript дожидаться выполнения промиса, это не отнимает ресурсов процессора. Пока промис не выполнится, JS-движок может заниматься другими задачами: выполнять прочие скрипты, обрабатывать события и т.п.
//
// По сути, это просто «синтаксический сахар» для получения результата промиса, более наглядный, чем promise.then.
// await нельзя использовать в обычных функциях
//
// Если мы попробуем использовать await внутри функции, объявленной без async, получим синтаксическую ошибку:
//
// function f() {
//   let promise = Promise.resolve(1);
//   let result = await promise; // SyntaxError
// }
//
// Ошибки не будет, если мы укажем ключевое слово async перед объявлением функции. Как было сказано раньше, await можно использовать только внутри async–функций.
//
// Давайте перепишем пример showAvatar() из раздела Цепочка промисов с помощью async/await:
//
//     Нам нужно заменить вызовы .then на await.
//     И добавить ключевое слово async перед объявлением функции.
//
// async function showAvatar() {
//
//   // запрашиваем JSON с данными пользователя
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
//
//   // запрашиваем информацию об этом пользователе из github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();
//
//   // отображаем аватар пользователя
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);
//
//   // ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));
//
//   img.remove();
//
//   return githubUser;
// }
//
// showAvatar();
//
// Получилось очень просто и читаемо, правда? Гораздо лучше, чем раньше.
// await нельзя использовать на верхнем уровне вложенности
//
// Программисты, узнав об await, часто пытаются использовать эту возможность на верхнем уровне вложенности (вне тела функции). Но из-за того, что await работает только внутри async–функций, так сделать не получится:
//
// // SyntaxError на верхнем уровне вложенности
// let response = await fetch('/article/promise-chaining/user.json');
// let user = await response.json();
//
// Можно обернуть этот код в анонимную async–функцию, тогда всё заработает:
//
// (async () => {
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();
//   ...
// })();
//
// await работает с «thenable»–объектами
//
// Как и promise.then, await позволяет работать с промис–совместимыми объектами. Идея в том, что если у объекта можно вызвать метод then, этого достаточно, чтобы использовать его с await.
//
// В примере ниже, экземпляры класса Thenable будут работать вместе с await:
//
// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     alert(resolve);
//     // выполнить resolve со значением this.num * 2 через 1000мс
//     setTimeout(() => resolve(this.num * 2), 1000); // (*)
//   }
// };
//
// async function f() {
//   // код будет ждать 1 секунду,
//   // после чего значение result станет равным 2
//   let result = await new Thenable(1);
//   alert(result);
// }
//
// f();
//
// Когда await получает объект с .then, не являющийся промисом, JavaScript автоматически запускает этот метод, передавая ему аргументы – встроенные функции resolve и reject. Затем await приостановит дальнейшее выполнение кода, пока любая из этих функций не будет вызвана (в примере это строка (*)). После чего выполнение кода продолжится с результатом resolve или reject соответственно.
// Асинхронные методы классов
//
// Для объявления асинхронного метода достаточно написать async перед именем:
//
// class Waiter {
//   async wait() {
//     return await Promise.resolve(1);
//   }
// }
//
// new Waiter()
//   .wait()
//   .then(alert); // 1
//
// Как и в случае с асинхронными функциями, такой метод гарантированно возвращает промис, и в его теле можно использовать await.
// Обработка ошибок
//
// Когда промис завершается успешно, await promise возвращает результат. Когда завершается с ошибкой – будет выброшено исключение. Как если бы на этом месте находилось выражение throw.
//
// Такой код:
//
// async function f() {
//   await Promise.reject(new Error("Упс!"));
// }
//
// Делает то же самое, что и такой:
//
// async function f() {
//   throw new Error("Упс!");
// }
//
// Но есть отличие: на практике промис может завершиться с ошибкой не сразу, а через некоторое время. В этом случае будет задержка, а затем await выбросит исключение.
//
// Такие ошибки можно ловить, используя try..catch, как с обычным throw:
//
// async function f() {
//
//   try {
//     let response = await fetch('http://no-such-url');
//   } catch(err) {
//     alert(err); // TypeError: failed to fetch
//   }
// }
//
// f();
//
// В случае ошибки выполнение try прерывается и управление прыгает в начало блока catch. Блоком try можно обернуть несколько строк:
//
// async function f() {
//
//   try {
//     let response = await fetch('/no-user-here');
//     let user = await response.json();
//   } catch(err) {
//     // перехватит любую ошибку в блоке try: и в fetch, и в response.json
//     alert(err);
//   }
// }
//
// f();
//
// Если у нас нет try..catch, асинхронная функция будет возвращать завершившийся с ошибкой промис (в состоянии rejected). В этом случае мы можем использовать метод .catch промиса, чтобы обработать ошибку:
//
// async function f() {
//   let response = await fetch('http://no-such-url');
// }
//
// // f() вернёт промис в состоянии rejected
// f().catch(alert); // TypeError: failed to fetch // (*)
//
// Если забыть добавить .catch, то будет сгенерирована ошибка «Uncaught promise error» и информация об этом будет выведена в консоль. Такие ошибки можно поймать глобальным обработчиком, о чём подробно написано в разделе Промисы: обработка ошибок.
// async/await и promise.then/catch
//
// При работе с async/await, .then используется нечасто, так как await автоматически ожидает завершения выполнения промиса. В этом случае обычно (но не всегда) гораздо удобнее перехватывать ошибки, используя try..catch, нежели чем .catch.
//
// Но на верхнем уровне вложенности (вне async–функций) await использовать нельзя, поэтому .then/catch для обработки финального результата или ошибок – обычная практика.
//
// Так сделано в строке (*) в примере выше.
// async/await отлично работает с Promise.all
//
// Когда необходимо подождать несколько промисов одновременно, можно обернуть их в Promise.all, и затем await:
//
// // await будет ждать массив с результатами выполнения всех промисов
// let results = await Promise.all([
//   fetch(url1),
//   fetch(url2),
//   ...
// ]);
//
// В случае ошибки она будет передаваться как обычно: от завершившегося с ошибкой промиса к Promise.all. А после будет сгенерировано исключение, которое можно отловить, обернув выражение в try..catch.
// Итого
//
// Ключевое слово async перед объявлением функции:
//
//     Обязывает её всегда возвращать промис.
//     Позволяет использовать await в теле этой функции.
//
// Ключевое слово await перед промисом заставит JavaScript дождаться его выполнения, после чего:
//
//     Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
//     Иначе вернётся результат промиса.
//
// Вместе они предоставляют отличный каркас для написания асинхронного кода. Такой код легко и писать, и читать.
//
// Хотя при работе с async/await можно обходиться без promise.then/catch, иногда всё-таки приходится использовать эти методы (на верхнем уровне вложенности, например). Также await отлично работает в сочетании с Promise.all, если необходимо выполнить несколько задач параллельно.