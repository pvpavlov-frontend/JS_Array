"use strict"
// 0 Создать числовой массив и проинициализировать его (*случайными числами).
// Не использовать методы перебора массивов (forEach, filter, map, some, every)

// const randomArr = [];
// for (let i = 0, t = 10; i < t; i++) {
//     randomArr.push(Math.round(Math.random() * t))
// }
// console.log('randomArr :>> ', randomArr);

/******************************************/

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.

// randomArr.pop();
// console.log('randomArr :>> ', randomArr);
// randomArr.unshift(50);
// randomArr.push(50);
// console.log('randomArr :>> ', randomArr);

/******************************************/

// 2 Вывести размер массива.

// console.log('randomArr.length :>> ', randomArr.length);

/******************************************/
// 3 Вывести элементы с четными индексами.

/* наверно здесь нельзя было использовать метод findIndex ? */
// let elementsEvenIndices = [];
// randomArr.findIndex((element, index) => { 
//     index % 2 === 0  ? elementsEvenIndices.push(element) : "";
// })
// console.log('elementsEvenIndices :>> ', elementsEvenIndices);


/******************************************/
// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
// randomArr
// for (let i = 0; i < randomArr.length; i++) {
//     randomArr[i] % 2 === 0 ? console.log(randomArr[i]): "" ;
// }


/******************************************/
// 5 Вывести индексы нулевых элементов (элемент равен нулю).

// randomArr.findIndex((element, index) => { 
//     element === 0  ? console.log(index) : null;
// })

/******************************************/
// 6 Подсчитать количество нулевых элементов.

// let count = 0;
// for( let i = 0; i < randomArr.length; i++) {
//     if(randomArr[i] === 0) count++;
// }
// console.log('количество нулевых элементов равно ' + count)

/******************************************/
// Методы перебора массивов (forEach, filter, map, some, every).
// 7 Получить новый массив из заданного, который будет содержать только ненулевые числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
// const arr1 = [-1, 5, 0, 9, -10];
// const filtered = arr1.filter(function (el) {
//     return el !== null && el !== 0;
// });
// console.log(filtered);

/******************************************/
// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).
// const arr2 = [-1, 5, 0, 9, -10];
// let result = arr2.map(x => x * x);
// console.log(result);

/******************************************/
// 9 Проверить, являются ли все элементы массива четными числами (* или простыми числами).

// const isSquare = arr => arr.length ? arr.every(n => !(Math.sqrt(n) % 1)) : undefined;

// const arr3 = [];
// const arr4 = [4, 6, 9];
// const arr5 = [4, 9, 16];
// console.log(isSquare(arr3)); //undefined
// console.log(isSquare(arr4)); //false
// console.log(isSquare(arr5)); //true

/******************************************/
// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.

// const array6 = [-1, 1, 2, 3, 4, 5];
// const array7 = [ 1, 2, 3, 4, 5];

// const negativeNumber = (element) => element < 0;

// console.log("есть ли в массиве " + array6 +  " хоть один отрицательный элемент =", array6.some(negativeNumber)); //true
// console.log("есть ли в массиве " + array7 +  " хоть один отрицательный элемент =", array7.some( negativeNumber)); //false

/******************************************/
// 11 Вывести элементы массива, возведенные в куб.

// let cubes = array7.map((x) => Math.pow(x, 3) );
// console.log("cubes", cubes);

/******************************************/
// *12 Реализовать для MyArray
// - метод shift или unshift, 
// - один из методов filter/map/some/every

const array7 = [ 1, 2, 3, 4, 5];

function MyArray(){
  this.length = 0;
  for(let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
  this.length = arguments.length;
}

MyArray.prototype.shift = function () {
  var arrLength = this.length;
  var deleteObj = this[0];
  for (var i = 0; i < arrLength; i++) {
    this[i] = this[i + 1];
  }
  this.length -= 1;
  return deleteObj;
};

MyArray.prototype.unshift = function () {
  let argulength = arguments.length;
  let arrLength = this.length;
  for (let i = arrLength; i >= 0; i--) {
    this[i + argulength - 1] = this[i - 1]
  }
  for (let i = 0; i < argulength; i++) {
    this[i] = arguments[i]
  }
  return this.length;
};

MyArray.prototype.maping = function(callback) {
  const arrayToReturn = [];
  for (let i = 0; i < this.length; i++) {
      arrayToReturn.push(callback(this[i], i, this));
  }
  return arrayToReturn;
}

const myArrayProto = new MyArray( "a", 2, "c", 4, "b" );

const roots = myArrayProto.maping((index, item) => console.log(index, item ) );

console.log('myArrayProto :>> ', myArrayProto);
