let chessPiece = 'BISHOP';
let lowerChessPiece = chessPiece.toLowerCase()

if (lowerChessPiece == 'bishop') {
  console.log('diagonals');
}

else {
  console.log('Error: Invalid piece');
}



//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.