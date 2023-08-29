//Задача вывести все числа в псоледовательности рекурсивно 
// const func = (n) => {
//     if(n < 0){
//         return;
//     }else {
//         console.log(n);
//         func(n-1);
//     }
// }
// console.log(func(10));

// const getNthFibo = (n) => {
//     let sum = 0;
//     let last = 1;
//     let lastlast = 0;

//     for(let i = 1; i < n; i++){
//         sum = last + lastlast;
//         lastlast = last;
//         last = sum;
//     }
//    return sum
// }
// console.log(getNthFibo(7));


// Рекурсивное решение: Фибоначчи
// const fibonachi = (n) => {
//    if(n <= 1){return n}
//    else {return fibonachi(n-1) + fibonachi(n-2)}

// }
// console.log(fibonachi(5));



// const fibonachi = (n, lastlast, last) => {
//     if(n===0){return lastlast}
//     if(n === 1) {return last}
//     return fibonachi(n-1, last, lastlast + last);
// }
// console.log(fibonachi(5, 0,1));


// Рассмотрим пример рекурсии на JavaScript с использованием массива. 
// Допустим, у нас есть задача вычислить сумму всех элементов массива.
// function sumArray(arr, index = 0, sum = 0) {
//     if (index === arr.length) {
//         return sum;
//     } else {
//         return sumArray(arr, index + 1, sum + arr[index]);
//     }
// }

// console.log(sumArray([1, 2, 3, 4, 5])); // Выведет: 15

// let array = [1,2,3,4,5,6];
// const recursionFunc = (arr, index, sum) => {
//     if(index === arr.length){
//         return sum;
//     }else {
//         return recursionFunc(arr, index+1, sum + arr[index]);
//     }
// }
// console.log(recursionFunc(array, 0, 0)); // 21

// Допустим, у нас есть массив объектов, где каждый объект представляет человека с именем и возрастом.
//  Мы хотим найти сумму возрастов всех людей.
// function sumAges(arr, index = 0, sum = 0) {
//     if (index === arr.length) {
//         return sum;
//     } else {
//         return sumAges(arr, index + 1, sum + arr[index].age);
//     }
// }

// const people = [
//     {name: 'Alex', age: 20},
//     {name: 'Bob', age: 30},
//     {name: 'Charlie', age: 25}
// ];

// console.log(sumAges(people)); // Выведет: 75

// const people = [
//     {name: 'Alex', age: 20}, // index + 1 = 1
//     {name: 'Bob', age: 30}, // index + 1 = 2
//     {name: 'Charlie', age: 25} // index + 1  = 3
// ];
// // console.log(people.length)l; // 
// const sumAges = (arr, index = 0, sum = 0) => {
// if(index === arr.length){
//     return sum;
// }else {
//    return sumAges(arr, index+1, sum += arr[index].age);
// }
// }
// console.log(sumAges(people)); // 75



// const people = [
//     {name: 'Alex', age: 20}, // index + 1 = 1
//     {name: 'Bob', age: 30}, // index + 1 = 2
//     {name: 'Charlie', age: 25} // index + 1  = 3
// ];

// for(let elem in people) {
//     console.log(people[elem].name); 
//     // Alex
//     // Bob
//     // Charlie
// }


// const pascal = (row, col) => {
//     if(col ===  0) { return 1}
//     else if(row === 0) {return 0}
//     else {return  pascal(row-1,col) + pascal(row-1,col-1)}
// }
// console.log(pascal(5,2));

// const func = (n) => {
//     console.log(n);
//     if(n > 1){
//         func(n-1);
//     }
// }
// func(10); // 10 9 8 7 6 5 4 3 2 1


//Задача 
// ПРЕОБРАЗОВАТЬ ДЕСЯТИЧНУЮ ЧИСЛО (ОСНОВАНИЕ 10) В ДВОИЧНОЕ ЧИСЛО
// const binaryFunction = (n) => {
//     let stringBinary = '';

//     const binaryFunctionHelp = (n) => {
//         if(n < 2) {
//             stringBinary += n;
//             return;
//         }else {
//           binaryFunctionHelp(Math.floor(n/2)); 
//           binaryFunctionHelp(n%2);
//         }
//     }
//     binaryFunctionHelp(n);
//     return stringBinary;
// }
// console.log(binaryFunction(60));


//Задача 
// НАПЕЧАТАТЬ ВСЕ ПЕРЕСТАНОВКИ МАССИВ
// const arr = ['A', 'C', 'D'];


//Анализ 1
// const array = [34,21,69,2,17];
// const swap = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }
// const func = (arr, begin, end) => {
//     for(let i =  begin; i < end-1; i++){
//        for(let j = i+1; j < end-1; j++){
//         if(arr[j] < arr[i]){
//             swap(arr, i, j);
//         }
//        }
//     }
//     console.log(arr)
// }

// const detFunc = (arr) => {
//     func(arr, 0, arr.length+1);
// }
// detFunc(array); // [ 2, 17, 21, 34, 69 ]

//Анализ 2
// const array = [34,21,69,2,17];
// const swap = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }
// const func = (arr, begin, end) => {
//     for(let i =  begin; i < end+1; i++){
//        for(let j = i+1; j < end+1; j++){
//         if(arr[j] < arr[i]){
//             swap(arr, i, j);
//         }
//        }
//     }
//     console.log(arr)
// }

// const detFunc = (arr) => {
//     func(arr, 0, arr.length-1);
// }
// detFunc(array); // [ 2, 17, 21, 34, 69 ]

//Анализ 3
// const array = [34,21,69,2,17];
// const swap = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }
// const func = (arr, begin, end) => {
//     for(let i =  begin; i < end; i++){
//        for(let j = i+1; j < end; j++){
//         if(arr[j] < arr[i]){
//             swap(arr, i, j);
//         }
//        }
//     }
//     console.log(arr)
// }

// const detFunc = (arr) => {
//     func(arr, 0, arr.length);
// }
// detFunc(array); // [ 2, 17, 21, 34, 69 ]

//Решение 1
// const arr = ['A', 'C', 'D'];
// const swap = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }
// let strSwap = '';
// let strPremute = '';
// const permute = (strArray, begin, end) => {
//     if(begin === end){ //  если одинаковые индексы 
//          console.log(strArray
//          );
//     }else {
//        for(let i = begin; i <= 1; i++){
//        swap(strArray, begin, i);
//         permute(strArray, begin+1, end);

//        }
//     }
// }
// const permuteArray = (arr) => {
//     permute(arr, 0, arr.length-1);
// }
// console.log(permuteArray(arr));
// console.log(`strSwap = ${strSwap}; strPremute = ${strPremute}`);

//Задача 
// ВЫПОЛНИТЬ ОБЪЕКT
//Анализ 1

// let elmar = {
//     name: 'elmar',
//     age: 32
// }
// const flatDictionary = (dictionary, propName) => {
//     let flatDictionary = {};
//     if(typeof dictionary !== 'object'){
//         flatDictionary[propName] = dictionary;
//     }
//     return flatDictionary
// }
// console.log(flatDictionary('telephone', 'too')); // { too: 'telephone' }

//Анализ 1
// const flatDictionary = (dictionary, propName) => {
//     let newObject = {};
//     if(typeof dictionary !== 'object'){
//         newObject[propName] = dictionary;
//     }
//     return newObject

// }
// console.log(flatDictionary('telephone', 'foo')); // { foo: 'telephone' }


//`Анализ 3

// const dictionary = {
//     'key1': '1',
//     'key2':  {
//         'a': '2',
//         'b': '3',
//         'c': {
//             'd': '3',
//             'e': '1'
//         }
//     }
// }

// const flatDictionary = (dictionary) => {
//     let newObjectDictionary = {};
//     function flatDictionaryHelper(dictionary, propname) {
//         if(typeof dictionary !== 'object'){
//             newObjectDictionary[propname] = dictionary;
//             return;
//         }
//         for(let prop in dictionary) {
//             if(prop === ''){
//                 flatDictionaryHelper(dictionary[prop], propname+prop);
//             }else {
//                 flatDictionaryHelper(dictionary[prop], propname+'.'+prop);
//             }
//         }
//     }
//     flatDictionaryHelper(dictionary, '');
//     return newObjectDictionary
// }
// console.log(flatDictionary(dictionary));

// const newObject = {};
// const func2 = (dictionary, propname) => {
//     if(typeof dictionary !== 'object'){
//         newObject[propname] = dictionary;
//     }
// }
// const func1 = (dictionary) => {
//     func2(dictionary, '');
//     return newObject;
// }
// console.log(func1('Elmar')); // { '': 'Elmar' }


// const dictionary = {
//     'key1': '1',
//     'key2':  {
//         'a': '2',
//         'b': '3',
//         'c': {
//             'd': '3',
//             'e': '1'
//         }
//     }
// }
// const newObject = {};
// const func2 = (dictionary, propname) => {
//     if(typeof dictionary !== 'object'){
//         newObject[propname] = dictionary;
//     }
//     for(let prop in dictionary) {
//     if(propname === ''){
//         func2(dictionary[prop], propname+prop)
//     }
//     }
// }

// const func1 = (dictionary) => {
//     func2(dictionary, '');
//     return newObject;
// }
// console.log(func1('String')); // { '': 'String' }



// const newObject = {};
// let s = 'Hello'
// const func2 = (dictionary, propname) => {
//    if(typeof dictionary !== 'object'){
//     newObject[propname] = dictionary;
//    }
//    for(let prop in dictionary) {
//     if(propname === ''){
//         func2(dictionary[prop], propname+prop);
//     }
//    }
// }

// const func1 = (dictionary) => {
//     func2(dictionary, ''); 
//     return newObject
// }
// console.log(func1('string'));
// {
//     '0': 's',
//     '1': 't',
//     '2': 'r',
//     '3': 'i',
//     '4': 'n',
//     '5': 'g',
//     '': 'string'
// }




// const dictionary = {
//     'key1': '1',
//     'key2':  {
//         'a': '2',
//         'b': '3',
//         'c': {
//             'd': '3',
//             'e': '1'
//         }
//     }
// }

// let newObject = {};
// const func2 = (dictionary, propname) => {
//     if(typeof dictionary !== 'object'){
//         newObject[propname] = dictionary;
//         return;
//     }
//     for(let prop in dictionary) {
//         if(propname === ''){
//             func2(dictionary[prop], propname+prop);
//         }else {
//             func2(dictionary[prop], propname+'.'+prop);
//         }
//     }
// }
// const func1 = (dictionary) =>  {
//     func2(dictionary, '');
//     return newObject
// }
// console.log(func1(dictionary))






// for(let p in dictionary) {
//     console.log(`
//     p = ${p};
//     dictionary[p] = ${dictionary[p]};
//     `)
// }
// p = key1;
// dictionary[p] = 1;


// p = key2;
// dictionary[p] = [object Object];

//  let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: {
//             f: 4,
//             g: 5
//         }
//     }
// };

// const getAllKeys = (obj) => {
//     let keys = [];
//     for(let key in obj){
//         keys.push(key);
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             keys = keys.concat(getAllKeys(obj[key]))
//         }
    
//     }
//     return keys
// }
// console.log(getAllKeys(obj));
// [
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g'
// ]


// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: {
//             f: 4,
//             g: 5
//         }
//     }
// };

// const getAllKeys = (obj) => {
//     let keys = [];
//     for(let key in obj) {
//         keys.push(key);
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//            keys =  keys.concat(getAllKeys(obj[key]));
//         }
//     }
//     return keys;
// } 
// console.log(getAllKeys(obj)); 
// // [
// //     'a', 'b', 'c',
// //     'd', 'e', 'f',
// //     'g'
// //   ]

// const arr1 = [1,2,3,4,5,6];
// const arr2 = [11,11,11,11,11,11];
// let newArray  = [];
// let i = 0;
// do {
// newArray.push(arr1[i]);
// i++;
// }while(i < arr1.length);
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
// let j = 0; 
// do {
//  newArray = newArray.concat(arr2[j]);
//     j++;
// }while(j < arr2.length);
// console.log(newArray); 
// [
// 1,  2,  3,  4,  5,
// 6, 11, 11, 11, 11,
// 11, 11
// ]


// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: {
//             f: 4,
//             g: 5
//         }
//     }
// };

// const collectKeysAndValues = (obj) => {
//     let keys = [];
//     let values = [];
//     const extra = (obj) => {
//         if(typeof obj === 'object' && obj !== null){
//             for(let key in obj){
//                 keys.push(key);
//                 if(typeof obj[key] === 'object' && obj[key] !== null){
//                     extra(obj[key]);
//                 }else {
//                     values.push(obj[key]);
//                 }
//             }
//         }
//     }
//     extra(obj);
//    return {keys, values};
// }
// console.log(collectKeysAndValues(obj));
// {
//     keys: [
//       'a', 'b', 'c',
//       'd', 'e', 'f',
//       'g'
//     ],
//     values: [ 1, 2, 3, 4, 5 ]
// }



// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: {
//         subKey1: 'subValue1',
//         subKey2: 'subValue2',
//         subKey3: {
//             subSubKey1: 'subSubValue1',
//             subSubKey2: 'subSubValue2',
//         },
//     },
// };
// const printKeyAndValueObj = (obj, indent = '') => {
//     for(let key in obj) {
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//            console.log(`${indent}${key}`);
//            printKeyAndValueObj(obj[key], indent + ' ');
//         }else {
//             console.log(`${indent}${key}:${obj[key]}`);
//         }
//     }
// }
// printKeyAndValueObj(obj);


// let obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: {
//         subKey1: 'subValue1',
//         subKey2: 'subValue2',
//         subKey3: {
//             subSubKey1: 'subSubValue1',
//             subSubKey2: 'subSubValue2',
//         },
//     },
// };

// const printKeyAndValueObj = (obj, indent = '') => {
//     for(let key in obj) {
//         if(typeof obj[key] === 'object' && obj[key] !== null){
//             console.log(`${indent}${key}`);
//             printKeyAndValueObj(obj[key], indent + ' ');
//         }else {
//             console.log(`${indent}${key}:${obj[key]}`);
//         }
//     }
// }
// printKeyAndValueObj(obj);
 

// const array = ['A', 'C', 'D'];
// const getAllCombintions = (arr) => {
//     if(arr.length <= 1) {
//         return [arr]
//     }
//     const newArray = [];

//     for(let i = 0; i < arr.length; i++){
//         // i = 0; 
//         newArray.push(arr.slice(0,i).concat(arr.slice(i+1))); // [C D]
//         // //i = 1;
//         // newArray.push(arr.slice(0,i).concat(arr.slice(i+1))); // [ A D ];
//         // // i  = 2;
//         // newArray.push(arr.slice(0,i).concat(arr.slice(i+1))); // [A C]
        
//     }
//     return newArray;
    
// }

// console.log(getAllCombintions(array));


// const arr = ['A', 'B', 'C'];
// const str = 'ABC'
// const newArray = [];
// for(let i = 0; i < 1; i++){
//     // i = 0;
//     console.log(arr.slice(0,i)); // -> []
//     console.log(str.slice(0,i)); // -> ___
// }


// const arr = ['A', 'B', 'C'];
// const str = 'ABC'
// const newArray = [];
// for(let i = 0; i < 1; i++){
//     newArray.push(arr.slice(0,i)); // -> []
//     newArray.push(str.slice(0,i)); // -> [ ' ' ];
// }
// console.log(newArray); // -> [ [], '' ]; -> [ [], '' ];


// const arr = ['A', 'B', 'C'];
// const str = 'ABC'
// const newArray = [];
// for(let i = 0; i < arr.length;  i++){
//     newArray.push(arr.slice(0, i)); 
// }
// console.log(newArray); // [ [], [ 'A' ], [ 'A', 'B' ] ]

// const arr = ['A', 'B', 'C'];
// const str = 'ABC'
// const newArray = [];

// for(let i = 0; i < arr.length; i++){
//     newArray.push(arr.slice(0,i));
//     newArray.push(arr.slice(i+1));
// }
// console.log(newArray);  // [ [], [ 'B', 'C' ], [ 'A' ], [ 'C' ], [ 'A', 'B' ], [] ]


// const arr = ['A', 'B', 'C'];
// const str = 'ABC'
// const newArray = [];


// for(let i = 0; i < 1; i++){
//     newArray.push(arr.slice(0,i).concat(arr.slice(i+1)));
// }
// console.log(newArray); 


// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const newArray = [];
// for(let i = 0; i  < arr1.length; i++){
//     newArray.push(arr1.concat(arr2[i]));
   
// }
// console.log(newArray); // [ [ 1, 2, 3, 4 ], [ 1, 2, 3, 5 ], [ 1, 2, 3, 6 ] ]

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const newArray = [];

// for(let i = 0; i < arr1.length; i++){
//     newArray.push(arr1.concat(arr2));
// }
// console.log(newArray);


//Анализ при каждом изменении меняется элементы и содержимое массива если это let 
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// let rest = [10,10];
// console.log(rest)
// rest = arr1.slice(0,1).concat(arr2.slice(0,2));
// console.log(rest); // [ 1, 4, 5 ]
// rest = arr1.slice(0,2).concat(arr2.slice(0,3)); 
// console.log(rest); // // [ 1, 2, 4, 5, 6 ]

// let arr = ['A', 'B','C'];

// for(let perm of arr) {
//     console.log(perm);
// }
// for(let i =0; i <  arr.length; i++) {
//     console.log(arr[i]);
// }

// const printKeyAndValueObj = (arr) => {
//     if(arr.length <= 1) {
//         return [arr];
//     }
//     for(let i = 0; i < 1; i++){
//         const rest = arr.slice(0,i).concat(arr.slice(i+1));
       
//     }
// }
// printKeyAndValueObj(arr)

// const arra = ['A', 'B', 'C'];
// const printKeyAndValueObj = (arr) => {
//     if(arr.length <= 1) {
//         return [arr]
//     };
//     for(let i = 0; i < arr.length; i++){
//        const rest = arr.slice(0,i).concat(arr.slice(i+1));
//         console.log(rest);
//     }
// }
// printKeyAndValueObj(arra)

// // i = 0 [ 'B', 'C' ]
// // i = 1 [ 'A', 'C' ]
// // i = 2 [ 'A', 'B' ]


// [
//     [ 'A', 'B', 'C' ],
//     [ 'A', 'C', 'B' ],
//     [ 'B', 'A', 'C' ],
//     [ 'B', 'C', 'A' ],
//     [ 'C', 'A', 'B' ],
//     [ 'C', 'B', 'A' ]
// ]


//  const arra = ['A', 'B'];

// const getAllCombintions = (arr) => {
//     if(arr.length <= 1) {
//         return [arr];
//     }

//     let result = [];

//     for(let i = 0; i < arr.length; i++){
//         // i = 0;
//         const rest = arr.slice(0,i).concat(arr.slice(i+1)); // -> ['B', 'C' ]
//         for(let perm of getAllCombintions(rest)){
//             result.push([arr[i]].concat(perm))
//         }
//     }
//     return result
// }
// console.log(getAllCombintions(arra));
// [ [ 'A', 'B' ], [ 'B', 'A' ] ]

// const arra = ['A', 'B', 'C'];
// const printKeyAndValueObj = (arr) => {
//     let result = [];
//     if(arr.length <= 1){
//         return [arr]
//     }
//     for(let i = 0; i < arr.length;  i++){
//         const rest = arr.slice(0,i).concat(arr.slice(i+1));
//         for(let perm of  printKeyAndValueObj(rest)) {
//             result.push([arr[i]].concat(perm))
//         }
//     }
//     return result
// }
// console.log(printKeyAndValueObj(arra));



// function permutations(arr) {
//     let result = [];
//         if(arr.length <= 1){
//         return arr;
//     }
//     for(let i = 0; i < arr.length; i++){
//         const rest = arr.slice(0,i).concat(arr.slice(i+1));

//         for(let elem of permutations(String(rest))){
//             result.push(arr[i].concat(elem));
//         }
//     }
//     return result 
// }
// console.log(permutations(['A', 'B', 'C']));

  


























