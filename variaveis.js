function somar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    
    document.getElementById("resultado").innerText = "O resultado da soma é: " + resultado;
}
