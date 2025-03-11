function somaSerie() {
    const termos = parseInt(prompt("Digite a quantidade de termos:"));
    
    if (isNaN(termos) || termos <= 0) {
        console.log("Por favor, digite um número válido maior que zero.");
        return;
    }
    
    let numero = 0;
    let soma = 0;
    let serie = "";
    
    for (let i = 1; i <= termos; i++) {
        numero = numero * 10 + 1;
        soma += numero;
        serie += (i === 1) ? `${numero}` : ` + ${numero}`;
    }
    
    console.log(serie);
    console.log(`A soma é: ${soma}`);
}

somaSerie();