function hydrate(str) {
  const strSum = str.split('').filter((num) => parseInt(num)).map((n) => parseInt(n)).reduce((sum, cur) => sum + cur);
  return (strSum === 1) ? '1 copo de água' : `${strSum} copos de água`;
}

module.exports = hydrate;