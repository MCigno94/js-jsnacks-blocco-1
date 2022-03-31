/*
Stampa le potenze di 2 fino a 1000.
*/

let number = 2;

for (let i = 0; Math.pow(number, i) < 1000; i++) {

    console.log(Math.pow(number, i));

}