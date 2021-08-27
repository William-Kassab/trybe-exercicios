const fatorial = number => {
  let fat = number;
  let fatDec = number - 1;
  if (number === 0) {
    console.log(`O fatorial de ${number} é 1`);
  }
  for (let i = fatDec; i > 0; i -= 1) {
    fat *= i;
  }
  console.log(`O fatorial de ${number} é ${fat}.`);
}

fatorial(5);

/*Exercício 3
- Crie uma função que receba um número e retorne seu fatorial.*/