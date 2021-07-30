let n = 5;
let star = '';

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n - i; j += 1){
    star += ' ';
  }
  for (let k = 1; k <= 2 * i - n; k += 1){
    star += '*';
  }
  star += '\n';
}

console.log(star);



//Depois, faça uma pirâmide com n asteriscos de base