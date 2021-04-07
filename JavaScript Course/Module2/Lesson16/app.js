/*
Функции и стрелочные функции
 */

'use strict';
let num = 20;

function showFirstMessage(arg) {
    console.log(arg);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello World');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    num = 50;
    return num;
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function () {
    console.log('Hello');
};

logger();

// СТРЕЛОЧНАЯ ФУНКЦИЯ

const calc2 = (a, b) => a + b;
