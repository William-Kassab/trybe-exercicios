const func = require('../exercicios/exercicio5');

jest.mock('../exercicios/exercicio5');

test('upperCase to lowerCase', () => {

  func.upperCase.mockImplementation((str) => str.toLowerCase());

  func.upperCase('HELLO');

  expect(func.upperCase).toHaveBeenCalled();
  expect(func.upperCase).toHaveBeenCalledTimes(1);
  expect(func.upperCase).toHaveBeenCalledWith('HELLO');
  expect(func.upperCase('HELLO')).toBe('hello');
  expect(func.upperCase).toHaveBeenCalledTimes(2);

  func.upperCase.mockReset(); //Reset

  func.upperCase.mockImplementation((str) => str.toUpperCase());

  func.upperCase('hello');

  expect(func.upperCase).toHaveBeenCalled();
  expect(func.upperCase).toHaveBeenCalledTimes(1);
  expect(func.upperCase).toHaveBeenCalledWith('hello');
  expect(func.upperCase('hello')).toBe('HELLO');
  expect(func.upperCase).toHaveBeenCalledTimes(2);
});

/*5 - Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.*/