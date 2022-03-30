/*
Stampa le potenze di 2 fino a 1000.
*/

let number = 2;
let pow100;
let greaterThan1000 = true;

for (let i = 0; i <= 20; i++) {

    pow100 = parseInt(Math.pow(number, i));
    if (pow100 < 1000) {
        console.log(`${number} elevato a ${i} = ${pow100}`);
    } else {
        greaterThan1000 = false;

    }
}