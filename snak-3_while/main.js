/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
let numberUser;
let somma = 0;
let i = 1;

while (i <= 10) {
    numberUser = Number(prompt('Inserisci un numero'));
    somma += numberUser;
    i++;
}

console.log(`La somma dei 10 numeri inseriti è: ${somma}`);