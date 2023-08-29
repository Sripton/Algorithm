// Сортировка слиянием (merge sort) — это эффективный, стабильный алгоритм сортировки, 
// который использует принцип "разделяй и властвуй". Сначала он разделяет список на две половины и сортирует 
// их независимо друг от друга. Затем он сливает два отсортированных списка, чтобы получить полностью 
// отсортированный список.

function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
 
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
 
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
 
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// использование функции
let arr = [64, 34, 25, 12, 22, 11, 90];
arr = mergeSort(arr);
console.log(arr);

// В этом коде функция mergeSort берет массив и разделяет его на две половины до тех пор, 
// пока каждый элемент не станет отдельным массивом. Затем она вызывает функцию merge, 
// чтобы сливать эти массивы в правильном порядке. Функция merge создает новый массив, 
// добавляя в него наименьший элемент из двух массивов, пока один из массивов не закончится. 
// Затем она добавляет оставшиеся элементы из непустого массива.