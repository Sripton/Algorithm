// Чтобы поменять местами ключи и значения объекта в JavaScript, вы можете использовать следующий код:
const obj = {
    a: '1',
    b: '2',
    c: '3'
};

const swappedObj = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

console.log(swappedObj); // { '1': 'a', '2': 'b', '3': 'c' }
