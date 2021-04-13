

var utenteUmano = Math.floor(Math.random() * 5) + 1;
console.log(utenteUmano)

var utenteArtificiale = Math.floor(Math.random() * 5) + 1;
console.log(utenteArtificiale)

var utenteUmanoVincente = (utenteUmano > utenteArtificiale);
console.log(utenteUmanoVincente)

var utenteArtificialeVincente = (utenteUmano < utenteArtificiale);
console.log(utenteArtificialeVincente)

var tiraDadi = alert("giochiamo! Tira i dadi")

if (utenteUmanoVincente === true) {
    console.log("umano vince");
    document.getElementById("winner").style.display = "block";

} else if (utenteArtificialeVincente === true) {
    console.log("macchina vince");
    document.getElementById("loser").style.display = "block";


} else {
    console.log("pareggio")
    document.getElementById("draw").innerHTML = "Pareggio";
}

