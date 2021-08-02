let palavra = 'arara';
let splitStr = palavra.split('');
let reverseArray = splitStr.reverse();
let joinArray = reverseArray.join('');


function palindromo(palavra) {
  if (palavra == joinArray) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

palindromo(palavra);




//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.