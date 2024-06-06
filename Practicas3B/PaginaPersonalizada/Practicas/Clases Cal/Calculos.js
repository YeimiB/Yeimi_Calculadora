function calcular(operacion) {
    // Get the values from the input fields
    var val1 = parseFloat(document.getElementById("v1").value);
    var val2 = parseFloat(document.getElementById("v2").value);
    var res = document.getElementById("resultado");

    // Check if the inputs are valid numbers
    if (isNaN(val1) || isNaN(val2)) {
        res.innerHTML = "Datos nulos o incorrectos";
        if (isNaN(val1)) {
            document.getElementById("v1").focus();
        } else {
            document.getElementById("v2").focus();
        }
        return;
    }

    var resultado;
    switch (operacion) {
        case 'suma':
            resultado = val1 + val2;
            break;
        case 'resta':
            resultado = val1 - val2;
            break;
        case 'multiplicacion':
            resultado = val1 * val2;
            break;
        case 'division':
            if (val2 === 0) {
                res.innerHTML = "No se puede dividir por cero";
                return;
            }
            resultado = val1 / val2;
            break;
        default:
            res.innerHTML = "Operación no válida";
            return;
    }

    res.innerHTML = resultado;
}