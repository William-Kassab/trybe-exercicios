let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let biggerNum = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > biggerNum) {
    biggerNum = numbers[index];
  }
}
console.log(biggerNum);

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;