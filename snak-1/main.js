/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let utente1 = parseInt(prompt('Utente 1, inserisci un numero'));
if (isNaN(utente1)) {
    alert('inserisci un numero')
}
let utente2 = parseInt(prompt('Utente 2, inserisci un numero'));
if (isNaN(utente2)) {
    alert('inserisci un numero')
}

if (utente1 > utente2) {
    console.log(`Il numero più alto è dell'utente n°1: ${utente1}`);
} else if (utente2 > utente1) {
    console.log(`Il numero più alto è dell'utente n°2: ${utente2}`);
} else {
    console.log(`I numeri sono uguali: Utente n°1 ==> ${utente1} <== | Utente n°2 ==> ${utente2} <==`);
}