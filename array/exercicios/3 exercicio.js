const calcularSalario = function (qtdHorasTrabalhada , vlrHora ) {
    return qtdHorasTrabalhada*vlrHora
}

const mensagem = mensagem => 'Salário é igual á $'

console.log(mensagem().concat(calcularSalario(160, 10)));