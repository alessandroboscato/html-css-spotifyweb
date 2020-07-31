alert("Questo account ha effettuato l'upgrade alla versione premium");

// document.getElementById("upgrade").innerHTML = "UPGRADE EFFETTUATO";

// function upgradeEffettuata() {
// document.getElementById("upgrade").innerHTML = "UPGRADE EFFETTUATO";
// } NON FUNZIONA

document.getElementById("signIn").onclick = function() {upgradeDone()};

function upgradeDone() {
  document.getElementById("signIn").innerHTML = "UPGRADE EFFETTUATO";
