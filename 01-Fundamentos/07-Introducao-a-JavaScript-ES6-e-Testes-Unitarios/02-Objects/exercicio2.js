const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


/*1 - Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/
const addKey = (obj, key, value) => {
  obj[key] = value;
}
addKey(lesson2, 'turno', 'manhã');
console.log(lesson2);


/*2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/
const keys = obj => {
  return Object.keys(obj);
}
console.log(keys(lesson1));


/*3 - Crie uma função para mostrar o tamanho de um objeto.*/
const objLength = obj => {
  return Object.keys(obj).length;
}
console.log(objLength(lesson1));


/*4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/
const values = obj => {
  return Object.values(obj);
}
console.log(values(lesson1));


/*5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.*/
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);


/*6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/
const totalStudents = () => {
  return (lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes);
}
console.log(totalStudents(allLessons));


/*7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.*/
const keyValue = (obj, position) => {
  const values = Object.values(obj);
  return values[position];
}
console.log(keyValue(lesson1, 0));