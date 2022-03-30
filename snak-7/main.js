/*
Stampa le potenze di 2 fino a 1000.
*/

let number = 2;
let pow100;

for (let i = 0; i <= 1000; i++) {

    pow100 = parseInt(Math.pow(number, i));
    if (i < 70) {
        console.log(`${number} elevato a ${i} = ${pow100}`);
    } else {
        console.log(`${number} elevato a ${i} = ${pow100.toExponential()}`);
    }
}