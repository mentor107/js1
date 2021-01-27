/* Задание 7

    Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
    кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
    содержаться в переменной Pereplata.

*/

let SCredit = 2000000, // общая сумма кредита
    PCredit = 10 / 100 / 12, // ежемесячная процентная ставка
    YCredit = 5 * 12; // кол-во месяцев

let ACredit = SCredit * (PCredit + (PCredit / (Math.pow((1 + PCredit), YCredit) - 1))); // рассчет аннуитетного ежемесячного платежа (размер платежа не меняется)

let Pereplata = YCredit * ACredit - SCredit; // рассчет суммарной переплаты

console.log(Pereplata);