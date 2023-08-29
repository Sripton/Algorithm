// В этом ката ваша задача состоит в том, чтобы создать все перестановки 
// непустой входной строки и удалить дубликаты, если они есть.
// Создайте как можно больше «перетасовок»!

let s = 'AB';
function swap (arr, index1, index2)  {
    let temp  =  arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function permutationsHelper(stringArray, begin, end) {
    let str = ''
    if(begin === end){
    str += stringArray;
    }else {
        for(let i = begin; i < end+1; i++){
            swap(stringArray, begin, i);
            permutationsHelper(stringArray, begin+1, end);
            swap(stringArray, begin,i);
        }
    }
    return str
}
function permutations(string) {
    const stringArray = string.split('');
     permutationsHelper(stringArray, 0, stringArray.length-1);
 
}
console.log(permutations(s));