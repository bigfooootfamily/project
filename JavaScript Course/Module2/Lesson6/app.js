/*
                            Типы данных
                            Простые Типы Данных
1)
Числа - 1, 2, 3 ...
2)
Строки - 'name'
3)
Логический тип (булевой) - boolean - True or False
4)
null - не существует
5)
undefined - существует, но не имеет значения
6)
Symbol
7)
BigInt - большие числа (больше 2 в 53 степени)

                        Комплексные типы данных
Массивы (arrays) []
Функции function название () {}
Объект Даты
Регулярные выражения
Ошибки
 */

//1 Числа
let number = 5;

console.log(4 / 0); // infinity

// 2 Строки

const person = 'Weslley';
console.log(person);

//3 boolean

const bool = true; // or false

//4 Null

// console.log(something); // Null так как переменной не существует!

//5 undefined

let und;
console.log(und); // undefined

// объекты

const obj = {
  name: 'Wes',
  age: 30,
  isMarried: true,
};

// console.log(obj.age);
console.log(obj.age);

// МАССИВЫ

let arr = [1, 2, 3, 'Dust'];

console.log(arr[3]); // номера начанаются с 0 а не с 1
