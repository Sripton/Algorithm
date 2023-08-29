// Задача вывести  ключ  значения в объекте рекурсивно javascript
// Чтобы рекурсивно выводить ключи и значения в объекте JavaScript, 
// вы можете использовать следующую функцию:

function printKeysAndValues(obj, indent = '') {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            console.log(`${indent}${key}:`);
            printKeysAndValues(obj[key], indent + '  ');
        } else {
            console.log(`${indent}${key}: ${obj[key]}`);
        }
    }
}

let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: {
        subKey1: 'subValue1',
        subKey2: 'subValue2',
        subKey3: {
            subSubKey1: 'subSubValue1',
            subSubKey2: 'subSubValue2',
        },
    },
};


// В этом примере функция printKeysAndValues принимает объект и проходит по каждому ключу этого 
// объекта. Если значение ключа является объектом, функция рекурсивно вызывает себя с этим объектом и увеличивает 
// отступ, чтобы показать вложенность. Если значение ключа не является объектом, 
// функция просто выводит  ключ и значение.

// Этот код выводит следующее:
// key1: value1
// key2: value2
// key3:
//   subKey1: subValue1
//   subKey2: subValue2
//   subKey3:
//     subSubKey1: subSubValue1
//     subSubKey2: subSubValue2