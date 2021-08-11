function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/*Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
*Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
*Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
*Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let days = document.querySelector("#days");

function createMonthDays(array) {
  for (i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayList = document.createElement("li");
    dayList.className = "day";
    dayList.innerHTML = day;
    if (day === 24 || day === 31) {
      dayList.classList.add("holiday");
    }
    else if (day === 4 || day === 11 || day === 18) {
      dayList.classList.add("friday");
    }
    else if (day === 25) {
      dayList.classList.add("holiday", "friday");
    }
    days.appendChild(dayList);
  };
};

createMonthDays(dezDaysList);


/*Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
*Adicione a este botão a ID "btn-holiday" .
*Adicione este botão como filho/filha da tag <div> com classe "buttons-container"*/
function createHolidayButton(str){
  let buttonsContainer = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.innerHTML = str;
  button.id = "btn-holiday";
  buttonsContainer.appendChild(button);
}
createHolidayButton("Feriados");


/*Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
*É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)"*/
function changeBackColorHolidays() {
  let holidayButton = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'lightgreen';

  holidayButton.addEventListener('click', function() {
    for (let i = 0; i < holidays.length; i += 1) {
      if (holidays[i].style.backgroundColor === newColor) {
        holidays[i].style.backgroundColor = backgroundColor;
      } else {
        holidays[i].style.backgroundColor = newColor;
      }
    }
  })
};
changeBackColorHolidays();


/*Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
*Adicione a este botão o ID "btn-friday" .
*Adicione este botão como filho/filha da tag <div> com classe "buttons-container"*/
function createFridayButton(str){
  let buttonsContainer = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.innerHTML = str;
  button.id = "btn-friday";
  buttonsContainer.appendChild(button);
}
createFridayButton("Sexta-feira");


/*Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
*É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias*/
function changeFridayText(arr) {
  let fridayButton = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday')
  let newText = 'SEXTOU!';

  fridayButton.addEventListener('click', function() {
    for (let i = 0; i < fridays.length; i += 1) {
      if (fridays[i].innerHTML !== newText) {
        fridays[i].innerHTML = newText;
      } else {
        fridays[i].innerHTML = arr[i];
      }
    }
  })
};
let dezFridaysList = [4, 11, 18, 25];
changeFridayText(dezFridaysList);


/*Exercício 6
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original*/
function zoomIn() {
  let days = document.querySelector("#days");
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '35px';
    event.target.style.fontWeight = '600';
  })
}

function zoomOut() {
  days = document.querySelector("#days");
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}
zoomIn();
zoomOut();


/*Exercício 7
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
*O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"*/
function addTask(task) {
  let myTasks = document.querySelector(".my-tasks");
  let createTask = document.createElement("span");
  createTask.innerHTML = task;
  myTasks.appendChild(createTask);
}
addTask('Cozinhar');


/*Exercício 8
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
*O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
*O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"*/
function taskColor(color) {
  let myTasks = document.querySelector(".my-tasks");
  let createColor = document.createElement("div");
  createColor.className = 'task';
  createColor.style.backgroundColor = color;
  myTasks.appendChild(createColor);
}
taskColor('blue');


/*Exercício 9
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
*Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada
*/
function taskSelect() {
  let task = document.querySelector(".task");
  let taskSelect = document.getElementsByClassName(".task selected");

  task.addEventListener("click", function(event) {
    if (taskSelect.length === 0) {
      event.target.className = 'task selected';
    }
    else {
      event.target.className = 'task';
    }
  })
}
taskSelect();


/*Exercício 10
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)*/
function dayClickColor() {
  let taskSelected = document.querySelector(".task selected");
  let days = document.querySelector("#days");
  let tasks = document.querySelector(".task");
  let taskColor = tasks.style.backgroundColor;

  days.addEventListener("click", function(event) {
    let eventColor = event.target.style.color;
    if (taskSelected.length > 0 && eventColor !== taskColor) {
      let color = taskSelected[0].style.backgroundColor;
    }
    else if (eventColor === taskColor && taskSelected.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}
dayClickColor();