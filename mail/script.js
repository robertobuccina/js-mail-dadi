

 
//creo una lista di email registrate
var listaEmailValide = ["geom.robertobc@gmail.com", "pincopallo@libero.it"];
console.log(listaEmailValide);

//chiedo di inserire l'email attraverso un prompt var ec...
var emailInserita = prompt("scrivi qui la tua email");

//creo una variabile var utente registrato e dichiaro che:
// utente registrato è uguale a ciò che è contenuto all'interno della lista array (email valide)
var utenteRegistrato = (listaEmailValide.includes(emailInserita));

if (utenteRegistrato === true) {
    console.log("utente loggato")
} else {
    alert("utente sconosciuto e/o dati incompleti")
}



/*var listaEmailValide = ["geom.robertobc@gmail.com", "pincopallo@libero.it"];
console.log(listaEmailValide);

var emailInserita = prompt("scrivi qui la tua email");

for (var i = 0; i < listaEmailValide.length; i++){
    var inserisciEmail = listaEmailValide[i];

    if (inserisciEmail === emailInserita){
        console.log("bene")
    } else {
        console.log("male")
    }
}