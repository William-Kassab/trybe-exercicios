const randomDiv = require('../exercicios/exercicio3');

jest.mock('../exercicios/exercicio3');

test('#randomNum -> dividir', () => {

  randomDiv.mockImplementation((a, b, c) => a * b * c);

  randomDiv(3, 3, 3);

  expect(randomDiv).toHaveBeenCalled();
  expect(randomDiv).toHaveBeenCalledTimes(1);
  expect(randomDiv).toHaveBeenCalledWith(3, 3, 3);
  expect(randomDiv(3, 3, 3)).toBe(27);
  expect(randomDiv).toHaveBeenCalledTimes(2);

  randomDiv.mockReset(); //Reset

  randomDiv.mockImplementation((a) => a * 2);

  randomDiv(5);

  expect(randomDiv).toHaveBeenCalled();
  expect(randomDiv).toHaveBeenCalledTimes(1);
  expect(randomDiv).toHaveBeenCalledWith(5);
  expect(randomDiv(5)).toBe(10);
  expect(randomDiv).toHaveBeenCalledTimes(2);
});

/*3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.*/