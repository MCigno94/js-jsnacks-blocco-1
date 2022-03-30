/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let user1 = String(prompt('inserisci un parola'));
let user2 = String(prompt('inserisci un parola'));

if (user1.length > user2.length) {
    console.log(`La prima parola è più lunga: "${user1}" ==> ${user1.length} caratteri`)
} else if (user2.length > user1.length) {
    console.log(`La seconda parola è più lunga: "${user2}" ==> ${user2.length} caratteri`)
} else {
    console.log(`Le parole sono uguali: "${user1}" ==> ${user1.length} - ==> "${user2}" ${user2.length} `);
}