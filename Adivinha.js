const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let tentativa = 0;

while (true) {
    let palpite = parseInt(prompt("Adivinhe o número entre 1 e 20:"));
    tentativa++;
    
    if (isNaN(palpite) || palpite < 1 || palpite > 20) {
        alert("Por favor, insira um número válido entre 1 e 20.");
        continue;
    }
    
    if (palpite < numeroSecreto) {
        alert("Tente um número maior!");
    } else if (palpite > numeroSecreto) {
        alert("Tente um número menor!");
    } else {
        alert(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativa} tentativas.`);
        break;
    }
}