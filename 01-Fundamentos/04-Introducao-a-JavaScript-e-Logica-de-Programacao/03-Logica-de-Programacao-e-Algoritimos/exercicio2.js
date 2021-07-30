let n = 5;
let star = '';

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= i; j += 1){
    star += '*';
  }
  star += '\n';
}

console.log(star);



//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base