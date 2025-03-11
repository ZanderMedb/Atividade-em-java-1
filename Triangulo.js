function desenharTriangulo() {
    const linhas = parseInt(prompt("Digite o número de linhas para o triângulo:"));
    
    if (isNaN(linhas) || linhas <= 0) {
        console.log("Por favor, digite um número válido maior que zero.");
        return;
    }
    
    let resultado = "";
    for (let i = 1; i <= linhas; i++) {
        resultado += "*".repeat(i) + "\n";
    }
    console.log(resultado);
}

desenharTriangulo();