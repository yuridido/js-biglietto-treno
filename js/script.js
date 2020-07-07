// VARIABILI
var km = parseInt(prompt("quanti chilometri devi percorrere?"));
var eta = parseInt(prompt("età del passeggero?"));
var sconto = 0;
var prezzoBase = 0.21 * km
var prezzo
// VARIABILI


if (eta < 18) {
    sconto = 20;
} else if (eta >= 65) {
    sconto = 40
}



prezzo = (prezzoBase / 100) * (100 - sconto);
document.getElementById('prezzo-biglietto').innerHTML = prezzo;
