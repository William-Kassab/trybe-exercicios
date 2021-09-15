/*4 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.*/

const didSendMessageSucceed = Math.random() * 1.0;

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => ((degreeCelsius * 9/5) + 32).toFixed(2);

const temperatureInFahrenheit = (temperature) =>
  (`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  (`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  (`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback1, callback2) => {
  setTimeout(() => {
    if (didSendMessageSucceed >= 0.6) {
      console.log(callback1(toFahrenheit(getMarsTemperature())));
    }
    else {
      console.log(callback2('Robot is busy'));
    }
  }, messageDelay());
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);