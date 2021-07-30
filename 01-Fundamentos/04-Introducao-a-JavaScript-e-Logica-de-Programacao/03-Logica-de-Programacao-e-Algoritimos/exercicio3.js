let n = 5;
let star = '';

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n - i; j += 1){
    star += ' ';
  }
  for (let k = 1; k <= i; k += 1){
    star += '*';
  }
  star += '\n';
}

console.log(star);




//Agora inverta o lado do triângulo