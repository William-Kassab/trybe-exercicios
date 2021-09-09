const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

/*1 - Dada uma matriz, transforme em um array.*/

function flatten() {
  const reduceArr = arrays.reduce((arr, element) => arr.concat(element));
  return reduceArr;
}
//console.log(flatten());

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);