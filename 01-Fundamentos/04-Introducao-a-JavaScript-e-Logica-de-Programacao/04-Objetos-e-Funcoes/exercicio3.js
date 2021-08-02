let array = [2, 4, 6, 7, 10, 0, -3];
let menor = Math.min.apply(Math, array);

function menorValor() {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array.indexOf(menor));
    break;
  }
}

menorValor(array);




//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.