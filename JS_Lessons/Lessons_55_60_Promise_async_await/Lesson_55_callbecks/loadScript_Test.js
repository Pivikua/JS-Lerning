function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

    document.head.append(script);
}

loadScript('script.js', function (error, script) {
    if(error) {
        // обрабатываем ошибку
    } else {
        alert(`Здорово, скрипт ${script.src} загрузился`);
        alert( _ ); // функция, объявленная в загруженном скрипте
    }
});