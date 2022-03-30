/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

let userNumber;
let powNumber;

for (let i = 0; i < 5; i++) {
    userNumber = parseInt(prompt('Inserisci un numero'));

    powNumber = Math.pow(userNumber, 3);
    console.log(`n° ${userNumber} - il cubo: ${powNumber}`);
}