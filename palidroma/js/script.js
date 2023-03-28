// // Comando Inserisci parola
// Inserimento parola dall'utente
let parola = prompt("Inserisci parola:");

// Si divide la parola in tante lettere con SPLIT
let divlettere = parola.split("");

// Utilizzando il REVERSE, si analizza la parola partendo dal fondo
let contrario = divlettere.reverse();

// Si riunisce nuovamente le lettere in unica stringa con JOIN
let palindroma = contrario.join("");

// Verifica della parola: Palindroma o no?!
if (parola === palindroma) {
  document.writeln("La parola da te inserita è palindroma: " + parola);
} else {
  document.writeln("La parola da te inserita non è palindroma: " + parola)
}