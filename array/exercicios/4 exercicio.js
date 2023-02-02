function getMesNome(mesNumero) {
    const mesNomes = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
    return mesNomes[mesNumero - 1];
  }

  console.log(getMesNome(2));