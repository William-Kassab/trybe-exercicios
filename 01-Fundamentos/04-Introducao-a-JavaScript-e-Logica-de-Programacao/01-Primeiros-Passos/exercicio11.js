let salarioBruto = 3000;
let salarioINSS = 0;
let salarioLiquido = 0;


if (salarioBruto <= 1556.94) {
  salarioINSS = salarioBruto - salarioBruto * 0.08;
  if (salarioINSS <= 1903.98) {
    salarioLiquido = salarioINSS;
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.075) - 142.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.15) - 354.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.225) - 636.13);
    console.log(salarioLiquido);
  }
  else {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.275) - 869.36);
    console.log(salarioLiquido);
  }
}

else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioINSS = salarioBruto - salarioBruto * 0.09;
  if (salarioINSS <= 1903.98) {
    salarioLiquido = salarioINSS;
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.075) - 142.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.15) - 354.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.225) - 636.13);
    console.log(salarioLiquido);
  }
  else {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.275) - 869.36);
    console.log(salarioLiquido);
  }
}

else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioINSS = salarioBruto - salarioBruto * 0.11;
  if (salarioINSS <= 1903.98) {
    salarioLiquido = salarioINSS;
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.075) - 142.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.15) - 354.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.225) - 636.13);
    console.log(salarioLiquido);
  }
  else {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.275) - 869.36);
    console.log(salarioLiquido);
  } 
}

else {
  salarioINSS = salarioBruto - 570.88;
  if (salarioINSS <= 1903.98) {
    salarioLiquido = salarioINSS;
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 1903.99 && salarioINSS <= 2826.65) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.075) - 142.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 2826.66 && salarioINSS <= 3751.05) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.15) - 354.80);
    console.log(salarioLiquido);
  }
  else if (salarioINSS >= 3751.06 && salarioINSS <= 4664.68) {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.225) - 636.13);
    console.log(salarioLiquido);
  }
  else {
    salarioLiquido = salarioINSS - ((salarioINSS * 0.275) - 869.36);
    console.log(salarioLiquido);
  }
}




//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
//A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

