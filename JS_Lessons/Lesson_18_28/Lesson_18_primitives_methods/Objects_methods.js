// Конструктор
//
// Object()
//     Создает новый объект Object. Это оболочка для данного значения.
//
// Статические методы
//
// Object.assign ()
//      Копирует значения всех перечислимых собственных свойств из одного
//      или нескольких исходных объектов в целевой объект.
// Object.create ()
//      Создает новый объект с указанным объектом-прототипом и свойствами.
// Object.defineProperty ()
//      Добавляет именованное свойство, описанное данным дескриптором, к объекту.
// Object.defineProperties ()
//      Добавляет именованные свойства, описанные данными дескрипторами, к объекту.
// Object.entries ()
//      Возвращает массив, содержащий все пары [ключ, значение]
//      собственных перечислимых строковых свойств данного объекта.
// Object.freeze ()
//      Замораживает объект. Другой код не может удалить или изменить свои свойства.
// Object.fromEntries ()
//      Возвращает новый объект из итерации пар [ключ, значение]. (Это противоположно Object.entries).
// Object.getOwnPropertyDescriptor ()
//      Возвращает дескриптор свойства для именованного свойства объекта.
// Object.getOwnPropertyDescriptors ()
//      Возвращает объект, содержащий все собственные дескрипторы свойств для объекта.
// Object.getOwnPropertyNames ()
//      Возвращает массив, содержащий имена всех перечислимых и неперечислимых свойств данного объекта.
// Object.getOwnPropertySymbols ()
//      Возвращает массив всех свойств символа, найденных непосредственно для данного объекта.
// Object.getPrototypeOf ()
//      Возвращает прототип (внутреннее свойство [[Prototype]]) указанного объекта.
// Object.is ()
//      Сравнивает, являются ли два значения одним и тем же значением.
//      Приравнивает все значения NaN (что отличается от сравнения а
//      бстрактного равенства и строгого сравнения равенства).
// Object.isExtensible ()
//      Определяет, разрешено ли расширение объекта.
// Object.isFrozen ()
//      Определяет, был ли объект заморожен.
// Object.isSealed ()
//      Определяет, запечатан ли объект.
// Object.keys ()
//      Возвращает массив, содержащий имена всех перечислимых строковых свойств данного объекта.
// Object.preventExtensions ()
//     Предотвращает любые расширения объекта.
// Object.seal ()
//     Запрещает другому коду удалять свойства объекта.
// Object.setPrototypeOf ()
//     Устанавливает прототип объекта (его внутреннее свойство [[Prototype]]).
// Object.values ​​()
//     Возвращает массив, содержащий значения, соответствующие всем перечисляемым строковым свойствам данного объекта.
//
// Свойства экземпляра
//
// Object.prototype.constructor
//     Задает функцию, создающую прототип объекта.
// Object.prototype .__ proto__
//     Указывает на объект, который использовался в качестве прототипа при создании экземпляра объекта.
//
// Методы экземпляра
//
// Object.prototype .__ defineGetter __ ()
//      Связывает функцию со свойством, которое при доступе выполняет эту функцию и возвращает ее возвращаемое значение.
// Object.prototype .__ defineSetter __ ()
//      Связывает функцию со свойством, которое, если оно установлено, выполняет ту функцию, которая изменяет свойство.
// Object.prototype .__ lookupGetter __ ()
//      Возвращает функцию, связанную с указанным свойством методом __defineGetter __ ().
// Object.prototype .__ lookupSetter __ ()
//      Возвращает функцию, связанную с указанным свойством методом __defineSetter __ ().
// Object.prototype.hasOwnProperty ()
//      Возвращает логическое значение, указывающее, содержит ли объект указанное свойство как прямое
//      свойство этого объекта и не наследуется ли через цепочку прототипов.
// Object.prototype.isPrototypeOf ()
//      Возвращает логическое значение, указывающее, находится ли объект, для которого вызывается этот метод,
//      в цепочке прототипов указанного объекта.
// Object.prototype.propertyIsEnumerable ()
//      Возвращает логическое значение, указывающее, установлен ли внутренний атрибут ECMAScript [[Enumerable]].
// Object.prototype.toLocaleString ()
//      Вызывает toString ().
// Object.prototype.toString ()
//      Возвращает строковое представление объекта.
// Object.prototype.valueOf ()
//      Возвращает примитивное значение указанного объекта.