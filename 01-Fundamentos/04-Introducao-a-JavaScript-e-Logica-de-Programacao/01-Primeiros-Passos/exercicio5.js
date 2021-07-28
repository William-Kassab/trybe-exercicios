let angulo1 = 30;
let angulo2 = 60;
let angulo3 = 90;

if (angulo1 + angulo2 + angulo3 == 180) {
  console.log(true);
}

else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Ângulo negativo inválido")
}

else {
  console.log(false);
}




//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Um ângulo será considerado inválido se não tiver um valor positivo.
