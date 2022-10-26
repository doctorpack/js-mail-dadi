// genero causalmente un numero per il giocatore computer e giocatore umano
let userNumber = Math.floor(Math.random() * 6);
let computerNumber = Math.floor(Math.random() * 6);
let ouput = "";
// controllo se ha vinto il computer o l'utente
if(userNumber > computerNumber){
    output = `il giocatore ha vinto!`;
}else if(computerNumber > userNumber){
    output = `il computer ha vinto!`;
}else{
    output = `pareggio!`
}
// output
console.log(output);
alert(output);