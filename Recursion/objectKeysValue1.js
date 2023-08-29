// Задача Найти все ключи и значения в объекте рекурсивно javascript
// Скрипт ниже может помочь вам найти все ключи и значения в объекте рекурсивно в JavaScript. 
// Это функция collectKeysAndValues, которая принимает объект и возвращает все ключи и значения.

function collectKeysAndValues(obj) {
    var keys = [];
    var values = [];
    
    function extract(obj) {
        if (typeof obj === 'object' && obj !== null) {
            for (let key in obj) {
                keys.push(key);
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    extract(obj[key]);
                } else {
                    values.push(obj[key]);
                }
            }
        }
    }
    extract(obj);

    return {keys, values};
}

var obj = {
    key1: 'value1',
    key2: 'value2',
    key3: {
        key31: 'value31',
        key32: 'value32',
        key33: {
            key331: 'value331',
            key332: 'value332',
        }
    }
};

console.log(collectKeysAndValues(obj)); // выводит все ключи и значения