//Calcola la somma e la media dei primi 10 numeri.

let listNumber = [];
for (let i = 0; i < 20; i++) {
    listNumber.push(Math.ceil(Math.random() * 100));
}
console.log(listNumber);

let somma = 0;
let media = 0;
let maximumNumbers = 0;
let number;

for (let x = 0; x < 10; x++) {
    console.log(`n° scelto alla posizione "${x}": ${listNumber[x]}`);
    number = listNumber[x];
    somma += number;
    maximumNumbers = x + 1;
}
media = somma / maximumNumbers;

console.log(`Totale numeri selezionati: ${maximumNumbers}`);
console.log(`La somma dei numeri è: ${somma}`);
console.log(`La media dei numeri è: ${media}`);