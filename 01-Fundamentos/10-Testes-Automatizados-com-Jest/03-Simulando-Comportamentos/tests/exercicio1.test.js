const random = require('../exercicios/exercicio1');

test('#randomNum', () => {

  random.randomNum = jest.fn().mockReturnValue(10);

  random.randomNum();
  expect(random.randomNum).toHaveBeenCalled();
  expect(random.randomNum()).toBe(10);
  expect(random.randomNum).toHaveBeenCalledTimes(2);
});

/*1 - Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.*/