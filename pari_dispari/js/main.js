const primoNumero = parseInt(prompt('Inserisci il primo numero'));

const primoRisultato = calcolaPariDispari(primoNumero);
console.log(primoRisultato);


alert('Ciao Mondo!');

const secondoNumero = parseInt(prompt('Inserisci il secondo numero'));
console.log(calcolaPariDispari(secondoNumero));




// let numeroDaControllare
function calcolaPariDispari(numeroDaControllare) {

    let risultato = '';

    if (numeroDaControllare % 2 == 0) {
        risultato = 'Il numero è pari';
    } else {
        risultato = 'Il numero è dispari';
    }

    return risultato;

}