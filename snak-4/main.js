/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
let userName = prompt('Inserisci il tuo nome');
let participantNames = ['Mario', 'Paolo', 'Alessia', 'Chiara'];
let verifyName = false;
let partecipant;

for (let i = 0; i < participantNames.length; i++) {
    //console.log(participantNames[i]);
    partecipant = participantNames[i];

    if (userName == partecipant) {
        verifyName = true;
    };
}

if (verifyName) {
    alert(`Benvenuto ${userName}`);
} else {
    alert('Mi spiace non potrai partecipare');
};