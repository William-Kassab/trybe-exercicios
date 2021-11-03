const randomNum = () => Math.floor(Math.random() * 101);

const upperCase = (str) => str.toUpperCase();

const firstLetter = (str) => str.charAt(0);

const concatStr = (str1, str2) => `${str1}${str2}`;

const getAPI = async () => {
  return fetch('https://dog.ceo/dog-api/')
  .then((response) => response.json())
  .then((json) => response.ok ? Promise.resolve(json) : Promise.reject(json))
}

module.exports = { upperCase, firstLetter, concatStr, randomNum, getAPI };
