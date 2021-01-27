/* Задание 8

    Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
    a+2(x-b)=16;
    b(x+15)=a+6x;
    x+2x+ax+bx=23780

*/

let AUravnenie = 8,
    BUravnenie = 3;

let XUravnenie1 = (16 - AUravnenie) / 2 + BUravnenie;

console.log(XUravnenie1);

let XUravnenie2 = (AUravnenie - 15 * BUravnenie) / (BUravnenie - 6);

console.log(XUravnenie2);

let XUravnenie3 = 23780 / (1 + 2 + AUravnenie + BUravnenie);

console.log(XUravnenie3);