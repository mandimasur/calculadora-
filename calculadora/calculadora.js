function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero";
    }

    return a / b;
}

function calcular(a, operacao, b) {

    if (operacao === "+") {
        return somar(a, b);
    }

    if (operacao === "-") {
        return subtrair(a, b);
    }

    if (operacao === "*") {
        return multiplicar(a, b);
    }

    if (operacao === "/") {
        return dividir(a, b);
    }

    return "Operação inválida";
}

console.log(calcular(10, "+", 5));


