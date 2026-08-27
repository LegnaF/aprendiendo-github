function calcular(operacion) {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    let resultado;

    if (operacion === "+") {
        resultado = numero1 + numero2;
    }

    if (operacion === "-") {
        resultado = numero1 - numero2;
    }

    if (operacion === "*") {
        resultado = numero1 * numero2;
    }

    if (operacion === "/") {
        if (numero2 === 0) {
            resultado = "No se puede dividir entre cero";
        } else {
            resultado = numero1 / numero2;
        }
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}