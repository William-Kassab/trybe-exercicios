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

