// let promise = new Promise(function (resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise
//
//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     // setTimeout(() => resolve("done"), 1000);
//     try {
//         throw new Error("Whoops");
//     } catch (e) {
//         reject(e);
//     }
//
// });

// console.log(promise.then(
//     result => alert(result),
//     error => alert(error)
// ));

// console.log(promise.then(
//     function (result) {
//         alert(result);
//     },
//     function (error) {
//         alert(error);
//     }));

// new Promise((resolve, reject) => {
//         try {
//             throw new Error("Whoops");
//         } catch (e) {
//             reject(e);
//         }
//     })
//     .finally(() => alert("ромис завершён"))
//     .then(result => alert(result), error => alert(error));

function loadScript(src) {
    return new Promise(
        function (resolve, reject) {
            let script = document.createElement('script');
            script.src = src;
            script.onload = function () {
                resolve(script);
            };
            script.onerror = function () {
                reject(new Error(`Ошибка загрузки скрипта ${src}`));
            };
            document.head.append(script);
        });
}

let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => alert(`${script.src} загружен!`),
    error => alert(`Ошибка: ${error.message}`)
);