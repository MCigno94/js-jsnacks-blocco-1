/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
let listNumber = [];
let userNumber;

for (let i = 0; i < 6; i++) {

    userNumber = parseInt(prompt('Inserisci un numero'));
    if (userNumber % 2 == 1) {
        listNumber.push(userNumber);
    }
}

console.log(listNumber);