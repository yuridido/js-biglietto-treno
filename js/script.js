// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// VARIABILI
var km = prompt("quanti chilometri devi percorrere?");
var eta = parseInt(prompt("età del passeggero?"));
var sconto = 0;
var prezzo
// VARIABILI


if (eta < 18) {
    sconto = 20;
} else if (eta >= 65) {
    sconto = 40
}

prezzo = ((0.21 * km) / 100) * (100 - sconto);
document.getElementById('prezzo-biglietto').innerHTML = prezzo; 
