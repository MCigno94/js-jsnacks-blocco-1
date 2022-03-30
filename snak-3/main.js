/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let numberUser;
let somma = 0;
for (let i = 1; i <= 10; i++) {
    numberUser = Number(prompt('Inserisci un numero'));
    console.log(`n°${i}: ${numberUser}`);
    somma += numberUser;
}

console.log(`La somma dei 10 numeri inseriti è: ${somma}`);