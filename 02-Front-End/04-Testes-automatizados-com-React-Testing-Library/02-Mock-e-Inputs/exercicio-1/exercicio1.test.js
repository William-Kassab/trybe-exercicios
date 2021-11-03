const exercicio1 = require("./exercicio1");
jest.mock("./exercicio1");

describe('testes 1', () => {
  it('Verifica se a função retorna 10', () => {
    exercicio1.randomNum = jest.fn().mockReturnValue(10);
    exercicio1.randomNum();
    expect(exercicio1.randomNum()).toBe(10);
  });
  it('Altera função para dividir e verifica se foi chamada 1 vez', () => {
    exercicio1.randomNum = jest.fn().mockImplementation((a, b) => a / b);
    exercicio1.randomNum(4, 2);

    expect(exercicio1.randomNum).toHaveBeenCalled();

    expect(exercicio1.randomNum).toHaveBeenCalledTimes(1);

    expect(exercicio1.randomNum(4, 2)).toBe(2);
  });
  it('Altera a função para receber e multiplicar 3 parâmetros e depois altera de novo com 2 parâmetros', () => {
    exercicio1.randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);

    exercicio1.randomNum(2, 2, 2);

    expect(exercicio1.randomNum).toHaveBeenCalled();
    expect(exercicio1.randomNum).toHaveBeenCalledTimes(1);

    expect(exercicio1.randomNum(2, 2, 2)).toBe(8);

    exercicio1.randomNum.mockReset();

    exercicio1.randomNum = jest.fn().mockImplementation((a, b) => a * b);
    exercicio1.randomNum(2, 2, 2);

    expect(exercicio1.randomNum).toHaveBeenCalled();
    expect(exercicio1.randomNum).toHaveBeenCalledTimes(1);

    expect(exercicio1.randomNum(2, 2)).toBe(4);
  });
});

describe('testes 2', () => {
  it('upperCase to lowerCase', () => {

    exercicio1.upperCase.mockImplementation((str) => str.toLowerCase());
  
    exercicio1.upperCase('hello');
  
    expect(exercicio1.upperCase).toHaveBeenCalled();
    expect(exercicio1.upperCase).toHaveBeenCalledTimes(1);
    expect(exercicio1.upperCase).toHaveBeenCalledWith('hello');
    expect(exercicio1.upperCase('HELLO')).toBe('hello');
    expect(exercicio1.upperCase).toHaveBeenCalledTimes(2);
  });
  
  it('firstLetter to lastLetter', () => {
  
    exercicio1.firstLetter.mockImplementation((str) => str.charAt(str.length-1));
  
    exercicio1.firstLetter('hello');
  
    expect(exercicio1.firstLetter).toHaveBeenCalled();
    expect(exercicio1.firstLetter).toHaveBeenCalledTimes(1);
    expect(exercicio1.firstLetter).toHaveBeenCalledWith('hello');
    expect(exercicio1.firstLetter('hello')).toBe('o');
    expect(exercicio1.firstLetter).toHaveBeenCalledTimes(2);
  });
  
  it('concatTwoStr to concatThreeStr', () => {
  
    exercicio1.concatStr.mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);
  
    exercicio1.concatStr('hello', 'world', '!');
  
    expect(exercicio1.concatStr).toHaveBeenCalled();
    expect(exercicio1.concatStr).toHaveBeenCalledTimes(1);
    expect(exercicio1.concatStr).toHaveBeenCalledWith('hello', 'world', '!');
    expect(exercicio1.concatStr('Hello', 'World', '!')).toBe('HelloWorld!');
    expect(exercicio1.concatStr).toHaveBeenCalledTimes(2);
  });
});

describe('testes 3', () => {

  const apiURL = jest.spyOn(exercicio1, "getAPI");
  afterEach(apiURL.mockReset);

  it('Requisição da API retorna "request success"', async () => {
    apiURL.mockResolvedValue('request success');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request success');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });
  it('Requisição da API retorna "request failed"', () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('request failed');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});
