document.getElementById("botao_azul").addEventListener("click", function() {
    const peso = parseFloat(document.getElementById("input_peso").value);
    const altura = parseFloat(document.getElementById("input_altura").value);
    
    if (peso > 0 && altura > 0) {
        let imc = (peso / (altura * altura)).toFixed(2);
        imc = imc.replace(",", ".");
        document.getElementById("resultado_imc").innerText = `Resultado: ${imc}`;
        document.getElementById("resultado_imc").style.fontSize = "14px";
        sessionStorage.setItem("imcValue", imc);
        document.getElementById("botao_voltar").style.display = "block";
    } else {
        document.getElementById("resultado_imc").innerText = "Insira valores válidos.";
        document.getElementById("resultado_imc").style.fontSize = "14px";
    }
});

document.getElementById("botao_voltar").addEventListener("click", function() {
    window.location.href = "/";
});

document.getElementById("botao_vermelho").addEventListener("click", function() {
    document.getElementById("input_peso").value = "";
    document.getElementById("input_altura").value = "";
    document.getElementById("resultado_imc").innerText = "Resultado: ";
});


