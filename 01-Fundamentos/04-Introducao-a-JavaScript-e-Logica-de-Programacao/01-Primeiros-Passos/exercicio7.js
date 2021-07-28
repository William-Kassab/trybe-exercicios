let porcentagem = 105;

if (porcentagem >= 90 && porcentagem <= 100) {
  console.log('A');
}

else if (porcentagem >= 80 && porcentagem < 90) {
  console.log('B');
}

else if (porcentagem >= 70 && porcentagem < 80) {
  console.log('C');
}

else if (porcentagem >= 60 && porcentagem < 70) {
  console.log('D');
}

else if (porcentagem >= 50 && porcentagem < 60) {
  console.log('E');
}

else if (porcentagem < 50 && porcentagem >= 0) {
  console.log('F');
}

else {
  console.log('Error');
}



//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.