  
const promise = new Promise((resolve, reject) => {
  const arr = [];
  const randomNum = Math.floor(Math.random() * 50) + 1;
  for (let i = 0; i < 10; i += 1) {
    arr.push(randomNum * randomNum);
  }
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum < 8000) {
    resolve(sum);
  }
  reject();
})
.then((sum => [2, 3, 5, 10].map((num) => sum / num )))
.then((array => console.log((Math.floor(array.reduce((acc, cur) => acc + cur, 0))))))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))



/*2 - Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
- Primeiramente, instancie uma Promise
- Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
- Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
- Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

3 - Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

4 - Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

5 - Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.*/