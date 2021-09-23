const func = require('../exercicios/exercicio4');

jest.mock('../exercicios/exercicio4');

test('upperCase to lowerCase', () => {

  func.upperCase.mockImplementation((str) => str.toLowerCase());

  func.upperCase('hello');

  expect(func.upperCase).toHaveBeenCalled();
  expect(func.upperCase).toHaveBeenCalledTimes(1);
  expect(func.upperCase).toHaveBeenCalledWith('hello');
  expect(func.upperCase('HELLO')).toBe('hello');
  expect(func.upperCase).toHaveBeenCalledTimes(2);
});

test('firstLetter to lastLetter', () => {

  func.firstLetter.mockImplementation((str) => str.charAt(str.length-1));

  func.firstLetter('hello');

  expect(func.firstLetter).toHaveBeenCalled();
  expect(func.firstLetter).toHaveBeenCalledTimes(1);
  expect(func.firstLetter).toHaveBeenCalledWith('hello');
  expect(func.firstLetter('hello')).toBe('o');
  expect(func.firstLetter).toHaveBeenCalledTimes(2);
});

test('concatTwoStr to concatThreeStr', () => {

  func.concatStr.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

  func.concatStr('hello', 'world', '!');

  expect(func.concatStr).toHaveBeenCalled();
  expect(func.concatStr).toHaveBeenCalledTimes(1);
  expect(func.concatStr).toHaveBeenCalledWith('hello', 'world', '!');
  expect(func.concatStr('Hello', 'World', '!')).toBe('HelloWorld!');
  expect(func.concatStr).toHaveBeenCalledTimes(2);
});

/*4 - Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.*/