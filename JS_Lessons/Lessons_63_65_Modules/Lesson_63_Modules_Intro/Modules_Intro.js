// Модули, введение
//
// По мере роста нашего приложения, мы обычно хотим разделить его на много файлов, так называемых «модулей». Модуль обычно содержит класс или библиотеку с функциями.
//
// Долгое время в JavaScript отсутствовал синтаксис модулей на уровне языка. Это не было проблемой, потому что первые скрипты были маленькими и простыми. В модулях не было необходимости.
//
// Но со временем скрипты становились всё более и более сложными, поэтому сообщество придумало несколько вариантов организации кода в модули. Появились библиотеки для динамической подгрузки модулей.
//
// Например:
//
//     AMD – одна из самых старых модульных систем, изначально реализована библиотекой require.js.
//     CommonJS – модульная система, созданная для сервера Node.js.
//     UMD – ещё одна модульная система, предлагается как универсальная, совместима с AMD и CommonJS.
//
// Теперь все они постепенно становятся частью истории, хотя их и можно найти в старых скриптах.
//
// Система модулей на уровне языка появилась в стандарте JavaScript в 2015 году и постепенно эволюционировала. На данный момент она поддерживается большинством браузеров и Node.js. Далее мы будем изучать именно её.
// Что такое модуль?
//
// Модуль – это просто файл. Один скрипт – это один модуль.
//
// Модули могут загружать друг друга и использовать директивы export и import, чтобы обмениваться функциональностью, вызывать функции одного модуля из другого:
//
//     export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
//     import позволяет импортировать функциональность из других модулей.
//
// Например, если у нас есть файл sayHi.js, который экспортирует функцию:
//
// // 📁 sayHi.js
// export function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }
//
// …Тогда другой файл может импортировать её и использовать:
//
// // 📁 main.js
// import {sayHi} from './sayHi.js';
//
// alert(sayHi); // function...
// sayHi('John'); // Hello, John!
//
// Директива import загружает модуль по пути ./sayHi.js относительно текущего файла и записывает экспортированную функцию sayHi в соответствующую переменную.
//
// Давайте запустим пример в браузере.
//
// Так как модули поддерживают ряд специальных ключевых слов, и у них есть ряд особенностей, то необходимо явно сказать браузеру, что скрипт является модулем, при помощи атрибута <script type="module">.
//
// Вот так:
// Результат
// say.js
// index.html
//
// <!doctype html>
// <script type="module">
//   import {sayHi} from './say.js';
//
//   document.body.innerHTML = sayHi('John');
// </script>
//
// Браузер автоматически загрузит и запустит импортированный модуль (и те, которые он импортирует, если надо), а затем запустит скрипт.
// Основные возможности модулей
//
// Чем отличаются модули от «обычных» скриптов?
//
// Есть основные возможности и особенности, работающие как в браузере, так и в серверном JavaScript.
// Всегда «use strict»
//
// В модулях всегда используется режим use strict. Например, присваивание к необъявленной переменной вызовет ошибку.
//
// <script type="module">
//   a = 5; // ошибка
// </script>
//
// Своя область видимости переменных
//
// Каждый модуль имеет свою собственную область видимости. Другими словами, переменные и функции, объявленные в модуле, не видны в других скриптах.
//
// В следующем примере импортированы 2 скрипта, и hello.js пытается использовать переменную user, объявленную в user.js. В итоге ошибка:
// Результат
// hello.js
// user.js
// index.html
//
// <!doctype html>
// <script type="module" src="user.js"></script>
// <script type="module" src="hello.js"></script>
//
// Модули должны экспортировать функциональность, предназначенную для использования извне. А другие модули могут её импортировать.
//
// Так что нам надо импортировать user.js в hello.js и взять из него нужную функциональность, вместо того чтобы полагаться на глобальные переменные.
//
// Правильный вариант:
// Результат
// hello.js
// user.js
// index.html
//
// import {user} from './user.js';
//
// document.body.innerHTML = user; // John
//
// В браузере также существует независимая область видимости для каждого скрипта <script type="module">:
//
// <script type="module">
//   // Переменная доступна только в этом модуле
//   let user = "John";
// </script>
//
// <script type="module">
//   alert(user); // Error: user is not defined
// </script>
//
// Если нам нужно сделать глобальную переменную уровня всей страницы, можно явно присвоить её объекту window, тогда получить значение переменной можно обратившись к window.user. Но это должно быть исключением, требующим веской причины.
// Код в модуле выполняется только один раз при импорте
//
// Если один и тот же модуль используется в нескольких местах, то его код выполнится только один раз, после чего экспортируемая функциональность передаётся всем импортёрам.
//
// Это очень важно для понимания работы модулей. Давайте посмотрим примеры.
//
// Во-первых, если при запуске модуля возникают побочные эффекты, например выдаётся сообщение, то импорт модуля в нескольких местах покажет его только один раз – при первом импорте:
//
// // 📁 alert.js
// alert("Модуль выполнен!");
//
// // Импорт одного и того же модуля в разных файлах
//
// // 📁 1.js
// import `./alert.js`; // Модуль выполнен!
//
// // 📁 2.js
// import `./alert.js`; // (ничего не покажет)
//
// На практике, задача кода модуля – это обычно инициализация, создание внутренних структур данных, а если мы хотим, чтобы что-то можно было использовать много раз, то экспортируем это.
//
// Теперь более продвинутый пример.
//
// Давайте представим, что модуль экспортирует объект:
//
// // 📁 admin.js
// export let admin = {
//   name: "John"
// };
//
// Если модуль импортируется в нескольких файлах, то код модуля будет выполнен только один раз, объект admin будет создан и в дальнейшем будет передан всем импортёрам.
//
// Все импортёры получат один-единственный объект admin:
//
// // 📁 1.js
// import {admin} from './admin.js';
// admin.name = "Pete";
//
// // 📁 2.js
// import {admin} from './admin.js';
// alert(admin.name); // Pete
//
// // Оба файла, 1.js и 2.js, импортируют один и тот же объект
// // Изменения, сделанные в 1.js, будут видны в 2.js
//
// Ещё раз заметим – модуль выполняется только один раз. Генерируется экспорт и после передаётся всем импортёрам, поэтому, если что-то изменится в объекте admin, то другие модули тоже увидят эти изменения.
//
// Такое поведение позволяет конфигурировать модули при первом импорте. Мы можем установить его свойства один раз, и в дальнейших импортах он будет уже настроенным.
//
// Например, модуль admin.js предоставляет определённую функциональность, но ожидает передачи учётных данных в объект admin извне:
//
// // 📁 admin.js
// export let admin = { };
//
// export function sayHi() {
//   alert(`Ready to serve, ${admin.name}!`);
// }
//
// В init.js, первом скрипте нашего приложения, мы установим admin.name. Тогда все это увидят, включая вызовы, сделанные из самого admin.js:
//
// // 📁 init.js
// import {admin} from './admin.js';
// admin.name = "Pete";
//
// Другой модуль тоже увидит admin.name:
//
// // 📁 other.js
// import {admin, sayHi} from './admin.js';
//
// alert(admin.name); // Pete
//
// sayHi(); // Ready to serve, Pete!
//
// import.meta
//
// Объект import.meta содержит информацию о текущем модуле.
//
// Содержимое зависит от окружения. В браузере он содержит ссылку на скрипт или ссылку на текущую веб-страницу, если модуль встроен в HTML:
//
// <script type="module">
//   alert(import.meta.url); // ссылка на html страницу для встроенного скрипта
// </script>
//
// В модуле «this» не определён
//
// Это незначительная особенность, но для полноты картины нам нужно упомянуть об этом.
//
// В модуле на верхнем уровне this не определён (undefined).
//
// Сравним с не-модульными скриптами, там this – глобальный объект:
//
// <script>
//   alert(this); // window
// </script>
//
// <script type="module">
//   alert(this); // undefined
// </script>
//
// Особенности в браузерах
//
// Есть и несколько других, именно браузерных особенностей скриптов с type="module" по сравнению с обычными скриптами.
//
// Если вы читаете материал в первый раз или, если не собираетесь использовать модули в браузерах, то сейчас можете пропустить эту секцию.
// Модули являются отложенными (deferred)
//
// Модули всегда выполняются в отложенном (deferred) режиме, точно так же, как скрипты с атрибутом defer (описан в главе Скрипты: async, defer). Это верно и для внешних и встроенных скриптов-модулей.
//
// Другими словами:
//
//     загрузка внешних модулей, таких как <script type="module" src="...">, не блокирует обработку HTML.
//     модули, даже если загрузились быстро, ожидают полной загрузки HTML документа, и только затем выполняются.
//     сохраняется относительный порядок скриптов: скрипты, которые идут раньше в документе, выполняются раньше.
//
// Как побочный эффект, модули всегда видят полностью загруженную HTML-страницу, включая элементы под ними.
//
// Например:
//
// <script type="module">
//   alert(typeof button); // object: скрипт может 'видеть' кнопку под ним
//   // так как модули являются отложенными, то скрипт начнёт выполнятся только после полной загрузки страницы
// </script>
//
// Сравните с обычным скриптом ниже:
//
// <script>
//   alert(typeof button); // Ошибка: кнопка не определена, скрипт не видит элементы под ним
//   // обычные скрипты запускаются сразу, не дожидаясь полной загрузки страницы
// </script>
//
// <button id="button">Кнопка</button>
//
// Пожалуйста, обратите внимание: второй скрипт выполнится раньше, чем первый! Поэтому мы увидим сначала undefined, а потом object.
//
// Это потому, что модули начинают выполняться после полной загрузки страницы. Обычные скрипты запускаются сразу же, поэтому сообщение из обычного скрипта мы видим первым.
//
// При использовании модулей нам стоит иметь в виду, что HTML-страница будет показана браузером до того, как выполнятся модули и JavaScript-приложение будет готово к работе. Некоторые функции могут ещё не работать. Нам следует разместить «индикатор загрузки» или что-то ещё, чтобы не смутить этим посетителя.
// Атрибут async работает во встроенных скриптах
//
// Для не-модульных скриптов атрибут async работает только на внешних скриптах. Скрипты с ним запускаются сразу по готовности, они не ждут другие скрипты или HTML-документ.
//
// Для модулей атрибут async работает на любых скриптах.
//
// Например, в скрипте ниже есть async, поэтому он выполнится сразу после загрузки, не ожидая других скриптов.
//
// Скрипт выполнит импорт (загрузит ./analytics.js) и сразу запустится, когда будет готов, даже если HTML документ ещё не будет загружен, или если другие скрипты ещё загружаются.
//
// Это очень полезно, когда модуль ни с чем не связан, например для счётчиков, рекламы, обработчиков событий.
//
// <!-- загружаются зависимости (analytics.js) и скрипт запускается -->
// <!-- модуль не ожидает загрузки документа или других тэгов <script> -->
// <script async type="module">
//   import {counter} from './analytics.js';
//
//   counter.count();
// </script>
//
// Внешние скрипты
//
// Внешние скрипты с атрибутом type="module" имеют два отличия:
//
//     Внешние скрипты с одинаковым атрибутом src запускаются только один раз:
//
// <!-- скрипт my.js загрузится и будет выполнен только один раз -->
// <script type="module" src="my.js"></script>
// <script type="module" src="my.js"></script>
//
// Внешний скрипт, который загружается с другого домена, требует указания заголовков CORS. Другими словами, если модульный скрипт загружается с другого домена, то удалённый сервер должен установить заголовок Access-Control-Allow-Origin означающий, что загрузка скрипта разрешена.
//
//     <!-- another-site.com должен указать заголовок Access-Control-Allow-Origin -->
//     <!-- иначе, скрипт не выполнится -->
//     <script type="module" src="http://another-site.com/their.js"></script>
//
//     Это обеспечивает лучшую безопасность по умолчанию.
//
// Не допускаются «голые» модули
//
// В браузере import должен содержать относительный или абсолютный путь к модулю. Модули без пути называются «голыми» (bare). Они не разрешены в import.
//
// Например, этот import неправильный:
//
// import {sayHi} from 'sayHi'; // Ошибка, "голый" модуль
// // путь должен быть, например './sayHi.js' или абсолютный
//
// Другие окружения, например Node.js, допускают использование «голых» модулей, без путей, так как в них есть свои правила, как работать с такими модулями и где их искать. Но браузеры пока не поддерживают «голые» модули.
// Совместимость, «nomodule»
//
// Старые браузеры не понимают атрибут type="module". Скрипты с неизвестным атрибутом type просто игнорируются. Мы можем сделать для них «резервный» скрипт при помощи атрибута nomodule:
//
// <script type="module">
//   alert("Работает в современных браузерах");
// </script>
//
// <script nomodule>
//   alert("Современные браузеры понимают оба атрибута - и type=module, и nomodule, поэтому пропускают этот тег script")
//   alert("Старые браузеры игнорируют скрипты с неизвестным атрибутом type=module, но выполняют этот.");
// </script>
//
// Инструменты сборки
//
// В реальной жизни модули в браузерах редко используются в «сыром» виде. Обычно, мы объединяем модули вместе, используя специальный инструмент, например Webpack и после выкладываем код на рабочий сервер.
//
// Одно из преимуществ использования сборщика – он предоставляет больший контроль над тем, как модули ищутся, позволяет использовать «голые» модули и многое другое «своё», например CSS/HTML-модули.
//
// Сборщик делает следующее:
//
//     Берёт «основной» модуль, который мы собираемся поместить в <script type="module"> в HTML.
//     Анализирует зависимости (импорты, импорты импортов и так далее)
//     Собирает один файл со всеми модулями (или несколько файлов, это можно настроить), перезаписывает встроенный import функцией импорта от сборщика, чтобы всё работало. «Специальные» типы модулей, такие как HTML/CSS тоже поддерживаются.
//     В процессе могут происходить и другие трансформации и оптимизации кода:
//         Недостижимый код удаляется.
//         Неиспользуемые экспорты удаляются («tree-shaking»).
//         Специфические операторы для разработки, такие как console и debugger, удаляются.
//         Современный синтаксис JavaScript также может быть трансформирован в предыдущий стандарт, с похожей функциональностью, например, с помощью Babel.
//         Полученный файл можно минимизировать (удалить пробелы, заменить названия переменных на более короткие и т.д.).
//
// Если мы используем инструменты сборки, то они объединяют модули вместе в один или несколько файлов, и заменяют import/export на свои вызовы. Поэтому итоговую сборку можно подключать и без атрибута type="module", как обычный скрипт:
//
// <!-- Предположим, что мы собрали bundle.js, используя например утилиту Webpack -->
// <script src="bundle.js"></script>
//
// Хотя и «как есть» модули тоже можно использовать, а сборщик настроить позже при необходимости.
// Итого
//
// Подводя итог, основные понятия:
//
//     Модуль – это файл. Чтобы работал import/export, нужно для браузеров указывать атрибут <script type="module">. У модулей есть ряд особенностей:
//         Отложенное (deferred) выполнение по умолчанию.
//         Атрибут async работает во встроенных скриптах.
//         Для загрузки внешних модулей с другого источника, он должен ставить заголовки CORS.
//         Дублирующиеся внешние скрипты игнорируются.
//     У модулей есть своя область видимости, обмениваться функциональностью можно через import/export.
//     В модулях всегда включена директива use strict.
//     Код в модулях выполняется только один раз. Экспортируемая функциональность создаётся один раз и передаётся всем импортёрам.
//
// Когда мы используем модули, каждый модуль реализует свою функциональность и экспортирует её. Затем мы используем import, чтобы напрямую импортировать её туда, куда необходимо. Браузер загружает и анализирует скрипты автоматически.
//
// В реальной жизни часто используется сборщик Webpack, чтобы объединить модули: для производительности и других «плюшек».
//
// В следующей главе мы увидим больше примеров и вариантов импорта/экспорта.