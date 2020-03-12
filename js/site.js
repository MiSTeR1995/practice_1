/* let arr  = [];
let minArrayValue = -100;
let maxArrayValue = 100;

for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * (maxArrayValue - minArrayValue + 1) + minArrayValue);
}

console.log('Первоначальный массив: [' + arr + "]");

let indMin = 0;
let indMax = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < arr[indMin]) {
        indMin = i;
    }
    if (arr[i] > arr[indMax]) {
        indMax = i;
    }
}
console.log(arr[indMin], arr[indMax]);

let temp = arr[indMin];
arr[indMin] = arr[indMax];
arr[indMax] = temp;

console.log("Измененный массив: [" + arr + "]")
*/

// Объекты
// Object.assign({}, obj1) - копирование свойств объекта
