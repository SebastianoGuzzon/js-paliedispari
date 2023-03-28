//Scelta utente: pari o dispari

var paridispari=prompt("Scegli pari o dispari:");
var paridisparim=paridispari.toUpperCase();

//Validazione pari o dispari

if (paridisparim != "PARI" && paridisparim != "DISPARI" ) {
  alert("Dato non valido");
}
//Scelta numero utente;

var sceltanumero=prompt("Scegli un numero tra 1 e 6");
var numero=parseInt(sceltanumero);

// Validazione numero inserito

if (numero>6 || numero<1) {
  alert("Numero inserito non valido");
} 

// Generazione numero computer

var numeropc=Math.floor(Math.random()*6)+1;

document.writeln("Hai scelto: " + paridispari);
document.writeln("Hai scelto il numero: " + numero);
document.writeln("Il numero del pc è: " + numeropc);

//Somma numeri per decretare se è pari o dispari

var somma=numero+numeropc;
console.log(somma);

//Calcolo modulo

var modulo=somma%2;
console.log(modulo);

// Controllo se il numero è pari o dispari e 

if (modulo==0 && paridisparim==="PARI" || modulo!=0 && paridisparim==="DISPARI") {
  document.writeln("Complimenti, Hai vinto la partita!");
}
else {
  document.writeln("Peccato, hai perso la partita");
}