// Ошибка в setTimeout
//
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Whoops!"));
  }, 1000);
});

window.addEventListener('unhandledrejection', function (event) {
    alert(event.promise);
    alert(event.reason);
    }
);



