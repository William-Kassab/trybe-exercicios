const field2 = document.getElementById('field2');
const inputEstados = document.getElementById('input-estado');
let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

function criaListaEstados() {
  for (let i = 0; i < estados.length; i += 1) {
    let option = document.createElement('option');
    option.className = 'estados';
    option.innerText = estados[i];
    inputEstados.appendChild(option);
  }
}
criaListaEstados();

function submitButton() {
  const subButton = document.getElementById('submit-button')
  subButton.innerText = 'Submit';
  subButton.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(field2.innerHTML);
  });
}

submitButton();