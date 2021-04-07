'use strict';

// Условия
//
//
// if (9 >= 12){
//     console.log('True');
// }else{
//     console.log('err');
// }
//
//
//
//
// if(num < 49) {
//     console.log('err');
// }else if(num >100) {
//     console.log('too much');
// }else{
//     console.log('everything ok');
// }
//
// (num === 50) ? console.log('ok') : console.log('err'); // Тернарный оператор

const num = 50;
switch (num) {
    case 49:
        console.log('not right');
        break;
    case 100:
        console.log('not right');
        break;
    case 50:
        console.log('yeah');
        break;
    default:
        console.log('not now');
        break;
}
