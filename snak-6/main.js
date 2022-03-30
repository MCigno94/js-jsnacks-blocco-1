/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

let listNumber = ['2', '4', '5', '9', '3', '7', '11'];
let userNumber = parseInt(prompt(`Inserisci un numero da 1 a ${listNumber.length}`));
let powNumber;
if (userNumber < 1 || userNumber > listNumber.length) {
    alert('Il numero non esiste a sistema');
} else {

    for (let i = 0; i < userNumber; i++) {

        powNumber = Math.pow(listNumber[i], 3);
        console.log(`Il cubo di "${listNumber[i]}" è: ${powNumber}`);
    }
}