let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let x = 0; x < numbers.length; x += 1) {
  soma += numbers[x];
}

let media = soma / numbers.length;

console.log(media);



//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array