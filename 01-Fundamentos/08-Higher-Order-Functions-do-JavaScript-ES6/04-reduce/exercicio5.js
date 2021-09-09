const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

/*5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.*/

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((ac, curr) => {
      if (curr === 'a' || curr === 'A') {
        return ac + 1;
      } 
      return ac;
    }, 0), 0);
}
//console.log(containsA());

assert.deepStrictEqual(containsA(), 20);