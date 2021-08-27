const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(oddsAndEvens);


/*Exercício 2
- Faça uma função que retorne o array oddsAndEvens em ordem crescente.
- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".*/


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram na ordem crescente!`);