const newEmployees = () => {
  const employees = {
    id1: employee('Pedro Guerra'),
    id2: employee('Luiza Drumond'),
    id3: employee('Carla Paiva'),
  }
  return employees;
};

const employee = (nomeCompleto) => {
  const emailForm = nomeCompleto.split(' ').join('_').toLowerCase();
  return {
    nome: nomeCompleto, 
    email: `${emailForm}@trybe.com`
  }
}

console.log(newEmployees());

/*1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.*/