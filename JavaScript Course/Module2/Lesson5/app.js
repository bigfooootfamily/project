//ПЕРЕМЕННЫЕ

/*
VAR - старый вариант, от которого стоит отойти
let - переменная которая пришла к нам в ES6
const - переменная которая пришла к нам в ES6

Порядок написания переменных:
let (Имя) = значение переменной;
let num = 5;

Отличие между let и const заключается в том, что let мы можем переназначать, а const нельзя!
 */

let num = 5;

const num2 = 7;
// num2 = 88; ошибка!!!

/*
отличие var от let в том что VAR мы можем использовать до ее объявленияб а let только после!
 */
console.log(num);

console.log(num2);

/* Строгий Режим

'use strict'
обязательно прописывать в начале скрипта!!
 */