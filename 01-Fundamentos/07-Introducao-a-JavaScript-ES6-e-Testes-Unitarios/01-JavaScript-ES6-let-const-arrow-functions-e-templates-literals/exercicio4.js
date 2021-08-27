const biggestWord = str => {
  let arrayStr = str.split(' ');
  let big = 0;
  let word = null;
  arrayStr.forEach(string => {
    if (big < string.length) {
      big = string.length;
      word = string;
    }
  });
  console.log(`A maior palavra da frase: "${str}" é "${word}"`);
}

biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu');