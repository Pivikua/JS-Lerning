let phoneCodes = {
    // делаем все наменования строками
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    "+1": "США"
};

for (let props in phoneCodes) {
    // преобразуем к числам перед выводом
    alert(+props); // 1, 41, 44, 49
}