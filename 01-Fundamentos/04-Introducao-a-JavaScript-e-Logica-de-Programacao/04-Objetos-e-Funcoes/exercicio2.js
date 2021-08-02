let array = [2, 3, 6, 7, 10, 1];
let maior = Math.max.apply(Math, array);

function maiorValor() {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array.indexOf(maior));
    break;
  }
}

maiorValor(array);




//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.