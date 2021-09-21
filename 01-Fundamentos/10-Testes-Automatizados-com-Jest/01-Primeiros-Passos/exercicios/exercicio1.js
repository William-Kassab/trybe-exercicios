function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  return arr.sort().map((techs) => ({
    tech: techs,
    name: name,
  }));
}

module.exports = techList;