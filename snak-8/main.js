/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

let userNumber = String(prompt('Inserisci un numero di 4 cifre'));
let x;
let somma = 0;
if (parseInt(userNumber.length) !== 4 || isNaN(userNumber)) {
    alert('Il numero non corrisponde')

} else {

    for (let i = 0; i < userNumber.length; i++) {
        //console.log(userNumber.substring(i, i + 1));

        x = parseInt(userNumber.substring(i, i + 1));
        somma += x;

    }
    console.log(somma);
}