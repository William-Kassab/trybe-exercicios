const randomDiv = require('../exercicios/exercicio2');

jest.mock('../exercicios/exercicio2');

test('#randomNum -> dividir', () => {

  randomDiv.mockImplementation((a, b) => a / b);

  randomDiv(6, 2);

  expect(randomDiv).toHaveBeenCalled();
  expect(randomDiv).toHaveBeenCalledTimes(1);
  expect(randomDiv).toHaveBeenCalledWith(6, 2);
  expect(randomDiv(6, 2)).toBe(3);
  expect(randomDiv).toHaveBeenCalledTimes(2);
});

/*2 - Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.*/