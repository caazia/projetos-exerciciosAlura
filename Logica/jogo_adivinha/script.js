function pularLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pularLinha();
}
var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;
while(tentativas <= 3) {
var chute = parseInt(prompt("Digite seu chute!"));

if(chute == numeroPensado) {
    mostra("Uau! Você acertou!!");
    break;

} else {

    mostra("Você errou!");
}
tentativas++;
}
mostra("Fim!")