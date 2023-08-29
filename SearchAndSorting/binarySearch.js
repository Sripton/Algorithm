function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === target) {
            // найдено, возвращаем индекс
            return middle;
        } else if (array[middle] < target) {
            // продолжаем поиск в правой половине
            start = middle + 1;
        } else {
            // продолжаем поиск в левой половине
            end = middle - 1;
        }
    }

    // если не найдено
    return -1;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;

let result = binarySearch(numbers, target);
if (result !== -1) {
    console.log(`Элемент найден на позиции ${result}`);
} else {
    console.log('Элемент не найден');
}